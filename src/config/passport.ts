// passport.ts
import passport from "passport";
import { User } from "../entity/user.entity";
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";

import {Md5} from "md5-typescript";
import { Strategy as LocalStrategy } from "passport-local";
import { MD5 } from "crypto-js";

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.userId);
});

passport.deserializeUser((id, done) => {
    const userRepository = getRepository(User);
    userRepository.findOne(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
});

passport.use(new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
    console.log("hi local strategy");
    const userRepository = getRepository(User);

    userRepository.findOne({ where: { userName: username.toLowerCase() } })
        .then(user => {
            if (!user) {
                console.log("hi error");
                return done(null, false, { message: "No User Exists." });
            }

            const hashedPassword = Md5.init(password);
            console.log(hashedPassword);
            if (hashedPassword === user.password) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Invalid username or password." });
            }
        })
        .catch(err => {
            return done(err);
        });
}));

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

export default passport;

import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { User } from "../entity/user.entity";
import passport from "passport";
import { IVerifyOptions } from "passport-local";
import { getRepository } from "typeorm";

/**
 * Login page.
 * @route GET /login
 */
export const getLogin = (req: Request, res: Response): void => {
    res.render("login", { message: req.flash("error") });
};

/**
 * Sign in using email and password.
 * @route POST /login
 */
export const postLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Validate userName and password
    await check("userName", "Username cannot be blank").isLength({ min: 1 }).run(req);
    await check("password", "Password cannot be blank").isLength({ min: 1 }).run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/login");
    }

    passport.authenticate("local", async (err: Error, user: User, info: IVerifyOptions) => {
        if (err) { return next(err); }
        if (!user) {
            req.flash("errors", { msg: info.message });
            return res.redirect("/login");
        }

        // Check if user exists in the database
        const userRepository = getRepository(User);
        const existingUser = await userRepository.findOne({ userName: user.userName });
        if (!existingUser) {
            req.flash("errors", { msg: "User not found." });
            return res.redirect("/login");
        }

        // Proceed with login if user exists
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            req.flash("success", { msg: "Success! You are logged in." });
            res.redirect(req.session.returnTo || "/");
        });
    })(req, res, next);
};

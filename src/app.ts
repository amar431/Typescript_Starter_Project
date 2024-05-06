import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport, { isAuthenticated } from "./config/passport"; // Import Passport configuration
import { User } from "./entity/user.entity";
import path from "path";
import { Request, Response, NextFunction } from "express";
import flash from "express-flash";
import { createConnection } from "typeorm"; // Import createConnection from TypeORM
import { __ } from "i18n";
import { Md5 } from "md5-typescript";

// Create Express server
const app = express();

// Express configuration

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "..", "src", "views")); // Adjust path if necessary
app.set("view engine", "ejs"); // Set EJS as the view engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "your_secret_key", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // Include express-flash middleware here

// Routes
// app.get("/", (req, res) => {
//     res.render("index", { user: req.user });
// });

createConnection().then(async () => {
    console.log("Connected to database");

    // Routes
    // app.get("/", (req, res) => {
    //     res.render("index", { user: req.user });
    // });

    app.get("/login", (req, res) => {
        
        res.render("login", { message: req.flash("error") });
    });

    app.post("/login", (req, res, next) => {
        console.log("Login route accessed");
        console.log("Received login request:", req.body);



        passport.authenticate("local", {
            successRedirect: "/dashboard",
            failureRedirect: "/login",
            failureFlash: true // Enable flash messages for failed login attempts
        })(req, res, next);
    });
    app.get("/dashboard", isAuthenticated, (req, res) => {
        res.render("dashboard", { user: req.user });
    });
    

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });

}).catch(error => {
    console.error("Error connecting to database:", error);
});

export default app;
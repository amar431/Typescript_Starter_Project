import winston from "winston";

// Define your logging options
const options: winston.LoggerOptions = {
    level: process.env.NODE_ENV === "production" ? "error" : "debug",
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug",
        }),
        new winston.transports.File({ filename: "debug.log", level: "debug" }),
    ],
};

// Create a new logger instance
const logger = new winston.Logger(options);

// Optional: Log a message in debug level if not in production
if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;

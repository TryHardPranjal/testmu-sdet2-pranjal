import winston from "winston";

// Centralized framework logger
// Helps debugging and CI troubleshooting

export class Logger {
  private static logger = winston.createLogger({
    level: "info",

    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),

      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level.toUpperCase()}] ${message}`;
      }),
    ),

    transports: [
      // Console output

      new winston.transports.Console(),

      // File output

      new winston.transports.File({
        filename: "test-results/framework.log",
      }),
    ],
  });

  public static info(message: string): void {
    this.logger.info(message);
  }

  public static error(message: string): void {
    this.logger.error(message);
  }
}

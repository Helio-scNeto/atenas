import * as express from "express";
import * as cors from "cors";
import errorMiddleware from "./middlewares/middlewareError";
import Routes from "./routes";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get("/", (req, res) => res.json({ ok: true }));
    this.app.use(Routes);
    this.app.use(errorMiddleware);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    // this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204
    }))
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();

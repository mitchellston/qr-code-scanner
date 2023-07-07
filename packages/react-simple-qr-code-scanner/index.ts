export { QrCodeScanner } from "./src/QrCodeScanner";
import { Result as Res, Exception as Exp } from "@zxing/library";

/** The type that the on result event returns */
export type Result = Res;

/** The type that the on exception event returns */
export type Exception = Exp;

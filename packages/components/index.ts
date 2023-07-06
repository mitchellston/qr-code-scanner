export { QrCodeScanner } from "./src/QrCodeScanner";
import { Exception as Exp, Result as Res } from "@zxing/library";

/** The type that the on result event returns */
export type Result = Res;

/** The type that the on error event returns */
export type Exception = Exp;

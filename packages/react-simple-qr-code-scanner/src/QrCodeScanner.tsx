import { BrowserMultiFormatReader, Exception as Exp } from "@zxing/library";
import { Result, Exception } from "..";
import { useEffect, useRef } from "react";
import { parse } from "superjson";
import React from "react";

export function QrCodeScanner<T = string>(props: {
  /** This event gets fired when a qr-code is scanned */
  onResult: (result: T, rawResult: Result) => void;
  /** This event gets fired when a exception occurs */
  onError?: (error: Exception) => void;
  /**
   * Which mode should the scanner face
   * @default "environment"
   */
  facingMode?: "environment" | "user";
  /** Validate the qr codes data */
  validate?: (data: unknown) => T;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reader = useRef(new BrowserMultiFormatReader());

  useEffect(() => {
    if (!videoRef.current) return;
    reader.current.decodeFromConstraints(
      {
        audio: false,
        video: {
          facingMode: props.facingMode || "environment",
        },
      },
      videoRef.current,
      (result, error) => {
        if (result) {
          const data = () => {
            try {
              let data: T;
              try {
                data = parse<T>(result.getText());
              } catch (error) {
                return props.validate
                  ? props.validate(result.getText())
                  : (result.getText() as T);
              }
              return props.validate ? props.validate(data) : data;
            } catch (error: any) {
              if (
                error &&
                error != null &&
                error != undefined &&
                typeof error.message == "string"
              )
                throw new Exp(error.message);
              throw new Exp("Unknown error");
            }
          };
          props.onResult(data(), result);
        }
        if (
          error &&
          props.onError != null &&
          // not found error is not an error
          error.getKind() !== "NotFoundException"
        )
          props.onError(error);
      }
    );
    return () => {
      reader.current.reset();
    };
  }, [videoRef]);
  return (
    <div>
      <video ref={videoRef}></video>
    </div>
  );
}

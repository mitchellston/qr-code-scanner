import { BrowserMultiFormatReader, Exception, Result } from "@zxing/library";
import { useEffect, useRef } from "react";
import React from "react";
type props = {
  /** This event gets fired when a qr-code is scanned */
  onResult: (result: Result) => void;
  /** This event gets fired when a exception occurs */
  onError?: (error: Exception) => void;
  /**
   * Which mode should the scanner face
   * @default "environment"
   */
  facingMode?: "environment" | "user";
};
export const QrCodeScanner = (props: props) => {
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
        if (result) props.onResult(result);
        if (error && props.onError != null) props.onError(error);
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
};

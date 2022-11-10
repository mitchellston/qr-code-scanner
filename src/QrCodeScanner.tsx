import { BrowserMultiFormatReader, Exception, Result } from "@zxing/library";
import { useEffect, useRef } from "react";
import React from "react";
type props = {
  onResult: (result: Result) => void;
  Errors?: (error: Exception) => void;
  facingMode?: "enviroment" | "user";
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
          facingMode: props.facingMode || "enviroment",
        },
      },
      videoRef.current,
      (result, error) => {
        if (result) props.onResult(result);
        if (error && props.Errors != null) props.Errors(error);
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

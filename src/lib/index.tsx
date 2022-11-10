import { BrowserMultiFormatReader, Exception, Result } from "@zxing/library";
import { useEffect, useRef } from "react";
import React from "react";
type props = {
  result?: (result: Result) => void;
  errors?: (error: Exception) => void;
};
const BarcodeScanner = (props: props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reader = useRef(new BrowserMultiFormatReader());

  useEffect(() => {
    if (!videoRef.current) return;
    reader.current.decodeFromConstraints(
      {
        audio: false,
        video: {
          facingMode: "enviroment",
        },
      },
      videoRef.current,
      (result, error) => {
        if (result && props.result != null) props.result(result);
        if (error && props.errors != null) props.errors(error);
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
export default BarcodeScanner;

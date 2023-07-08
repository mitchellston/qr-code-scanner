import { useState } from "react";
import { Exception, QrCodeScanner } from "react-simple-qr-code-scanner";

function App() {
  const [result, setResult] = useState<unknown | null>(null);
  const [error, setError] = useState<Exception | null>(null);
  return (
    <div className="flex justify-center items-center w-screen h-screen max-h-screen max-w-[100vw]">
      <div className="w-3/4 max-w-[100vw] max-h-full sm:w-1/2">
        <QrCodeScanner
          onResult={(resultScan) => {
            console.log(resultScan);
            if (error) setError(null);
            if (result != resultScan) setResult(resultScan);
          }}
          onError={(errorScan) => {
            if (result) setResult(null);
            setError(errorScan);
          }}
        >
          {(videoElement) => (
            <div className="border-blue-300 border-4 border-spacing-1 w-full ">
              <video ref={videoElement} className="w-full h-full" />
            </div>
          )}
        </QrCodeScanner>
        <div className="text-center  max-w-full h-52 overflow-auto">
          {result != null && <pre>{JSON.stringify(result)}</pre>}
          {error != null && <p>{error.message}</p>}
        </div>
      </div>
    </div>
  );
}
export default App;

import { useState } from "react";
import { Exception, QrCodeScanner } from "react-simple-qr-code-scanner";
type qrCodeData = {
  foo: string;
  bar: number;
};
function App() {
  const [result, setResult] = useState<qrCodeData | null>(null);
  const [error, setError] = useState<Exception | null>(null);
  return (
    <>
      <QrCodeScanner
        validate={(data) => {
          return data as qrCodeData;
        }}
        onResult={(resultScan) => {
          if (error) setError(null);
          if (result != resultScan) setResult(resultScan);
        }}
        onError={(errorScan) => {
          if (result) setResult(null);
          setError(errorScan);
        }}
      />
      <div>
        {result != null && <pre>{JSON.stringify(result)}</pre>}
        {error != null && <p>{error.message}</p>}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { Exception, QrCodeScanner } from "react-simple-qr-code-scanner";
import { ZodQrCodeDataValidator } from "react-simple-qr-code-scanner/validators";
import { z } from "zod";
const QrCodeData = z.string().url();
function App() {
  const [result, setResult] = useState<z.infer<typeof QrCodeData> | null>(null);
  const [error, setError] = useState<Exception | null>(null);

  return (
    <>
      <QrCodeScanner
        validate={(data) => ZodQrCodeDataValidator(data, QrCodeData)}
        onResult={(resultScan) => {
          if (error) setError(null);
          if (result != resultScan) setResult(resultScan);
        }}
        onError={(errorScan) => {
          if (result) setResult(null);
          setError(errorScan);
        }}
        timeBetweenQrCodeLookup={0}
      />
      <div>
        {result != null && <pre>{JSON.stringify(result)}</pre>}
        {error != null && <p>{error.message}</p>}
      </div>
    </>
  );
}
export default App;

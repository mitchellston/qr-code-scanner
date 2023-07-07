import { useState } from "react";
import { Exception, QrCodeScanner } from "react-simple-qr-code-scanner";
type QrCodeData = {
  foo: string;
  bar: number;
};
function App() {
  const [result, setResult] = useState<QrCodeData | null>(null);
  const [error, setError] = useState<Exception | null>(null);
  return (
    <>
      <QrCodeScanner
        validate={(data) => {
          if (!data || data == null || typeof data != "object")
            throw new Error("data is required");
          if (
            !Object.prototype.hasOwnProperty.call(data, "foo") ||
            !("foo" in data) ||
            data.foo == null ||
            typeof data.foo != "string"
          )
            throw new Error("foo is required");
          if (
            !Object.prototype.hasOwnProperty.call(data, "bar") ||
            !("bar" in data) ||
            data.bar ||
            typeof data.bar != "number"
          )
            throw new Error("bar is required");
          return { foo: data.foo, bar: data.bar };
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

// import { Exception, QrCodeScanner } from "react-simple-qr-code-scanner";
// import { useState } from "react";
// type QrCodeData = {
//   foo: string;
//   bar: number;
// };
// export function NoValidation() {
//   const [result, setResult] = useState<QrCodeData | null>(null);
//   const [error, setError] = useState<Exception | null>(null);
//   return (
//     <>
//       <QrCodeScanner<QrCodeData>
//         onResult={(resultScan) => {
//           if (error) setError(null);
//           if (result != resultScan) setResult(resultScan);
//         }}
//         onError={(errorScan) => {
//           if (result) setResult(null);
//           setError(errorScan);
//         }}
//       />
//       <div>
//         {result != null && <pre>{JSON.stringify(result)}</pre>}
//         {error != null && <p>{error.message}</p>}
//       </div>
//     </>
//   );
// }

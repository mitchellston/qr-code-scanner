import { useState } from "react";
import { Exception, QrCodeScanner, Result } from "components";

function App() {
  return (
    <>
      <QrCodeScanner
        onResult={(resultScan) => {
          console.log(resultScan);
        }}
        onError={console.log}
      />
    </>
  );
}

export default App;

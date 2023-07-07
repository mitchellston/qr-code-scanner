# A simple qr-code scanner for react

This is a simple qr-code scanner component for react

## Installing

A step by step series guide to setup this component.

### Start a react project

- Vite js:

```
npm create vite@latest my-qr-code-scanner-application -- --template react
```

- Vite ts:

```
npm create vite@latest my-qr-code-scanner-application -- --template react-ts
```

### Install the package with npm

```
npm i react-simple-qr-code-scanner
```

## Basic demo

```tsx
import { QrCodeScanner } from "react-simple-qr-code-scanner";
function App() {
  return (
    <QrCodeScanner
      onResult={(result, rawResult) => {
        console.log(result);
      }}
      Errors={(error) => {
        console.log(error);
      }},
      facingMode={"environment"} //or user
    />
  );
}
```

### Validating qr code result

```tsx
import { useState } from "react";
import { Exception, QrCodeScanner } from "react-simple-qr-code-scanner";
type QrCodeData = {
  foo: string;
  bar: number;
};
function App() {
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
        onResult={(result) => {
          console.log(result); // result will be of type IQrCodeData here (since the validation checks for this)
        }}
        onError={(errorScan) => {
          console.log(errorScan.message); // Get the error messages or any other error message
        }}
      />
    </>
  );
}
```

## License

This project is licensed under the [MIT](LICENSE)
License - see the [LICENSE](LICENSE) file for
details

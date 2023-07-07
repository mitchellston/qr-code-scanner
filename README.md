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

## Demos

### Basic

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

### Validating qr code data

_Currently there is only a zod validator_

```tsx
import { QrCodeScanner } from "react-simple-qr-code-scanner";
import { ZodQrCodeDataValidator } from "react-simple-qr-code-scanner/validators";
import { z } from "zod";
const QrCodeData = z.object({
  foo: z.string(),
  bar: z.number().min(500, "bar must be greater than 500"),
});
function App() {
  return (
    <>
      <QrCodeScanner
        validate={(data) => ZodQrCodeDataValidator(data, QrCodeData)}
        onResult={(result) => {
          console.log(result); // Result will be of the type {foo: string; bar: number;}
        }}
        onError={(error) => {
          console.log(error); // If the bar is less than 500 the error message will be displayed
        }}
      />
    </>
  );
}
```

### Validating qr code data with custom validation

```tsx
import { QrCodeScanner } from "react-simple-qr-code-scanner";
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
            data.bar == null ||
            typeof data.bar != "number"
          )
            throw new Error("bar is required");
          return { foo: data.foo, bar: data.bar };
        }}
        onResult={(result) => {
          console.log(result); // Result will be of type QrCodeData here (since the validation checks for this)
        }}
        onError={(errorScan) => {
          console.log(errorScan.message); // Log the validation error messages
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

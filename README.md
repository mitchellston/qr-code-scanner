# A simple qr-code scanner for react

This is a simple qr-code scanner component for react

## Installing

A step by step series guide to setup this component.

Start a node project

    npm init

Install the library with composer

    npm i react-simple-qr-code-scanner

### Demo

```tsx
import { QrCodeScanner } from "react-simple-qr-code-scanner";
function App() {
  return (
    <QrCodeScanner
      onResult={(result) => {
        console.log(result);
      }}
      Errors={(error) => {
        //console.log(error);
      }},
      facingMode={"environment"} //or user
    />
  );
}
```

## License

This project is licensed under the [MIT](LICENSE)
License - see the [LICENSE](LICENSE) file for
details

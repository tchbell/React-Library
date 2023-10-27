# React Library

## Overview

Welcome to the React Library project! This is a versatile React library that you can use in your projects to enhance functionality and streamline development. This readme provides you with essential information on how to work with this library, including installation, usage, and versioning.

## Installation

To use the React Library in your project, you can install it via npm. Make sure you have npm and Node.js installed on your system before proceeding.

npm install react-library

## Usage

Once you've installed the React Library, you can import and use its components or functions in your React application as follows:

```
jsx
import React from 'react';
import { ComponentName } from 'react-library';

function App() {
  return (
    <div>
      <ComponentName />
    </div>
  );
}


export default App;
```

To use the AgeGate you must wrap it in the CookieWrapper

```
  <CookiesWrapper>
    {' '}
    <AgeGate />
  </CookiesWrapper>
```

## Development

If you want to contribute to the React Library project or customize it for your specific needs, you'll need to work with the source code. Here are the commands to help you with the development process:

### Building the Library Package

To create the library package using Rollup, run the following command:

`npm run rollup`

This will generate a production-ready package of the library in the dist folder.

## Versioning

Versioning
The React Library follows semantic versioning for releases. You can use the following npm commands to manage the library's version:

To make small adjustments use 'patch':
`npm version patch`

For larger updates, use minor:
`npm version minor`

For significant changes or breaking updates, use major:
`npm version major`

## Publishing

After building the library, updating the version you can publish with npm publish.

Remember to push your changes and tags to the repository after updating the version.

# @legocss/core

[![NPM](https://img.shields.io/npm/v/@legocss/core.svg)](https://www.npmjs.com/package/@legocss/core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save @legocss/core
```

This package contains all Core packages, including:
- utilities [![NPM](https://img.shields.io/npm/v/@legocss/utilities.svg)](https://www.npmjs.com/package/@legocss/utilities) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
- css-reset [![NPM](https://img.shields.io/npm/v/@legocss/css-reset.svg)](https://www.npmjs.com/package/@legocss/css-reset) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
- foundation [![NPM](https://img.shields.io/npm/v/@legocss/foundation.svg)](https://www.npmjs.com/package/@legocss/foundation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Usage: WIP

To use the core styles in your own css.

`.scss` file:
```bash
@import "~@legocss/core";

.test {
	color: var(--color-primary);
	font-size: var(--type-scale-headline);
}
```


## Development

To compile css to the dist folder - dev:
```bash
npm run dev
```

To compile css to the dist folder - product:
```bash
npm run package
```


## License

MIT © [morgantaylor](https://github.com/morgantaylor)
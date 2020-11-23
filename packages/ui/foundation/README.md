# @legocss/foundation

[![NPM](https://img.shields.io/npm/v/@legocss/foundation.svg)](https://www.npmjs.com/package/@legocss/foundation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save @legocss/foundation
```

This package contains the foundation styles of the LegoCSS library, including:
- Colors
- Font
- Type-scale
- Typography


## Usage: WIP

To use these styles in your own css.

`.scss` file:
```bash
@import "~@legocss/foundation";

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
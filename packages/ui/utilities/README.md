# @legocss/utilities

[![NPM](https://img.shields.io/npm/v/@legocss/utilities.svg)](https://www.npmjs.com/package/@legocss/utilities) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save @legocss/utilities
```


## Usage: WIP

To use these mixins in your own css.

1. Make sure that you have `node-sass` installed
2. Import the mixin file in your `.scss` file:
```bash
@import '@legocss/utilities/mixins.scss';
@import '@legocss/utilities/breakpoints.scss';

.test {
	@include text(var(--type-scale-headline), 1.25, 600, var(--color-primary))
}
```


## License

MIT © [morgantaylor](https://github.com/morgantaylor)

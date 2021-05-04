# @stardust-configs/prettier-config

> Shareable Prettier config

## Install

```bash
$ npm install @stardust-configs/prettier --save-dev
```

## Usage

Edit `.prettierrc`.

```json
"@stardust-configs/prettier-config"
```

## Override

Override `.prettierrc.js`.

```js
module.exports = {
  ...require('@stardust-configs/prettier-config'),
  printWidth: 80,
}
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT

---

Inspired by [azz/prettier-config](https://github.com/azz/prettier-config)

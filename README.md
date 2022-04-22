# @stardust-configs/prettier-config

> Shareable Prettier config

## Install

```sh
npm install @stardust-configs/prettier-config -D
```

or

```sh
yarn add @stardust-configs/prettier-config -D
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

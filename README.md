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

## Publish a new version

```bash
# Write token to .env file
$ echo "CONVENTIONAL_GITHUB_RELEASER_TOKEN=\"[GITHUB_TOKEN]\"" > .env

# Bump version
$ yarn run version

# Push to GitHub
$ git push --follow-tags origin master

# Create a new release
$ yarn release

# Publish to npm
$ npm publish
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT

---

Inspired by [azz/prettier-config](https://github.com/azz/prettier-config)

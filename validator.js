const Ajv = require('ajv').default
const consola = require('consola')
const fetch = require('node-fetch')
const fs = require('fs')
const migrate = require('json-schema-migrate')
const path = require('path')

const configFileName = '.prettierrc.json'
const configFilePath = path.resolve(process.cwd(), configFileName)
const jsonSchemaURL = 'https://json.schemastore.org/prettierrc'

;(async () => {
  const config = await fs.promises.readFile(configFilePath).then((data) => {
    return JSON.parse(data)
  })

  const schema = await fetch(jsonSchemaURL).then((data) => {
    return data.json()
  })

  migrate.draft7(schema)

  const ajv = new Ajv()
  const validate = ajv.compile(schema)
  const valid = validate(config)

  if (valid) {
    consola.success(`${configFileName} is valid`)
  } else {
    consola.error(`${configFileName} is invalid`)

    return process.exit(1)
  }
})()

require('dotenv').config()

const app = require('./src/server')
const db = require('./src/lib/db')

async function main () {
  await db.connect()
  console.log('DB connected')
  app.listen(app.get('port'), () => {
    console.log(`Server running on port: ${app.get('port')}`)
  })
}

main()
  .then(() => console.log('Server is ready'))
  .catch(err => console.error('Error: ', err))

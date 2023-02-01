import 'module-alias/register'
import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import setupApp from '@main/config/app'
import env from './config/env'

console.log('here')

dbConnection.connect(env.mongoUrl).then(() => {
  console.log('MongoDB connected')
  const app = setupApp()
  app.listen(env.port, () => { console.log(`Server running on port ${env.port}`) })
}).catch(console.error)

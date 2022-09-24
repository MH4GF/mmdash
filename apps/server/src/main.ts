import * as dotenv from 'dotenv'

import { server } from './server'

dotenv.config()

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})

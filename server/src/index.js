import server from './server'
import dbConnect from './db'

const startServer = async () => {
  await dbConnect()

  const port = process.env.PORT || 8081
  server.listen(port, () => console.log(`Listening on port ${port}`))
}

startServer()

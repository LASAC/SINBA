import server from './server'

const port = process.env.PORT || 8081
server.listen(port, () => console.log(`Listening on port ${port}`))

export default server

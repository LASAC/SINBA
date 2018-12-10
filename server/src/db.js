import mongoose from 'mongoose'

export default () => {
  // connect to mongoose
  const dbuser = process.env.SINBA_DB_USER
  const dbpassword = process.env.SINBA_DB_PWD
  const dbhost = process.env.SINBA_DB_HOST
  if (!dbuser || !dbpassword || !dbhost) {
    throw new Error('Missing Database Environment Variables')
  }

  const mongoUri = `mongodb://${dbuser}:${dbpassword}@${dbhost}`
  mongoose
    .connect(
      mongoUri,
      { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB connection successful!'))
    .catch(err => console.log('Error connecting to MongoDB!', err))
}

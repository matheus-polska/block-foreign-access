import axios from 'axios'

export default async function ({ req }) {
  const ip = req.connection.remoteAddress
  console.log('<<<MEU IP:', ip)
}

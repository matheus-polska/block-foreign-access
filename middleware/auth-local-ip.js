import axios from 'axios'

export default async function (context) {
  if (process.server) {
    const req = context.req
    const headers = req && req.headers ? Object.assign({}, req.headers) : {}
    const xForwardedFor = headers['x-forwarded-for']
    const xRealIp = headers['x-real-ip']
    console.log('FOWARDED:', xForwardedFor)
    console.log('REAL IP:', xRealIp)
  }
}

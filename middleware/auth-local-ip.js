import axios from 'axios'

export default async function ({ req, error }) {
  const headers = req && req.headers ? Object.assign({}, req.headers) : {}
  const ip = headers['x-forwarded-for']
  const { data } = await axios.get(
    `https://api.ipgeolocation.io/ipgeo?apiKey=187f062c0c074f89b2a706343f6d69a8&ip=${ip}`
  )
  if (data.country_name !== 'Brazil') {
    return error({ message: 'Not allowed', statusCode: '403' })
  }
}

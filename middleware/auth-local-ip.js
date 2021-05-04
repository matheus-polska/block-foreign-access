import axios from 'axios'

export default async function ({ error }) {
  const { data } = await axios.get(
    'https://api.ipgeolocation.io/ipgeo?apiKey=187f062c0c074f89b2a706343f6d69a8'
  )
  if (data.country_name !== 'Brazil') {
    return error({ message: 'Not allowed', statusCode: '404' })
  }
}

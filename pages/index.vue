<template>
  <div class="container"><h1>Acesso Liberado</h1></div>
</template>

<script>
import axios from 'axios'
export default {
  async created() {
    const { data } = await axios.get(
      'https://api.ipgeolocation.io/ipgeo?apiKey=187f062c0c074f89b2a706343f6d69a8'
    )
    console.log(data)
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

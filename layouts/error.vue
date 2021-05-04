<template>
  <div id="error-page">
    <h1>Not Found</h1>
    <p>The requested URL was not found on this server.</p>
    <hr />
    <span>Apache/2.4.18 (Ubuntu) Server at 10.60.8.118 port 80</span>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
}
</script>

<style scoped>
#error-page {
  font-family: serif !important;
  padding: 7px;
}
p {
  margin: 20px 0px;
}
span {
  font-style: italic;
  margin-top: 10px;
  display: block;
}
</style>

<template>
  <div class="not-found-page">
    <img src="/images/404.png" alt="404 Not Found" />
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Use 100% of the viewport height */
}

.not-found-page img {
  max-width: 100%;
  height: auto; /* Maintain aspect ratio */
}
</style>

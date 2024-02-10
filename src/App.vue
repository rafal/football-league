<template>
  <PageHeader />
  <main class="content">
    <router-view></router-view>
  </main>
  <PageFooter />
</template>
<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
<style>
@import "./index.css";

.content {
  flex: 1; /* Allows content to expand and push the footer down */
  width: 90%;
  margin: 0 auto;

  h1 {
    margin: 60px auto 20px;
    font-size: 24px;
    text-align: center;
  }
}
</style>

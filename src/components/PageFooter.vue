<template>
  <footer class="page-footer">API Version: {{ apiVersion }}</footer>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      apiVersion: "",
    };
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3001/api/version"); // Fetch API version
      const data = await response.json();
      if (data.success) {
        this.apiVersion = data.version; // Set API version
      }
    } catch (error) {
      console.error("Failed to fetch API version:", error);
    }
  },
};
</script>

<style scoped>
.page-footer {
  color: #4b5c68; /* Font color */
  background-color: #f6f7f7; /* Background color */
  height: 40px; /* Height of the footer */
  display: flex;
  align-items: center; /* Center text vertically */
  justify-content: flex-end; /* Align text to the right */
  padding-right: 40px; /* 40px off the right edge */
  font-size: 12px; /* Adjust font size as needed */
  font-weight: bold; /* Make the text bold */
  margin-top: 20px; /* Add margin between footer and page content */
}
</style>

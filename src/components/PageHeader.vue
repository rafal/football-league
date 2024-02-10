<template>
  <header class="page-header">
    <router-link to="/" class="logo-link">
      <img src="/images/logo.svg" alt="Page Logo" class="logo" />
    </router-link>
    <nav class="nav-links">
      <router-link to="/schedule" class="nav-link">
        <img
          src="/images/schedule.png"
          alt="Schedule"
          class="nav-link-image"
        />Schedule
      </router-link>
      <router-link to="/leaderboard" class="nav-link">
        <img
          src="/images/leaderboard.png"
          alt="Leaderboard"
          class="nav-link-image"
        />Leaderboard
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: #025feb;
  color: #ffffff;
  height: 60px;
}

.logo {
  width: 110px;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  text-decoration: none;
  transition: color 0.3s;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link-image {
  height: 25px;
}

@media (max-width: 465px) {
  .logo-link {
    display: none;
  }

  .page-header {
  justify-content: space-around;
}
}
</style>

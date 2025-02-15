<template>
  <div class="app-container">
    <header>
      <nav>
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/upload" class="nav-link">上传视频</router-link>
      </nav>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.nav-link {
  margin-right: 20px;
  text-decoration: none;
  color: #2c3e50;
}

.router-link-active {
  font-weight: bold;
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
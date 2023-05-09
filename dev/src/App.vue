<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <router-link to="/">
            <img src="@/assets/logo.svg" alt="Курсовой макет" width="242" height="32">
          </router-link>
          <nav class="header__nav">
            <button class="header__nav-button auth" title="Профиль">
              <img src="@/assets/user-icon.svg" alt="Профиль">
              <span v-if="false">
                Константин
              </span>
            </button>
            <router-link 
              to="/cart"  
              class="header__nav-button"
            >
              <img src="@/assets/cart-icon.svg" alt="Корзина" title="Корзина" width="20" height="20">
            </router-link>
          </nav>
        </div>
      </div>
    </header>
    <router-view class="main" />
    <footer class="footer">
      <div class="container">
        <p>
          © 2023 ОБУ ИТЦ. Все права защищены.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

html,
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
}

#app {
  text-align: left;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 0 auto;
}

.container {
  max-width: 1700px;
  width: 100%;
  padding-inline: 20px;
  margin: 0 auto;
}

.title {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #0D1421;
}

.auth {
  cursor: pointer;
  gap: 10px;
}

.header {
  padding-block: 14px;
  border-bottom: 1px solid #EAECF0;

  &__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  }

  &__nav {
    display: flex;
    gap: 8px;
  }

  &__nav-button {
    min-width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.footer {
  text-align: left;
  color: #667085;
  padding-block: 24px;
}
</style>

<template>
  <div id="app">
    <header>
      <router-link to="/exercises"><h1>Office Workouts</h1></router-link>
      <router-link title="Settings" to="/settings">
        <font-awesome-icon class="menu-icon" :icon="['fas', 'cog']" size="2x" />
      </router-link>
    </header>
    <router-view/>
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

:root {
  --main-light-color: #6200ee;
  --main-dark-color: #3700b3;
  --background: #fff;
  --text-on-main: #fff;
  --text-on-background: #000;

  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--text-on-background);
}

header {
  background-color: var(--main-light-color);
  color: var(--text-on-main);
  height: 60px;
  font-size: .6em;
  line-height: 60px;
  padding-left: 22px;
}

h1 {
  margin: 0;
  float: left;
}

.menu-icon {
  float: right;
  padding: 20px;
}

a,
a:hover,
a:active,
a:focus {
  color: var(--text-on-main);
}

main {
  padding-left: 10px;
  padding-right: 10px;
  max-width: 800px;
  margin: auto;
}

main a,
main a:hover,
main a:active,
main a:focus {
  color: var(--text-on-background);
}
</style>

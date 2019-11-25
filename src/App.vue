<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    padding: 5px 15px 5px 0;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li a:hover {
    color: #404040;
  }
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'MainScreen',
        to: '/'
      },
      {
        name: 'Login',
        to: '/account/signin'
      },
      {
        name: 'Register',
        to: '/account/signup'
      },
      {
        name: '404',
        to: '/404'
      }
    ]
  })
}
</script>
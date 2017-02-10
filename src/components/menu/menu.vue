<template>

	 <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
      <el-submenu index="1">
       <router-link to="/order">order</router-link>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data () {
      return {name: 'dsfsdf'}
    },
    props: {
      menus: {
        type: Object
      }
    },
    created () {
      this.$http.get('/api/sys/menu_getDeskMenu.action').then(rsp => {
        console.log(rsp.body)
      })
    }
  }
</script>

<style lang="stylus">
	a{
    color:#fff
    text-decoration: none
  }
</style>

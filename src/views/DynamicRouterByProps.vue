<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  created () {
    const seed = this.id
    console.log('seed:', seed)
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>

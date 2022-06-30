<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:["帅哥","美女","程序员"]
    }
  },
  methods: {
    btn(){
      this.list.push(this.list[0])
      this.list.shift()
    }
  }

}
</script>

<style>

</style>
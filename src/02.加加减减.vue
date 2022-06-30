<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="item">{{item}} <button @click="del(index)">删除</button></li>
    </ul>
    <button @click="btn">生成</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[1,5,3]
    }
  },
  methods: {
    btn(){
      this.list.push(Math.floor((Math.random()*20)+1))
    },
    del(i){
      this.list.splice(i,1)
    }
  }

}
</script>

<style>

</style>
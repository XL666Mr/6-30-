<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <input type="checkbox" v-model="arr" :value="item"/>
      <span>{{ item }}</span>
    </div>
    <div>
    <p>你选中的元素, 累加的值和为: {{ sum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      arr:[]
    };
  },
  computed: {
    sum(){
      return this.arr.reduce(((num,next)=> num += next),0);
    }
    
  }
};
</script>

<style>
</style>
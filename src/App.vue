<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="getAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.check" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span>-</span><input type="text" v-model.number="item.count" /><span
            >+</span
          >
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="dels">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ getItems }}</p>
      <p>总价:{{ getAllPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 15, count: 0, check: false },
        { id: 2, name: "宝马", price: 20, count: 0, check: false },
        { id: 3, name: "奥迪", price: 30, count: 0, check: false },
      ],
    };
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    dels() {
      this.list = this.list.filter((ele) => {
        return ele.check == false;
      });
    },
    delAll() {
      this.list = [];
    },
  },
  computed: {
    getAll: {
      set(val) {
        this.list.forEach((element) => {
          element.check = val;
        });
      },
      get() {
        return this.list.every((ele) => ele.check);
      },
    },
    getItems() {
      return this.list.reduce((num, next) => {
        if (next.check) {
          num += +next.count;
        }
        return num;
      }, 0);
    },
    getAllPrice() {
      return this.list.reduce((num, next) => {
        if (next.check) {
          num += +next.price * next.count;
        }
        return num;
      }, 0);
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        newVal.forEach((ele) => {
          if (ele.count < 0 || isNaN(ele.count)) {
            ele.count = '';
          }
        });
      },
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>

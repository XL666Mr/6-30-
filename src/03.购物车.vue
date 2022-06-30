<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>品牌名称</th>
          <th>创立时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td><button @click="del(item.id)">删除</button></td>
        </tr>
        <tr v-if="list.length == 0">
          <td colspan="4">数据没有了~</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => (ele.id = id));
      this.list.splice(index, 1);
    },
  },
};
</script>

<style>
table {
    width: 600px;
    border-collapse: collapse;
}
th {
  background-color: #0094ff;
  color: white;
}
td,th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}
</style>
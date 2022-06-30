<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add()">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="change(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      name: "",
      age: "",
      sex: "男",
      flage: false,
      num: -1,
    };
  },
  methods: {
    add() {
        if(this.name =='' || this.age =='') return alert('请输入完整的内容')
      if (this.flage) {
        this.list[this.num].name = this.name
        this.list[this.num].age = this.age 
        this.flage = false;
      } else {
        const id = this.list[this.list.length - 1]
          ? this.list[this.list.length - 1].id + 1
          : 0;
        this.list.push({
          id,
          name: this.name,
          age: this.age,
          sex: this.sex,
        }),
          (this.name = "");
        this.age = "";
        this.sex = "男";
      }
    },
    del(i) {
      this.list.splice(i, 1);
      this.list.forEach((ele, index) => {
        ele.id = index;
      });
    },
    change(i) {
      (this.name = this.list[i].name),
        (this.age = this.list[i].age),
        (this.sex = this.list[i].sex);
      this.flage = true;
      this.num = i;
    },
  },
};
</script>
<style>
table {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #000;
}
</style>

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
        <option :value="0">男</option>
        <option :value="1">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ {0:'男',1:'女'} [item.sex]}}</td>
            <td>
              <button @click="del(index)">删除</button>
              <button @click="change(index)">编辑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 100,
          age: 18,
          name: "章三",
          sex: 1, // 1男 0女
        },
        {
          id: 101,
          age: 18,
          name: "章三三",
          sex: 0, // 1男 0女
        },
      ],
      name: "",
      age: "",
      sex: "男",
      flage: false,
      num: -1,
    };
  },
  methods: {
    add() {
      if (this.name == "" || this.age == "") return alert("请输入完整的内容");
      if (this.flage) {
        (this.list[this.num].name = this.name),
          (this.list[this.num].age = this.age),
          (this.list[this.num].sex = this.sex),
          (this.name = ""),
          (this.age = ""),
          (this.sex = "男"),
          (this.flage = false);
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
  width: 600px;
  border-collapse: collapse;
}
th {
  background-color: #0094ff;
  color: white;
}
tr {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}
tbody td {
  border: 1px solid black;
}
</style>

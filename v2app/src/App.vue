<template>
  <div id="app">
    <router-view></router-view>
    <p v-for="(item, index) in arrList" :key="index">{{ item }}</p>
    <button @click="fun1">click</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arrList: ["A", "B", "C", "D"],
      age: 12,
      a: 0,
      b: 2,
      arr: [],
    };
  },
  watch: {
    age(nval, oval) {
      console.log("watch age", nval, oval);
      this.age++;
    },
    async a() {
      this.arr.push(this.c);
      console.log("a");
      await this.$nextTick();
      if (this.arr.length > 0) {
        this.arr[0]();
        this.arr = [];
      }
    },
    async b() {
      this.arr.push(this.c);
      console.log("b");
      await this.$nextTick();
      if (this.arr.length > 0) {
        this.arr[0]();
        this.arr = [];
      }
    },
  },
  created() {},
  methods: {
    // d() {
    //   this.c();
    // },
    async c() {
      console.log("c");
    },
    async fun1() {
      this.age++;
      // this.age++;
      // this.a++;
      // this.b++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

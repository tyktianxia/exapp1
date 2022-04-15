<template>
  <div id="app">
    <router-view></router-view>
    <p v-for="(item, index) in arrList" :key="index">{{ item }}</p>
    <P>{{yAge}}</P>
    <button @click="fun1">click</button>
  </div>
</template>

<script>
import vm from "@/main.js";
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
  computed:{
    yAge(){
      return this.$store.getters.get2age;
    }
  },
  created() {},
  mounted() {
    console.log("this:",this)
    // console.log("vm:",vm)
    // console.log(vm === this)
    // console.log(this.$store)
    // console.log("vm.$store.state:",vm.$store.state)

    // console.log(this.$yanzhi)

    console.log("=============");
    console.log(this.$store);
  },
  methods: {
    async c() {
      console.log("c");
    },
    async fun1() {
      // this.age++;
      // this.$store.state.age++
      this.$store.dispatch("setAge", 10)
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

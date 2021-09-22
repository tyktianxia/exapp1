<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="file" @change="fileChange" />
    <button @click="test">click</button>
    <hr />
    
    <button @click="test2">upload</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fileVal: undefined,
      testval: 789,
    };
  },
  methods: {
    fileChange(e) {
      console.log(e.target.files[0]);
      this.fileVal = e.target.files[0];
    },
    test() {
      // this.$lwip.open(this.fileVal,function(err){
      //   if(!err){
      //   console.log("lwip success")
      //   }else{
      //     console.log('lwip failed')
      //   }
      // })
      // var name = this.fileVal.name;
      // var debug = { hello: "world" };
      // var blob = new Blob([JSON.stringify(debug, null, 2)], {
      // type: "application/json",
      // });
      var arr = this.fileVal?.name.split(".");
      var suffix;
      if (arr && arr.length >= 2) {
        suffix = arr.slice(0, arr.length - 1).join(".");
        var newFile = new File([this.fileVal], `${suffix}.jpeg`, {
          type: "image/jpeg",
        });
        console.log(newFile);

        const blobUrl = window.URL.createObjectURL(newFile);

        this.downloadFileByBlob(blobUrl, newFile.name);
      }
    },
    downloadFileByBlob(blobUrl, filename) {
      const eleLink = document.createElement("a");
      eleLink.download = filename;
      eleLink.style.display = "none";
      eleLink.href = blobUrl;
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    },
    test2(){
      this.uploadFile();
    },
    uploadFile() {
      const file = this.fileVal;
      if(!file) return;
      const type = file.type
      const name = file.name;
      const key = `${new Date().toString}${name}.${type}`
      const observable = qiniu.upload(file, key, token);
      const subscription = observable.subscribe(observer); // 上传开始
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

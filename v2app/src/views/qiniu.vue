<template>
  <div>
    <input type="file" @change="fileChange" />
    <button @click="test">click</button>
    <hr />
    <button @click="test2">upload</button>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "qiniuTest",
  data() {
    return {
      fileVal: undefined,
      testval: 789,
      qiniuToken: "",
    };
  },
  created() {
    let token = this.$ls.get("qiniuToken");
    if (token) {
      this.qiniuToken = token;
    } else {
      this.getQiniuToken();
    }
  },
  methods: {
    fileChange(e) {
      console.log(e.target.files[0]);
      this.fileVal = e.target.files[0];
    },
    test() {
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
    test2() {
      this.uploadFile();
    },
    uploadFile() {
      const file = this.fileVal;
      if (!file) return;
      if (!this.qiniuToken) return;

      const options = {
        quality: 0.92,
        noCompressIfLarger: true,
        // maxWidth: 1000,
        // maxHeight: 618
      };
      qiniu.compressImage(file, options).then((data) => {
        const name = file.name;
        // const type = name.substr(name.lastIndexOf('.')+1)
        const key = `${dayjs().format(
          "YYYY/MM/DD"
        )}_${dayjs().valueOf()}${name}`;

        const observable = qiniu.upload(data.dist, key, this.qiniuToken);
        const observer = {
          next(res) {
            console.log(res, "next");
          },
          error(err) {
            console.log(err, "err");
          },
          complete(res) {
            console.log(res, "complete");
          },
        };
        const subscription = observable.subscribe(observer); // 上传开始
      });
    },
    getQiniuToken() {
      // axios
      //   .get("http://localhost:3000/qiniu")
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      axios({
        method: "get",
        url: "http://10.10.0.99:3000/qiniu",
      }).then((res) => {
        console.log(res);
        let data = res.data;
        if (data.code === "00000") {
          this.qiniuToken = data.token;
          this.$ls.set("qiniuToken", data.token, 1000 * 60 * 60);
        }
      });
    },
  },
};
</script>
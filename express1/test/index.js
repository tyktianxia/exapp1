// const a = new Promise((resolve,reject)=>{
//   return resolve('hhhh');
//   console.log('jjjjjj')
// })

// a.then(res=>{
//   console.log(res)
// })

function test1() {
  // try {
    throw "test1 err";
  // } catch (error) {
  //   console.log(error);
  // }
}

try {
  test1();
} catch (error) {
  console.log("hhhhh");
}

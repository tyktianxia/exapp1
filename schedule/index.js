const schedule = require("node-schedule");
function timer1() {
  schedule.scheduleJob("30 * * * * *", () => {
    console.log("schedule timer1 serve");
  });
}

timer1();

function cancelTimer(timer) {
  timer.cancel();
}

module.exports = { cancelTimer };


// https://www.jianshu.com/p/8d303ff8fdeb 教程
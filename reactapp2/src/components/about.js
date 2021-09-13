import React from "react"
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      num:0
    }
    this.testdata = {
      data:0,
    };
  }
  componentDidMount() {
    this.timer1 = setInterval(() => this.tick(), 1000)
    // this.testdata = 1;
  }
  componentWillUnmount() {
    clearInterval(this.timer1)
  }
  render() {
    return (
      <div>
        <span>about-{this.state.date.toLocaleTimeString()}</span>
        <button onClick={this.aboutBtnClick.bind(this)}>btn-about</button>
        <span>{this.state.num}</span>
      </div>
    )
  }
  aboutBtnClick() {
    console.log(new Date())
    console.log(this.state.num)
    // this.state.num = 9990
  }
  tick() {
    let num = this.state.num;
    this.setState({
      date: new Date(),
      num: num+1
    })
    // let data = this.testdata.data
    // this.setTestdata({
    //   data:data++
    // })
  }
}
// react class形式中 state是个关键字，state: must be set to an object or null 必须是个对象（不确定是不是强制要求）
// state中的数据都具有响应性，this.x也具有响应性（x为基本数据类型）
// state只可以用setState改变，否则会丢失响应性(this.state.y,y为基本类型不会丢失，y为对象，会丢失)，具体逻辑待后续（源码或者大佬们发言）
export default About;
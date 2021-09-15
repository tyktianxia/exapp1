import React from "react";

class Learn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:0
    }
    this.fileRef = React.createRef();
  }
  render(){
    let button;
    if(this.props.showFlag){
      button = <button>haha-learn</button>
    }else{
      button = null;
    }
    let arr = [1,2,3,4,5];
    let list = arr.map(item=>{
      return <li key={item}>{item}</li>
    })
    return(
      <div>
        {button}
        {list}
        <input value={this.state.inputValue} onChange={this.handlerInput.bind(this)}></input>
        <input type="file" ref={this.fileRef}></input>
      </div>
    )
  }
  handlerInput(e){
    this.setState({
      inputValue:e.target.value
    })
    console.log(`fileName is ${this.fileRef.current.files[0].name}`)
  }
}

export default Learn;
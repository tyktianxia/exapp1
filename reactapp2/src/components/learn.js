import React from "react";

class Learn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:0
    }
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
      </div>
    )
  }
  handlerInput(e){
    this.setState({
      inputValue:e.target.value
    })
  }
}

export default Learn;
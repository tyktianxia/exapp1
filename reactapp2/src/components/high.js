import React from "react";

class High extends React.Component {
  render() {
    return <button>high</button>;
  }
}

function highTest(LowComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log("highTest didMount");
    }
    render() {
      return <LowComponent {...this.props}></LowComponent>;
    }
  };
}

export default highTest(High);

import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    // console.log("component did mount...");
    fetch("")
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          body: data.body
        });
      });
  }
  componentWillMount() {
    console.log("component will mount...");
  }
  componentDidUpdate() {
    console.log("component did update...");
  }
  componentWillUpdate() {
    console.log("component Will update...");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("component will recieve state...");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    //you must return a valid state object or null
    return null;
  }
  //this fires b4 mutation/dom is updated
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }
  render() {
    return (
      <div>
        <h1>test Component</h1>
      </div>
    );
  }
}
export default Test;

// 4a - constructor(): constructor is called when a component is being initialized and is used for initializing state and binding event handlers

class MyComp extends React.Component {
  constructor(props) {
    super(pros);
    this.state = {
      count: 0,
    };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

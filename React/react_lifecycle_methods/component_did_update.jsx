// 4c - componentDidUpdate() - method is called after a component updates and re-renders. Used for side effects after a component state or props have changed
class MyComp extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps) {
      console.log("Value props has been changed");
    }
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}

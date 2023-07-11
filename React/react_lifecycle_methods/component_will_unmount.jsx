// 4d - componentWillUnmount(): method called before a component is unmounted and removed from the DOM. Used for cleanups(cancelling timers and event subscriptions)
class MyComp extends React.Component {
  componentWillUnmount() {
    console.log("Component is being unmounted");
  }

  render() {
    return <div>Component content</div>;
  }
}

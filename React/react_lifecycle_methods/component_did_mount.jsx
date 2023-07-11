// 4b - componentDidMount(): this method is invoked immediately after the component has been mounted to the DOM. Used for initial setup, fetching data from the API, or starting timers

class MyComp extends React.Component {
  componentDidMount() {
    console.log("Component has been mounted");
  }

  render() {
    return <div>Component content</div>;
  }
}

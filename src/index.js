import React from "react";
import ReactDOM from "react-dom";
import SubscriberData from "./data/subscribers.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberList: this.fillSubscriberListFromJson()
    };
  }

  fillSubscriberListFromJson() {
    let subscriberList = SubscriberData.map(subscriber => {
      return { subscriber };
    });

    return subscriberList;
  }

  render() {
    return (
      <div>
        {/* {SubscriberData.map((subscriber, index)=>{
            return <h1>{subscriber.name}</h1>
            })} */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

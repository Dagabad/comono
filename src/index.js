import React from "react";
import ReactDOM from "react-dom";
import SubscriberData from "./data/subscribers.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subscriberList: this.fillSubscriberListFromJson(),

      // Otra forma de llamar a lista
      // subscriberList: SubscriberData.map( (subscriber) => subscriber),
    };
  }

  fillSubscriberListFromJson() {
    let subscriberList = SubscriberData.map((subscriber) => {
      return subscriber;
    });

    return subscriberList;
  }

  render() {

    // Se puede usar para definirlo local, sin necesidad de escribir this.state
    // const {subscriberList} = this.state;

    return (

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Sport</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.subscriberList.map( (subscriber) => {
                return(
                  <tr key={subscriber.id}>
                    <td>{subscriber.name}</td>
                    <td>{subscriber.lastName}</td>
                    <td>{subscriber.age}</td>
                    <td>{subscriber.sport}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

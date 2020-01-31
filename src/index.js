import React from "react";
import ReactDOM from "react-dom";
import SubscriberData from "./data/subscribers.json";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Por qué tengo que definir las funciones así?
    this.sortByAge = this.sortByAge.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortBySport = this.sortBySport.bind(this);

    this.state = {
      subscriberList: this.fillSubscriberListFromJson(),
      sortByAge: this.sortByAge.bind(this),
    };
  }

  fillSubscriberListFromJson() {
    let subscriberList = SubscriberData.map(subscriber => {
      return subscriber;
    });

    return subscriberList;
  }

  sortByAge(event) {
    const {subscriberList} = this.state
    let newSubscriberList = subscriberList.sort( (a, b) => {
      return a.age - b.age
    } );

    this.setState({subscriberList: newSubscriberList});
  }

  sortByName(event) {
    const {subscriberList} = this.state
    let newSubscriberList = subscriberList.sort( (a, b) => {
      return (a.name < b.name) ? -1 : 1; 
    } );

    this.setState({subscriberList: newSubscriberList});
  }

  sortBySport(event) {
    const {subscriberList} = this.state
    let newSubscriberList = subscriberList.sort( (a, b) => {
      return (a.sport < b.sport) ? -1 : 1;
    } );

    this.setState({subscriberList: newSubscriberList});
  }

  render() {

    const {subscriberList} = this.state;

    return (
      <div className="grid-container">
        <div className="container">

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
              {subscriberList.map(subscriber => {
                return (
                  <tr key={subscriber.id}>
                    <td>{subscriber.name}</td>
                    <td>{subscriber.lastName}</td>
                    <td>{subscriber.age}</td>
                    <td>{subscriber.sport}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="buttons-container">
            <button type="button" onClick={  this.sortByName } > Sort by name</button>
            <button type="button" onClick={  this.sortByAge } >Sort by age</button>
            <button type="button">Sort by sport</button>
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

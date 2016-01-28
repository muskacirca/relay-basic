import React from 'react';

export default class Application extends React.Component {

  hello() {
    console.log("Hello")
  }

  render() {

    console.log("Application Render sim types : " + JSON.stringify(this.props))

    var wrecks = this.props.viewer.simTypes.edges.map((wreck, i) => {
      return <li>{wreck.node.name}</li>
    })

    return  <div><ul>{wrecks}</ul></div>
  }
}

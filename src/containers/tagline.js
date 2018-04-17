import React, { Component } from 'react';

const style = {
  attr: {
    display: 'inline',
    fontSize: '30px',
  },
}

let Attribute = (props) => {
  return (
    <div style={style.attr}
         id={`attr-${props.id}`}
         className={`tagline-attributes`}>
           {props.attr}
    </div>
  )
}

export default class Tagline extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div>
        <Attribute attr={`Design`} id={1} />
        <Attribute attr={`Develop`} id={2} />
        <Attribute attr={`Ship`} id={3} />
      </div>
    )
  }
}

import React, { Component } from 'react';

const style = {
  footerContainer: {
  },
  paragraph: {
    color: '#ffffff',
    padding: '0rem 0 0.5rem',
  },
  linkStyle: {
    color: '#0d1122',
    textDecoration: 'none',
  },
}

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <footer style={style.footerContainer}>
        <p style={style.paragraph}>
          <a style={style.linkStyle}
             href="mailto:blake@indiedeveloper.io">blake@indiedeveloper.io</a>
        </p>
        <p style={style.paragraph}>
          <a style={style.linkStyle}
             href="tel:919-559-2872">919.559.2872</a>
        </p>
      </footer>
    )
  }
}

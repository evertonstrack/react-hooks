import React, { Component } from 'react';
import Row from '../Row/Row';
import { ThemeContext, LocaleContext } from '../../context';
import './card.scss';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Jubileu',
      lastname: 'Pipoca'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.lastname;
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.lastname;
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <section className={theme}>
            <Row label="Nome">
              <input value={this.state.name} id="name" onChange={this.handleChange} />
            </Row>
            <Row label="Sobrenome">
              <input value={this.state.lastname} id="lastname" onChange={this.handleChange} />
            </Row>
            <Row label="Idioma">
              <LocaleContext.Consumer>
                {({ locale }) => (
                  <p>{locale}</p>
                )}
              </LocaleContext.Consumer>
            </Row>
          </section>
        )}
       </ThemeContext.Consumer>
    );
  }
}
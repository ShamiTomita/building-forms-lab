// Add BandInput component
//form goes here
//update this component state each time new character is typed in
//only update reducx store when hitsubmit
//dispatched action required to initiate should be set up in contatiner
//passed down as the prop addBand to here
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default (BandInput)

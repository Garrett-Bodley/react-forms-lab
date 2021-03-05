import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charCount: 0,
      tweet: undefined
    };
  }

  handleInputchange = (e) => {
    this.setState({
      charCount: e.target.value.length,
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.tweet} onChange={this.handleInputchange} id="message" /><br/>
        <span>{this.props.maxChars - this.state.charCount} characters remaining</span><br/>
      </div>
    );
  }
}

export default TwitterMessage;

import React from "react";

class NewMessage extends React.Component {
  state = { message: "" };

  isDisabled = () => this.state.message === "";

  changeInput = (e) => this.setState({ message: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage({
      username: this.props.user.username,
      text: this.state.message,
    });
    this.setState({ message: "" });
  };
  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.message}
            onChange={this.changeInput}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMessage;

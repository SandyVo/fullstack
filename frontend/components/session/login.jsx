import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-div">

        {this.renderErrors()}
        <form className="session-form">
          <label className="session-form-btm-label">
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
            />
          </label>
          <br/>
          <label className="session-form-btm-label">
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
          </label>
          <br/>
          <button className="session-form-btn" onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;

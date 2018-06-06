import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
      <div className="signup-form-div">
        <h2>Sign up and see photos and</h2>
        <h2>videos from your friends.</h2>
        {this.renderErrors()}
        <form className="signup-form">
          <label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
            />
          </label>
          <br/>
          <label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="Name"
            />
          </label>
          <br/>
          <label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
            />
          </label>
          <br/>
          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
          </label>
          <br/>
          <button className="signup-btn" onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;

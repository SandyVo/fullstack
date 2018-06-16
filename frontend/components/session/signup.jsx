import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="signup-div">
        <div className="signup-form-div">
          <form className="signup-form">
            <h1>Insapix</h1>
            <h2>Sign up and see photos and videos from your friends.</h2>
            <div className="demo-login">
              <button>Sign in as Demo User</button>
            </div>
            <div className="or-label">OR</div>
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
            {this.renderErrors()}
          </form>
        </div>
        <div className="login-link">
          <p>Have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>

    );
  }
}

export default Signup;

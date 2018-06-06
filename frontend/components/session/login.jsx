import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/stations');
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
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
      <div className="login-form-div">
        <div className="image">
        </div>
        <div>
          <form className="login-form">
            <h2>Instagram</h2>
            <label className="login-form-top-label">
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('username')}
                placeholder="Username"
              />
            </label>
            <br/>
            <label className="login-form-btm-label">
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password"
              />
            </label>
            <br/>
            <button className="login-form-btn" onClick={this.handleSubmit}>Log In</button>

            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

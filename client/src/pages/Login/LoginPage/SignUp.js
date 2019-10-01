import React, { Component } from 'react';
// import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Profile from "../../Profile";

class SignUp extends Component {
    constructor() {
		super()
		this.state = {
            username: '',
			email: '',
			password: '',
            confirmPassword: '',
            redirect: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit(e) {
            console.log('sign-up handleSubmit, username: ')
            console.log(this.state.username)
            e.preventDefault()

            // axios.post('/user/', {
            //     userName: this.state.username,
            //     password: this.state.password
            // })
            // .then(response => {
			// 	console.log(response)
			// 	if (!response.data.errmsg) {
			// 		console.log('successful signup')
			// 		this.setState({ //redirect to login page
			// 			redirectTo: '/login'
			// 		})
			// 	} else {
			// 		console.log('username already taken')
			// 	}
			// }).catch(error => {
			// 	console.log('signup error: ')
			// 	console.log(error)

			// })
	    }
    
    render(){
        const { username, email, password, confirmPassword, submitted, loading, error } = this.state;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: { Profile } }} />
        } else {
            // <Redirect to={{ pathname: "/Profile" }} />
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                {/* <div className="alert alert-info">
                    Username: test<br />
                    Password: test
                </div> */}
                <h2>Signup</h2>
                <hr/>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !confirmPassword ? ' has-error' : '')}>
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                        {submitted && !confirmPassword &&
                            <div className="help-block">Confirming password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <Link to="/Profile"> <button className="btn btn-primary" disabled={loading}>SignUp</button></Link>
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
                </form>
            </div>
        );
    };
}
export default SignUp;

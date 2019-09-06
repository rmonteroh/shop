import React from 'react';
import './sign-in.styles.scss'

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {value, name} =event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2 className=''>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input onChange={this.handleChange} type="text" name="email" value={this.state.email} required id=""/>
                    <label>Password</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} required id=""/>

                    <input type="submit" value="Submit form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;
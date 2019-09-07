import React from 'react';
import './sign-in.styles.scss'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

/* Sign In Firebase */
import {signInWithGoogle} from '../../firebase/firebase.utils';
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
                    
                    <FormInput 
                        label= 'Email'
                        handleChange={this.handleChange} 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        label= 'Password'
                        handleChange={this.handleChange} 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        required 
                    />

                    <div className='buttons'>
                        <CustomButton type="submit">Sing in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sing in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
import React from 'react';
import './sign-up.styles.scss';

import {auth, createUserProfilDocument} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';


class SignUp extends React.Component {
    constructor(props){
        super(props)

        this.state={
            displayName: '',
            email:'',
            password:'',
            confiirmPassword:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password,confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfilDocument(user, {displayName});
            this.setState({
                displayName: '',
                email:'',
                password:'',
                confiirmPassword:''
            });
        } catch (error) {
            console.log(error);
            
        }
    }

    handleChange = (event) => {
        const {value, name} =event.target;
        this.setState({[name]: value})
    }

    render() 
    {
        const {displayName, email, password,confirmPassword} = this.state;
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your emmail and password</span>

            <form className='sign-up-form' onSubmit={this.handleSubmit}> 
                <FormInput 
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={this.handleChange}
                    required
                />           
                <FormInput 
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    handleChange={this.handleChange}
                    required
                />            
                <FormInput 
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                    required
                />
                <FormInput 
                    label="Confirm password"
                    type="password"
                    name="Confirm password"
                    value=''
                    handleChange={this.handleChange}
                    required
                />
            
                
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )}
}

export default SignUp;
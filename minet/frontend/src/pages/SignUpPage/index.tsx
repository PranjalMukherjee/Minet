import React from 'react'
import SignInTemplate from '../../components/templates/Signin-Signup';
import signUpImage from '../../../public/images/signup.svg';
import SignUp from '../../components/organisms/SignUp';
import ImageAtom from '../../components/atoms/Image';

const SignupPage = () => {
   
  return (
    <SignInTemplate img={<ImageAtom sourceImage={signUpImage} style={{width:"100%",height:'100%'}} />} body={<SignUp/>}/>
  );
};

export default SignupPage;
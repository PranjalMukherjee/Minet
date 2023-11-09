import React from "react";
import SignInTemplate from "../../components/templates/Signin-Signup";
import signInImage from "../../../public/images/signin.svg";
import SignIn from "../../components/organisms/SignIn";
import ImageAtom from "../../components/atoms/Image";
import ForgetPassword from "../../components/organisms/ForgetPassword";
import ResetPassword from "../../components/organisms/ResetPassword";

interface SigninPageIProps {
  component: string;
}
const SigninPage = ({ component }: SigninPageIProps) => {
  const renderComponent = () => {
    switch (component) {
      case "signin":
        return <SignIn />;
      case "forgotpassword":
        return <ForgetPassword />;
      case "resetpassword":
        return <ResetPassword />;
      default:
        return null;
    }
  };

  return (
    <SignInTemplate
      img={
        <ImageAtom
          sourceImage={signInImage}
          style={{ width: "100%", height: "100%" }}
        />
      }
      body={renderComponent()}
    />
  );
};

export default SigninPage;

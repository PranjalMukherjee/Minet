import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SignInTemplate from ".";
import signInImage from "../../../../public/images/signin.svg";
import signUpImage from "../../../../public/images/signup.svg";
import SignIn from "../../organisms/SignIn";
import Signup from "../../organisms/SignUp";
import ImageAtom from "../../atoms/Image";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SignInTemplate> = {
  title: "Templates/SignInTemplate",
  component: SignInTemplate,
};

export default meta;
const Template: StoryFn = () => (
  <BrowserRouter>
    <SignInTemplate
      img={<ImageAtom sourceImage={signInImage} />}
      body={
        <div>
          <SignIn />
        </div>
      }
    />
  </BrowserRouter>
);

export const SignInHome = Template.bind({});
SignInHome.args = {
  img: <ImageAtom sourceImage={signInImage} />,
  body: (
    <div>
      <SignIn />
    </div>
  ),
};

export const SignUpHome = Template.bind({});
SignUpHome.args = {
  img: <ImageAtom sourceImage={signUpImage} />,
  body: (
    <div>
      <Signup />
    </div>
  ),
};

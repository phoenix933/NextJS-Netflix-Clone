import React from "react";
import FeatureWrapper from "../components/Feature/FeatureWrapper";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Logo from "../components/Header/Logo";
import Navbar from "../components/Header/Navbar";
import SigninButton from "../components/Header/SigninButton";
import FeatureTitle from "../components/Feature/FeatureTitle";
import FeatureSubTitle from "../components/Feature/FeatureSubTitle";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormButton from "../components/OptForm/OptFormButton";
import OptFormText from "../components/OptForm/OptFormText";

function HeaderCompound({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </Navbar>
        <FeatureWrapper>
          <FeatureTitle>Unlimited movies, TV shows and more.</FeatureTitle>
          <FeatureSubTitle>Watch anywhere. Cancel at any time.</FeatureSubTitle>
        </FeatureWrapper>
        {children}
      </HeaderWrapper>
    </>
  );
}

export default HeaderCompound;

import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <LoginContainer>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <CTAButton>
          SIGN UP NOW
        </CTAButton>
        <CTAText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis quis neque venenatis tempus.
        </CTAText>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </LoginContainer>
  )
}

export default LoginPage

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3vw + 5px); 
  position: relative;
  overflow-x: hidden;

  &:before {
    background-image: url("/images/login-background.jpg");
    opacity: 0.7;
    content: "";
    position: absolute;
    top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -10;
  }
`

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 650px;
  margin: 100px 0 0 0;
`

const CTALogoOne = styled.img`
  width: 100%;
  margin: 5px 0;
`

const CTAButton = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: 800;
  margin: 5px 0;
  padding: 15px 0;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`

const CTAText = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 13px;
  letter-spacing: 1.2px;
  line-height: 1.2;
`

const CTALogoTwo = styled(CTALogoOne)`
  margin: 20px 0;
  padding: 0 15px;
`

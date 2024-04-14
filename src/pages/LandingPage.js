import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import Accessibility from "../assets/LandingPage/Accessibility.svg";
import BlockchainIllustration from "../assets/LandingPage/BlockchainIllustration.svg";
import PaperLess from "../assets/LandingPage/PaperLess.svg";
import PatientLoginIllustration from "../assets/LandingPage/PatientLoginIllustration.svg";
import AdminLoginIllustration from "../assets/LandingPage/AdminLoginIllustration.svg";
import HospitalLoginIllustration from "../assets/LandingPage/HospitalLoginIllustration.svg";
import ViewAnyRecordsIllustration from "../assets/LandingPage/ViewAnyRecordsIllustration.svg";
import {
  About,
  AppName,
  Backdrop,
  BlueLine,
  ButtonContainer,
  ButtonContainerMobile,
  Container,
  DoctorNurseIllustration,
  DoctorNurseIllustrationMobile,
  Dropdown,
  DropdownItem,
  Footer,
  GetStartedButton,
  GetStartedButtonMobile,
  Home,
  Image,
  ImageAndTextContainer,
  Login,
  LoginButton,
  LoginContainer,
  LoginFlex,
  LoginImage,
  LoginText,
  Logo,
  Menu,
  MenuContainer,
  NavbarContainer,
  Slogan,
  Slogan2,
  SpecialityText,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  SubContainer4,
  SubContainer5,
  SubContainerMobile,
} from "./LandingPage.styled";
import { useAuth } from "../services/authorization";

const LandingPage = () => {
  const ref = useRef();
  const loginRef = useRef();
  const auth = useAuth();
  const history = useHistory();
  const [modalState, setModalState] = useState(false);
  const [menu, setMenu] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const uploadClickHandler = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle the file upload here
    console.log(file);
    closeModal();
  };

  const scrollToLoginFlex = () => ref.current.scrollIntoView();
  const scrollToLoginFlexMobile = () => {
    setMenu(false);
    loginRef.current.scrollIntoView();
  };

  return (
    <Container>
      {menu && (
        <Backdrop
          onClick={() => {
            setMenu(false);
          }}
        />
      )}
      <NavbarContainer>
        <Logo />
        <AppName>MediLocker</AppName>
        
        <Home onClick={() => history.push("/home")}>
          Home
          <BlueLine />
        </Home>
        <About onClick={() => history.push("/about")}>About</About>
        
        {auth.loggedIn ? (
          <Login onClick={() => history.push("/dashboard")}>Dashboard</Login>
        ) : (
          <Login onClick={scrollToLoginFlex}>Login</Login>
        )}
        <div>
      <Home onClick={uploadClickHandler}>
        Chat With Pdf
      </Home>
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="File Upload Modal"
  style={{
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '50%',
    },
  }}
>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
  }}>
    <h2 style={{ textAlign: 'center' }}>Upload PDF</h2>
    <button style={{
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textAlign: 'center', // Added this
    }} onClick={closeModal}>close</button>
    <input type="file" accept=".pdf" onChange={handleFileUpload} />
  </div>
</Modal>
    </div>

        <MenuContainer open={menu}>
          <Menu onClick={() => setMenu(!menu)}></Menu>
          <Dropdown>
            <DropdownItem
              style={{ backgroundColor: "#DAE9FF" }}
              onClick={scrollToLoginFlexMobile}
            >
              Home
            </DropdownItem>
            <DropdownItem onClick={() => setMenu(!menu)}>Login</DropdownItem>
          </Dropdown>
        </MenuContainer>
      </NavbarContainer>
      <SubContainer1>
        <SubContainer2>
          <SubContainer3>
            <Slogan>
              Get your medical history stored
              <br />
              on blockchain with us
            </Slogan>
            <Slogan2>
              Access it from anywhere and anytime. Trusted by
              <br />
              Government authorities
            </Slogan2>
            <ButtonContainer>
              <GetStartedButton onClick={scrollToLoginFlex}>
                Get Started
              </GetStartedButton>
            </ButtonContainer>
          </SubContainer3>
          <DoctorNurseIllustration />
          <SubContainerMobile>
            <ButtonContainerMobile>
              <GetStartedButtonMobile onClick={scrollToLoginFlex}>
                Get Started
              </GetStartedButtonMobile>
            </ButtonContainerMobile>
            <DoctorNurseIllustrationMobile />
          </SubContainerMobile>
        </SubContainer2>
        <SubContainer4 ref={ref}>
          <SubContainer5>
            <ImageAndTextContainer>
              <Image src={Accessibility} />
              <SpecialityText>Access from anywhere and anytime</SpecialityText>
            </ImageAndTextContainer>
            <ImageAndTextContainer>
              <Image src={BlockchainIllustration} />
              <SpecialityText>
                Decentralized platform for highest safety
              </SpecialityText>
            </ImageAndTextContainer>
            <ImageAndTextContainer>
              <Image src={PaperLess} />
              <SpecialityText>
                No need to carry your medical reports everywhere
              </SpecialityText>
            </ImageAndTextContainer>
          </SubContainer5>
        </SubContainer4>
        <LoginText>Login To MediLocker</LoginText>
        <LoginFlex>
          <LoginContainer onClick={() => history.push("/login/patient")}>
            <LoginImage src={PatientLoginIllustration} />
            <LoginButton>Patient Login</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/login/hospital")}>
            <LoginImage src={HospitalLoginIllustration} />
            <LoginButton>Hospital login</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/login/admin")}>
            <LoginImage src={AdminLoginIllustration} />
            <LoginButton>Admin Login</LoginButton>
          </LoginContainer>
          <LoginContainer onClick={() => history.push("/anyRecord")}>
            <LoginImage src={ViewAnyRecordsIllustration} />
            <LoginButton style={{ width: "90%" }}>View AnyRecords</LoginButton>
          </LoginContainer>
        </LoginFlex>
        <Footer>&copy;MediLocker</Footer>
      </SubContainer1>
    </Container>
  );
};

export default LandingPage;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Header.css";
import { SignInModal } from "../SignInModal";
export const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [avatarSrc, setavatarSrc] = React.useState("");
  React.useEffect(() => {
    fetch("https://random.dog/woof.json?ref=apвilist.fun")
      .then((data) => data.json())
      .then((json) => json.url)
      .then((url) => {
        if (url.endsWith("mp4")) {
          setavatarSrc("");
        } else setavatarSrc(url);
      });
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Chess</Navbar.Brand>
        <Nav className="mr-auto">
          <Image className="avatar-img" src={avatarSrc} roundedCircle />
        </Nav>
        <Form inline>
          <Button onClick={() => setShowModal(true)} variant="outline-info">
            SignIn
          </Button>
          <SignInModal show={showModal} hide={() => setShowModal(false)} />
        </Form>
      </Navbar>
    </div>
  );
};

import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Input,
  DrawerFooter,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const Draawer = ({ fieldName, images, onnOpen, issOpen, onnClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [sender, setSender] = useState("You");
  const [receiver, setReceiver] = useState("John");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { sender: sender, message: inputMessage }]);
      setInputMessage("");
    }
  };

  return (
    <div>
      {" "}
      <Drawer isOpen={issOpen} onClose={onnClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent
          zIndex={100000000}
          className="neono"
          style={{
            borderRadius: "40px"
          }}
        >
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>{`${fieldName}`}</DrawerHeader>
          <DrawerBody
            style={{
              overflowY: "scroll",
              position: "relative",
              zIndex: "20000000 !important",
              display: "flex",
              flexDirection: "column",
              paddingRight: "20px",
              paddingLeft: "20px"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.sender === sender ? "sent" : "received"
                }`}
              >
                <span className="sender">{msg.sender}:</span>
                <span className="message-content">{msg.message}</span>
              </div>
            ))}
          </DrawerBody>
          <DrawerFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <InputGroup>
              <InputRightElement
                bgColor={"green.300"}
                alignItems={"center"}
                justifyContent={"center"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={() => {
                  handleSendMessage();
                }}
              >
                <div
                  className="arrow__right"
                  style={{
                    borderRadius: "50%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <ArrowRightIcon
                    style={{
                      position: "relative",
                      transform: "rotate(-90deg)"
                    }}
                  />
                </div>
              </InputRightElement>
              <Input
                size={"lg"}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Wpisz swoją wiadomość..."
                style={{ marginBottom: "20px" }}
              />
            </InputGroup>
            <Button
              onClick={onnClose}
              style={{
                width: "90%",
                justifySelf: "center",
                background: "none"
              }}
            >
              LiderPodhale
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Draawer;

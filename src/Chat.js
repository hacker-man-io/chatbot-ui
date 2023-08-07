import React, { useState } from "react";
import Drawer from "./components/Drawer";
import { Text, useColorMode, useStyles } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  useDisclosure,
  ModalCloseButton
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const ChatbotPopup = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [document, setDocument] = useState({ name: "", documentLink: [] });
  let whiteText = colorMode == "light" ? "black" : "white";

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div className="chat-popup">
        {/* Replace the content below with your chatbot implementation */}
        <Drawer
          onnOpen={onOpen}
          onnClose={onClose}
          issOpen={isOpen}
          fieldName={document.name}
          images={document.documentLink}
        />
        <div
          className="chat__icon"
          style={chat__style}
          onClick={isOpen ? onClose : onOpen}
        >
          <ChatIcon w={8} h={8} color="white" />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPopup;

const chat__style = {
  display: "flex",
  borderRadius: "50%",
  backgroundColor: "green",
  position: "fixed",
  zIndex: "5000",
  bottom: "15px",
  right: "15px",
  width: "60px",
  height: "60px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  background: "linear-gradient(145deg, #3cb9fc, #b537f2, #8a2be2, #120052)"
};

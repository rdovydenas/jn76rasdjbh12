import { View, Modal, Text } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import Form from "../../forms";
import LandingModal from "../../modals/LandingModal";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const onPress = (text: string) => {
    setIsModalOpen(true);
    setModalType(text);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F5FF",
      }}
    >
      <Button text="Login" bgColor="#DFB2F4" onPress={onPress} />
      <Button text="Registration" bgColor="#55D6C2" onPress={onPress} />
      <LandingModal isModalOpen={isModalOpen} modalType={modalType} />
    </View>
  );
};

export default Landing;

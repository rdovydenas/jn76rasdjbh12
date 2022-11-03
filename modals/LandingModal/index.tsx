import { View, Text, Modal } from "react-native";
import React from "react";
import Form from "../../forms";

const LandingModal = ({ isModalOpen, modalType }: any) => {
  return (
    <Modal visible={isModalOpen}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F5FF",
        }}
      >
        <Text style={{ fontSize: 30, marginBottom: 24 }}>{modalType}</Text>
        <Form
          defaultValues={
            modalType !== "Login"
              ? {
                  email: "",
                  name: "",
                  surname: "",
                  password: "",
                  confirmPassword: "",
                  referralCode: "",
                }
              : { email: "", password: "" }
          }
        />
      </View>
    </Modal>
  );
};

export default LandingModal;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Toast,
} from "react-native";
import ToastMessage from "react-native-toast-message"; 
const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = () => {
    // Basic validation
    const errors = [];
    if (username.trim() === "") {
      errors.push("Username is required.");
    }
    if (password.trim() === "") {
      errors.push("Password is required.");
    }

    // Simulating login process
    if (errors.length === 0) {
      setIsLoggedIn(true); // Update isLoggedIn state to true after successful login
      setSuccessMessage("Logged in successfully");
      setErrorMessages([]); // Clear any existing error messages

      // Show toast message
      ToastMessage.show({
        type: "success",
        text1: "Success",
        text2: "Logged in successfully",
        visibilityTime: 3000, // Duration in milliseconds
      });
    } else {
      setErrorMessages(errors);
      setSuccessMessage("");
    }
    };
    
 function showToast() {
   ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
 }


  return (
    <View style={styles.loginPage}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.formGroup}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
      {errorMessages.length > 0 && (
        <View style={styles.errorMessages}>
          <Text></Text>
          <View>
            {errorMessages.map((error, index) => (
              <Text key={index}>{error}</Text>
            ))}
          </View>
        </View>
      )}
      {successMessage !== "" && (
        <View style={styles.successMessage}>
          <Text>{successMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
  successMessage: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
  },
  loginPage: {
    flex: 1,
    justifyContent: "center",
    // alignItems: " ",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 4,
  },
});

export default LoginPage;

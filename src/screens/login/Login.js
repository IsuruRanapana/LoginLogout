import { useCallback, useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import styles from "./Login.styles";
import { InputWithLabel, Button } from "../../components";
import { users } from "../../mock/userCredentials";

export default function Login({ navigation }) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isAuth, setIsAuth] = useState(false);

  const setLogout = useCallback(() => {
    console.log("I'm fired");
    setIsAuth(!isAuth);
    console.log(isAuth);
    if (!isAuth) {
      setInputs({ email: "", password: "" });
    }
  });
  const handleInputOnChange = (value, from) => {
    if (from === 1) {
      setInputs({
        ...inputs,
        email: value,
      });
    } else {
      setInputs({
        ...inputs,
        password: value,
      });
    }
  };

  const handleOnPress = () => {
    const user = users.filter(
      (currentUser) => currentUser.email === inputs.email
    )[0];
    if (!user) {
      ToastAndroid.show("User not found", ToastAndroid.SHORT);
    } else if (user.password !== inputs.password) {
      ToastAndroid.show("Email or password is incorrect", ToastAndroid.SHORT);
    } else {
      console.log(isAuth);
      setIsAuth(!isAuth);
      console.log(isAuth);
      navigation.navigate("HOME", { setLogout });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputWithLabel
          labelText={"Enter Your Email"}
          value={inputs.email}
          onChange={(value) => handleInputOnChange(value, 1)}
        />
        <View style={styles.margin}></View>
        <InputWithLabel
          labelText={"Enter Your Password"}
          value={inputs.password}
          secureTextEntry={true}
          onChange={(value) => handleInputOnChange(value, 2)}
        />
      </View>
      <View style={styles.margin}></View>
      <View style={styles.btn}>
        <Button labelText={"Login"} onPress={handleOnPress} />
      </View>
      <View style={styles.marginBottom}></View>
    </View>
  );
}

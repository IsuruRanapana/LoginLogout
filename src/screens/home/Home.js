import { View, Text, Image } from "react-native";
import styles from "./Home.styles";
import { Button } from "../../components";
import imgs from "../../../assets/img";

export default function Home({ navigation, route }) {
  const { setLogout } = route.params;
  const handleOnPress = () => {
    setLogout();
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={imgs.gtfo} style={styles.image} />
      </View>
      <View style={styles.btn}>
        <Button labelText={"Logout"} onPress={handleOnPress} />
      </View>
    </View>
  );
}

import { View, FlatList, BackHandler, Text } from "react-native";
import styles from "./Home.styles";
import { Button, ItemCard } from "../../components";
import { useEffect, useState } from "react";
import { get } from "../../api/baseAPI";

export default function Home({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  });

  const [listData, setListData] = useState([]);

  const handleLoadPosts = async () => {
    const data = await get({ endpoint: "posts" });
    console.log(data);
    setListData(data);
  };

  const handleOnPress = () => {
    navigation.pop();
  };

  const renderItem = ({ item, index }) => {
    return <ItemCard title={item?.title} userId={item?.userId} id={item?.id} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.btn}>
        <Button labelText={"Load Posts"} onPress={handleLoadPosts} />
        <Button labelText={"Logout"} onPress={handleOnPress} />
      </View>
    </View>
  );
}

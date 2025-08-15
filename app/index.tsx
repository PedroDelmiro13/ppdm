import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image 
      style={{width:150, height: 150}}
      source={require('@/assets/images/partial-react-logo.png')}
      ></Image>
      <text>Pedro Delmiro</text>
      <Text>Desenvolvedor backend com foco em java com springboot criando APIs escaláveis.</Text>
    </View>
  );
}

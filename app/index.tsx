import { Image, Text, View } from "react-native";

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
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Pedro Delmiro</Text>
      <Text>Desenvolvedor backend com foco em java com springboot criando APIs escaláveis.</Text>
    </View>
  );
}
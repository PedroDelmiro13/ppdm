import { Stack } from "expo-router";
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
    <Stack.Screen
     options={{
        title: "Perfil",
     }}
    />
      <Image 
      style={{width:350, height: 350, borderRadius: 20}}
      source={require('@/assets/images/pedrofoto.jpg')}
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Pedro Delmiro</Text>
      <Text>Desenvolvedor backend com foco em java com springboot criando APIs escaláveis.</Text>
    </View>
  );
}
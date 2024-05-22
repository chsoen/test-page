import { Stack, Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

type HeaderButtonProp = {
  text: string;
};

const HeaderButton = ({ text }: HeaderButtonProp) => {
  return (
    <Link style={{ padding: "1%" }} href={"/" + text}>
      <Text style={{ color: "#ffaf1b" }}>{text}</Text>
    </Link>
  );
};

const HeaderRight = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <HeaderButton text="hello" />
        <HeaderButton text="world" />
      </View>
    </>
  );
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "chsoen",
          headerTitleAlign: "left",
          headerTintColor: "#ffaf1b",
          headerStyle: styles.header,
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 0,
  },
});

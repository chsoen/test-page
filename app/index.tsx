import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Text, Card } from "react-native-paper";

type ItemProp = {
  title: string;
  id: string;
};

const Item = ({ title, id }: ItemProp) => (
  <Card style={styles.card}>
    <Card.Title title={title + " " + id} />
    <Card.Content>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
);

const articles = [
  { title: "Test article", id: "1" },
  { title: "Test article", id: "2" },
  { title: "Test article", id: "3" },
  { title: "Test article", id: "4" },
  { title: "Test article", id: "5" },
  { title: "Test article", id: "6" },
  { title: "Test article", id: "7" },
  { title: "Test article", id: "8" },
  { title: "Test article", id: "9" },
  { title: "Test article", id: "10" },
  { title: "Test article", id: "11" },
  { title: "Test article", id: "12" },
  { title: "Test article", id: "13" },
  { title: "Test article", id: "14" },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={articles}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    margin: 20,
  },
  list: {
    width: "100%",
  },
});

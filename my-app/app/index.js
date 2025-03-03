import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      
      <Link href="/about" style={styles.link}>Go to About</Link>
      <Link href="/posts/lists" style={styles.link}>Go to Posts Lists</Link>
      <Link href="/posts" style={styles.link}>Go to Posts Home</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  link: { color: 'blue', fontSize: 18, marginTop: 10 },
});

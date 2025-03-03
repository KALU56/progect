import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});

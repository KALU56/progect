import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Ionicons name="person-add" size={24} color="#800020" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Explore Categories</Text>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.category}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}  // Replace with an actual image URL
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Category 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}  // Replace with an actual image URL
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Category 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}  // Replace with an actual image URL
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Category 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800020',
  },
  content: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#800020',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '30%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#800020',
  },
});

export default HomeScreen;

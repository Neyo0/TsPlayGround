import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker } from 'react-native-maps';

const Tab = createBottomTabNavigator();

// ✅ Home Page
function HomeScreen({ navigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Welcome to Course Enrollment App</Text>
      <Text style={styles.subtitle}>Use the tabs below to navigate.</Text>
    </View>
  );
}

// ✅ Courses Page (with cards)
function CoursesScreen() {
  const courses = [
    { id: '1', title: 'Web Development' },
    { id: '2', title: 'Mobile App Development' },
    { id: '3', title: 'Data Science' },
    { id: '4', title: 'UI/UX Design' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Available Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
            <Button title="Enroll" onPress={() => alert(`Enrolled in ${item.title}`)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// ✅ About Us Page
function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About Us</Text>
      <Text style={styles.paragraph}>
        We are a modern learning institution offering cutting-edge courses to prepare
        students for the future of work.
      </Text>
    </View>
  );
}

// ✅ Contact Us Page
function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Us</Text>
      <Text style={styles.paragraph}>Email: info@courses.com</Text>
      <Text style={styles.paragraph}>Phone: +27 123 456 789</Text>
    </View>
  );
}

// ✅ Map Page
function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Find Us</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.2041,   // Example: Johannesburg
          longitude: 28.0473,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: -26.2041, longitude: 28.0473 }}
          title="Our Institution"
          description="We are here!"
        />
      </MapView>
    </View>
  );
}

// ✅ Main App
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Courses" component={CoursesScreen} />
        <Tab.Screen name="About Us" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: 300,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 400,
    marginTop: 15,
  },
});

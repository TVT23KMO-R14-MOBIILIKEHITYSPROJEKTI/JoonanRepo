import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>

      <Header style={styles.header} />

      <View style={styles.content}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>

      <Footer style={styles.footer} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    borderColor: 'black', // Add this line
    borderWidth: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#f0daf2',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    marginBottom: 40,
  },
  footer: {
    backgroundColor: 'green',
    height: 50,
  },
});

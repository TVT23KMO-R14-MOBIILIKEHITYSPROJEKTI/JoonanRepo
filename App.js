import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header'
import Footer from './components/Footer';
import theme from './styles/theme'

export default function App() {


  
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>

            <Header style={styles.header} />

            <View style={styles.content}>
              <Text>Open up App.js to start working on your app!</Text>
            </View>

            <Footer style={styles.footer} />

          </View>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
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
    height: 50,
  },
});

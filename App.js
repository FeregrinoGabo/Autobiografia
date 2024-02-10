import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import TextComponent from './components/TextComponents';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require('./assets/images/icon.png')}
        />
        <Text style={styles.headerText}>Autobiografía</Text>
      </View>
      <ScrollView>
        <Text style={styles.title}>Gabriel Feregrino Hernández</Text>
        <View style={styles.cuerpo}>
          <Image
            style={styles.image} 
            source={require('./assets/images/rengoku.jpg')}
          />
        </View>
        <TextComponent />

        <View style={styles.cuerpo}>
          <Image
            style={styles.image} 
            source={require('./assets/images/rengoku2.jpg')}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },

  header: {
    backgroundColor: '#C0C0C0',
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 50,
    height: 50,
    marginTop: 40,
    marginRight: 20,
    marginLeft: 10,
  },

  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },

  image: {
    width: '100%',
    height:450,
    resizeMode: 'contain',
  },

  cuerpo: {
    height: 450,
    width: '100%',
    alignItems: 'center',
  }
});



export default App;

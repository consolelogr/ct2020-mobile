import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,SafeAreaView,Button ,Linking } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Image
        style={styles.imagee}
        source={require('./assets/ct.png')}
      /> 
      <Text numberOfLines={8} style={styles.toptext}>
      
       EIJA{'\n'}-----------------------{'\n'}REACT NATIVE{'\n'}&& EXPO {'\n'}-----------------------{'\n'}
      
      <Text style={styles.midtext} >
        Mobile edition
        {'\n'}
        ver. 0.0.0.1 
      </Text>
      </Text>
      <Button
  onPress={()=> Linking.openURL('https://consolelogger.com')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  toptext: {
    flex: 1,
    top: '4%',
    width: '100%',
    padding: '5%',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
    color: '#222',
  },
  midtext: {
    fontSize: 10,
    color: '#222',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imagee:{
    marginTop: 100,
    marginLeft: 20,
    width: 200,
    height: 200
  }
});




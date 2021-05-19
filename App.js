import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,SafeAreaView,Button ,Linking,TouchableOpacity,TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Image
        style={styles.imagee}
        source={require('./assets/ct.png')}
      /> 
      
      <Button style={styles.buttoni}
      onPress={()=> Linking.openURL('https://consolelogger.com')}
      title="Button" color="dodgerblue"
      accessibilityLabel="Learn more about this button" />
    
    <TouchableOpacity 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>
            <Button onPress={()=> Linking.openURL('https://consolelogger.com')}            
            title="TouchableOpacity"
            accessibilityLabel="Learn more about this button"
          /> 
          </TouchableOpacity> 
      
    
      <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
  }, 
    imagee:{
    marginTop: 50,
    marginBottom:50,
    marginLeft: 20,
    width: 150,
    height: 150
  },buttoni: {
    color: '#eee',
    marginTop: 100
  }

});




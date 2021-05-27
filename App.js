import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,SafeAreaView,Button ,Linking,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (

<SafeAreaView style={styles.container}>
<Image       
        style={styles.image0}
        source={require('./assets/cl2.png')}
      />    
      
      
    <TouchableOpacity       onPress={()=> Linking.openURL('https://consolelogr.github.io/codetracker2020/')}
                style ={{
                    height: 50,
                    width:60,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :120
                }}>
         <Image       
        style={styles.image1}
        source={require('./assets/ct.png')}
      />    
          </TouchableOpacity> 
      
    
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/consolelogr')}
                style ={{
                    height: 120,
                    width:60,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :120
                }}>
         <Image       
        style={styles.image2}
        source={require('./assets/linkedin.svg')}
      />    
          </TouchableOpacity> 
    

          <TouchableOpacity  onPress={()=> Linking.openURL('https://www.codepen.io/consolelogr')}
                style ={{
                    height: 60,
                    width:60,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :120
                }}>
         <Image       
        style={styles.image3}
        source={require('./assets/snowflake.jpg')}
      />    
          </TouchableOpacity> 
    
      <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image0:{
    marginTop: 30,
    marginLeft:-30,
    width: 450,
    height: 150,
    borderRadius: 100
}, 
  image1:{
    marginLeft:-30,
    width: 150,
    height: 150
},
image2:{
  marginLeft:-190,
  width: 490,
  height: 82

},  
image3:{
  marginTop: -90,
  marginLeft:-40,
  width: 160,
  height: 160,
  borderRadius: 100},  

  text1:{
    fontFamily: 'Bangers_400Regular',
    marginTop: 30,
    marginBottom: -70,
    fontSize:50,
    color: '#ddd'
  }

});




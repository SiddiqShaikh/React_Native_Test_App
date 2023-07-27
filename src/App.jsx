import { StyleSheet, Image, View,FlatList,Text,useColorScheme, StatusBar } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BookDetail from './screens/BookDetail';
import BookListing from './screens/Booklisting';

const Stack = createNativeStackNavigator();

const App = () => {
 
  return (
    

    <NavigationContainer>
    <Stack.Navigator initialRouteName="BooksListing">
      <Stack.Screen name="BooksListing" component={BookListing} options={{headerShown: false}}/>
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  </NavigationContainer>
    
  // <BookListing/>
  )
}

const styles = StyleSheet.create({

});

export default App

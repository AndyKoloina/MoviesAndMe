import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search';
import FilmDetail from './Components/FilmDetail'
import TestComponent from './Components/Test'
import Favorites from './Components/Favorites'
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const SearchStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={Search} options={{ title: 'Rechercher'}}/>
      <SearchStack.Screen name='FilmDetail' component={FilmDetail} options={{ title: 'Detail du Film'}}/>
    </SearchStack.Navigator>
  )
}
const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name='Favorites' component={Favorites} />
      <SearchStack.Screen name='FilmDetail' component={FilmDetail} options={{ title: 'Detail du Film'}}/>
    </FavoriteStack.Navigator>
  )
}
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              var img;
              if (route.name === 'Search') {
                img = <Image style={styles.icon_img} source={require('./Images/icons8-search-60.png')}/>
              } else if (route.name === 'Favorites') {
                img = <Image style={styles.icon_img} source={require('./Images/icons8-heart-50.png')}/>
              }

              // You can return any component that you like here!
                return img
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
            showLabel: false, // On masque les titres
            showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
          }}  
        >
          <Tab.Screen name="Search" component={SearchStackScreen}/>
          <Tab.Screen name="Favorites" component={FavoriteStackScreen}/>
          <Tab.Screen name="TestComponent" component={TestComponent}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_img: {
    width: 30,
    height: 30
  }
});

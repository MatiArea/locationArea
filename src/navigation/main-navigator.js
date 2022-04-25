import HeaderButton from '../components/header-button'
import HomeScreen from '../screens/home'
import MapScreen from '../screens/map-view'
import NewPlace from '../screens/new-place'
import PlaceDetail from '../screens/place-detail'
import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const mainStack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <mainStack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <mainStack.Screen
        name="Place"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Direcciones',
          headerRight: () => <HeaderButton navigation={navigation} />,
        })}
      />
      <mainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: 'Detalle' }} />
      <mainStack.Screen
        name="NewPlace"
        component={NewPlace}
        options={{ title: 'Nueva dirección' }}
      />
      <mainStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: 'Selleccion en el mapa' }}
      />
    </mainStack.Navigator>
  )
}

export default MainStackNavigator

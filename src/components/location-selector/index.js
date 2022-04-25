import { Alert, Button, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Geolocation from '@react-native-community/geolocation'
import MapsPreview from '../map-component/index'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native'

const LocationSelector = ({ onLocation, onMapLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null)

  const route = useRoute()
  const mapLocation = route.params?.location

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation)
      onLocation(mapLocation)
    }
  }, [mapLocation])

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const location = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
        setPickedLocation(location)
        onLocation(location)
      },
      (error) => {
        Alert.alert('Can not get location', 'Please try again later', [{ text: 'Okay' }])
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      }
    )
  }

  const pickLocation = () => {
    onMapLocation()
  }
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapsPreview location={pickedLocation} style={styles.preview}>
          <Text>No location chosen yet!</Text>
        </MapsPreview>
      </View>
      <View style={styles.action}>
        <Button title="Get Location" onPress={() => getLocation()} />
        <Button title="Pick Location in Maps" onPress={() => pickLocation()} />
      </View>
    </View>
  )
}

export default LocationSelector

import MapView, { Marker } from 'react-native-maps'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import Geolocation from '@react-native-community/geolocation'
import { styles } from './styles'

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState()
  const [initialRegion, setInitialRegion] = useState(null)
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const location = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
        setInitialRegion(location)
      },
      (error) => {
        console.warn('error', error)
        Alert.alert('Can not get location', 'Please try again later', [{ text: 'Okay' }])
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      }
    )
  }, [])
  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate('NewPlace', {
        location: selectedLocation,
      })
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <Text style={styles.button}>Guardar</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation, handleSaveLocation])

  const handleSelectLocation = (event) => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    })
  }
  return (
    <>
      {initialRegion ? (
        <MapView style={styles.container} region={initialRegion} onPress={handleSelectLocation}>
          {selectedLocation && <Marker title="Selected Location" coordinate={selectedLocation} />}
        </MapView>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </>
  )
}

export default MapScreen

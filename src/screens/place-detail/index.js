import { Button, Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { styles } from './styles'

const PlaceDetail = ({ route }) => {
  const { id } = route.params
  const place = useSelector((state) => state.places.places.find((place) => place.id === id))
  return (
    <View style={styles.details}>
      <Text style={styles.name}>{place.name}</Text>
      <Image source={{ uri: place.image }} style={styles.image} />
      <Text style={styles.address}>Dirección: {place.address}</Text>
      <Text style={styles.address}>Latitud: {place.latitude}</Text>
      <Text style={styles.address}>Longitud: {place.longitude}</Text>
    </View>
  )
}

export default PlaceDetail

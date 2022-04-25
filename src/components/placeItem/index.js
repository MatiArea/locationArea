import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

const PlaceItem = ({ name, address, onSelect, image, latitude, longitude }) => {
  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

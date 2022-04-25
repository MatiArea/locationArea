import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import ImageSelector from '../../components/image-selector'
import LocationSelector from '../../components/location-selector'
import MapPreview from '../../components/map-component'
import { placeActions } from '../../store/actions'
import { styles } from './styles'
import { useDispatch } from 'react-redux'

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState(null)

  const handleNameChange = (text) => setName(text)
  const handleSavePlace = () => {
    const { latitude, longitude } = location
    dispatch(placeActions.addPlace(name, image, latitude, longitude))
    navigation.navigate('Place')
  }
  const handleOnImage = (uri) => {
    setImage(uri)
  }

  const handleOnLocation = (location) => {
    setLocation(location)
  }

  const handleOnMapLocation = () => {
    navigation.navigate('Map', {
      location,
    })
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}></Text>
        <ImageSelector onImage={handleOnImage} />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={handleNameChange}
          value={name}
        />

        <LocationSelector onLocation={handleOnLocation} onMapLocation={handleOnMapLocation} />
      </View>
      <Button title="Guardar" onPress={() => handleSavePlace()} />
    </ScrollView>
  )
}

export default NewPlace

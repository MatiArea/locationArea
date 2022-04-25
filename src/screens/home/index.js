import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import PlaceItem from '../../components/placeItem'
import { placeActions } from '../../store/actions'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const places = useSelector((state) => state['places']['places'])

  useEffect(() => {
    dispatch(placeActions.loadPlace())
  }, [])

  const renderItem = ({ item }) => (
    <PlaceItem
      name={item['name']}
      address={item['address']}
      onSelect={() => {
        navigation.navigate('PlaceDetail', {
          id: item['id'],
        })
      }}
      image={item['image']}
      latitude={item['latitude']}
      longitude={item['longitude']}
    />
  )

  return <FlatList data={places} keyExtractor={(item) => item.id} renderItem={renderItem} />
}

export default HomeScreen

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '98%',
    height: '40%',
    marginBottom: 50,
  },
  details: {
    marginLeft: 15,
    marginTop: 15,
    flex: 1,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    marginBottom: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  address: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})

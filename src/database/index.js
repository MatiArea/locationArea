import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase({ name: 'direcciones.db' })

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS place (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL)',
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const insertPlace = (name, image, address, latitude, longitude) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO place (name, image, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
        [name, image, address, latitude, longitude],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
  return promise
}

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM place',
        [],
        (_, result) => {
          let data = []
          var len = result['rows'].length
          for (let i = 0; i < len; i++) {
            let row = result['rows'].item(i)
            data.push(row)
          }
          resolve(data)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
  return promise
}

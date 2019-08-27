import * as request from 'superagent'
export const SET_DOGS = 'SET_DOGS'

export function setDogs(dogs) {
  return {
    type: SET_DOGS,
    payload: dogs
  }
}

export function getDogs() {
  return function(dispatch) {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const arrayOfDogsAsObjects = Object.keys(response.body.message).map(dog => {
          const dogObject = { name: dog, images: []}
          return dogObject
        })
      
        arrayOfDogsAsObjects.map(dog => {
          for (let i = 0; i < 10; i++) {
          request(`https://dog.ceo/api/breed/${encodeURIComponent(dog.name)}/images/random`)
            .then(response =>
              dog.images.push(response.body.message)) }
          return arrayOfDogsAsObjects
        })
        console.log(arrayOfDogsAsObjects)
        dispatch(setDogs(arrayOfDogsAsObjects))
      })
    }
}

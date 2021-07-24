/* eslint-disable no-undef */
import  { createApi}  from 'unsplash-js'

/*export const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_IMG_ACCESS_KEY,
})*/

const unsplash = createApi({
  accessKey: process.env.REACT_APP_IMG_ACCESS_KEY,
  // `fetch` options to be sent with every request
  headers: { 'X-Custom-Header': 'foo' }
})

export const getPhotes = async ({query='gato', page=1,  orientation='squarish'}) =>{
  try {
    // const jsonRes = await nsplash.search.photos(name).then(toJson)
    //console.log(jsonRes)
    const res = await unsplash.search.getPhotos({
      query:query,
      page,
      perPage: 10,
      orientation
    })  
    
    return res.response.results.map((re)=>{
      return {
        url:re.urls.raw,
        id:re.id,
        alt:re.alt_description
      }
    })

  } catch (error) {
    console.log('error en la busqueda :',error)
    return false
  }
}
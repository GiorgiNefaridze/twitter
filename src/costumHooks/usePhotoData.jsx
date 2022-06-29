import { useState,useEffect } from "react"

function usePhotoData(id){
    const [photo,setPhoto] = useState("")
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getPhotoData();
    },[])

    const getPhotoData = async () => {
        let album = `photos?albumId=1%&albumId=2`
        
        if(id){
            album = `photos/${id}`
        }

        const url = `https://jsonplaceholder.typicode.com/${album}`

        const response = await fetch(url)
        const data = await response.json()
        setPhoto(data)
        setLoading(false)
    }

    return {photo,loading}
}

export default usePhotoData;
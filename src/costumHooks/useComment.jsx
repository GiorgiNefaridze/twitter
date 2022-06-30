import { useState,useEffect } from "react";

export default function useComment(id){

    const [comment,setComment] = useState()

    useEffect(()=> {
        getCommentdData();
    },[])

    const getCommentdData = async () => {
        let comment = "comments";

        if(id){
            comment = `comments?postId=${id}`
        }

        const url = `https://jsonplaceholder.typicode.com/${comment}`

        const response = await fetch(url)
        const data = await response.json()
        setComment(data)
    }

    return comment
}
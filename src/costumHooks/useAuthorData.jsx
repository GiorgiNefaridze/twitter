import { useState,useEffect } from "react";

function useAuthorData(id){
    const [author,setAuthor] = useState("")

    useEffect(()=> {
        getAuthorData();
    },[])

    const getAuthorData = async () => {
        let user = `users`

        if(id){
            user = `users/${id}`
        }
        
        const url = `https://jsonplaceholder.typicode.com/${user}`

        const response = await fetch(url);
        const data = await response.json();
        setAuthor(data);
    }

    return author
}

export default useAuthorData;
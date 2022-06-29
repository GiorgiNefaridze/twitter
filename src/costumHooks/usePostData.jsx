import { useEffect,useState } from 'react';

function usePostData(id) {
    const [posts,setPosts] = useState({})

    useEffect(()=>{
        getPostData();
    },[])

    const getPostData = async () => {
        let posts = "posts"

        if(id){
            posts = `posts/${id}`
        }

        const url = `https://jsonplaceholder.typicode.com/${posts}`

        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
    }

    return posts
}


export default usePostData;
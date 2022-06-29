import { useState } from "react"
import usePhotoData from "../costumHooks/usePhotoData"
import useFetch from "../costumHooks/useFetch"
import ContentInner from "./ContentInner"
// import {Spinner} from 'reactstrap'
import '../styles/Content.scss'

export default function Content() {

    const {author, posts, photo,loading } = useFetch();

    const [isOpen,setIsOpen] = useState(false)
    const [posX,setPosX] = useState()
    const [posY,setPosY] = useState()

    return (
        <div className='Content-container'>
            {loading ? <p>Loading...</p> : 
            posts.map((post) => 
            (<ContentInner
                post={post}
                photos={photo[post.userId]}
                users={author[post.userId]}
            />))}
        </div>
    )
}
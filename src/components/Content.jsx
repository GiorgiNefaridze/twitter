import {useState,useEffect} from "react"
import usePhotoData from "../costumHooks/usePhotoData"
import useFetch from "../costumHooks/useFetch"
import ContentInner from "./ContentInner"
import {Spinner} from 'reactstrap'
import '../styles/Content.scss'
import Test from "./test"


export default function Content() {

    const {author, posts, photo, comment } = useFetch();

    const { loading } = usePhotoData()

    const [isOpen,setIsOpen] = useState(false)
    const [posX,setPosX] = useState()
    const [posY,setPosY] = useState()
    const [userInfo,setUserInfo] = useState([])
    const [like,setLike] = useState(false)
    const [test,setTest] = useState(true)
    const [commentisOpen,setCommentisOpen] = useState(false)

    const moreButttonFn = (e,post,users,photos) => {
        setIsOpen(true)
        setPosX(e.pageX)
        setPosY(e.pageY)
        setTest(false)
        setUserInfo({post,users,photos})
    }

    const likeFn = (user) => {
        setLike(!like)
    }

    const moreButttonFnForSeparatePost = (e)=> {
        setIsOpen(true)
        setPosX(e.pageX)
        setPosY(e.pageY)
    }

    const showComment = () => {
        setCommentisOpen((prev)=> !prev)
    }

    return (
        <div className='Content-container'>
            {test ? loading ? 
            <div className="loading-spiner">
                <Spinner color="primary">
                    Loading...
                </Spinner>
            </div>: 
            posts.map((post) => 
            (<ContentInner
                key={post.id}
                posX={posX}
                posY={posY}
                isOpen={isOpen}
                setLike={setLike}
                like={like}
                setIsOpen={setIsOpen}
                likeFn={likeFn}
                moreButttonFn={moreButttonFn}
                post={post}
                photos={photo[post.userId]}
                users={author[post.userId]}
                comment={comment[post.userId]}
                test={post}
                commentisOpen={commentisOpen}
                showComment={showComment}
            />)) : <Test setTest={setTest} like={like} moreButttonFnForSeparatePost={moreButttonFnForSeparatePost} posX={posX} posY={posY} setIsOpen={setIsOpen} isOpen={isOpen} userInfo={userInfo} />}
        </div>
    )
}
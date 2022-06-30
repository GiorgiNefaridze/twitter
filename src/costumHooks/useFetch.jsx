import usePostData from "./usePostData";
import usePhotoData from "./usePhotoData";
import useAuthorData from "./useAuthorData";
import useComment from "./useComment"

function useFetch() {

    const author = useAuthorData();
    
    const { photo,loading } = usePhotoData();
    
    const posts = usePostData();
    
    const comment = useComment();

    return  { author, posts, photo, loading, comment }
}

export default useFetch;
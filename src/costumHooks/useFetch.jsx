import usePostData from "./usePostData";
import usePhotoData from "./usePhotoData";
import useAuthorData from "./useAuthorData";

function useFetch() {

    const author = useAuthorData();

    const { photo,loading } = usePhotoData();

    const posts = usePostData();

    return { author, posts, photo, loading }
}

export default useFetch;
import Post from "./Post";
import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

function Blog()
{
    return(
        <>
        <PostTitle title="this is post title component"/>
        
        <PostBody body="This is post body component"/>
        <Post title="React JS" body="firstproject"/>
        </>
    )
}
export default Blog;
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList,fetching} = useContext(PostListData);
  // const [dataFetched,setDataFetched]=useState(false);
  // const [fetching,setFetching]=useState(false);


  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
 
    // useEffect(()=>{
    //   setFetching(true);

    //   const controller=new AbortController();
    //    const signal=controller.signal;

    //   fetch('https://dummyjson.com/posts',{signal})
    //  .then(res => res.json())
    // .then(data=>{
    //  addInitialPosts(data.posts);
    //  setFetching(false);

    // });
    // return ()=>{
    //    console.log("Cleaning up of useEffect")
    //    controller.abort();
    // }

    // },[]);
   
   
    
  
 


  // const handleGetPostsClick=()=>{
    // console.log("Fetching posts from server...");
    // console.log("Posts is not taking from server ")
    // setLoading(true);
    // setError(null); // Reset error state before fetching


    // fetch('https://dummyjson.com/posts')
    // .then(res => res.json())
    // .then(data=>{
    //   addInitialPosts(data.posts);
    // });

    // .then(res => {
    //   if (!res.ok) {
    //     throw new Error('Failed to fetch posts');
    //   }
    //   return res.json();
    // })
    // .then(data => {
    //   addInitialPosts(data.posts);
    // })
    // .catch(err => {
    //   setError(err.message);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
  // }

 

  return (
    <div>

{/* {loading && <p>Loading posts...</p>} */}
{/* {error && <p>Error: {error}</p>} */}

      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length===0 && <WelcomeMessage  />}
      {!fetching && postList.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
};



export default PostList;
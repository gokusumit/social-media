import { createContext, useReducer,useState,useEffect } from "react";




export const PostList=createContext({
PostList:[],
addPost:()=>{},
fetching:false,
// addInitialPosts:()=>{},
deletePost:()=>{}
});



const postListReducer=(currPostList,action)=>{
let newPostList=currPostList;
if(action.type==='DELETE_POST'){
newPostList=currPostList.filter(post=>post.id !==action.payload.postId)

}
else if(action.type==='ADD_INITIAL_POSTS'){
newPostList=action.payload.posts;

}
else if(action.type==='ADD_POST'){
newPostList=[action.payload,...currPostList]

}
return newPostList;
}

const PostListProvider=({children})=>{
const [postList,dispatchPostList]= useReducer( postListReducer,[]);
const [fetching,setFetching]=useState(false);

 useEffect(()=>{
      setFetching(true);

      const controller=new AbortController();
       const signal=controller.signal;

      fetch('https://dummyjson.com/posts',{signal})
     .then(res => res.json())
    .then(data=>{
     addInitialPosts(data.posts);
     setFetching(false);

    });
    return ()=>{
       console.log("Cleaning up of useEffect")
       controller.abort();
    }

    },[]);

 
const addPost=(post)=>{
dispatchPostList({
type:'ADD_POST',
payload:post,

})

}


const addInitialPosts=(posts)=>{
dispatchPostList({
type:'ADD_INITIAL_POSTS',
payload:{
posts,
}
})

}
const deletePost=(postId)=>{
dispatchPostList({
type:'DELETE_POST',
payload:{
postId,
}
})
}



return <PostList.Provider value={{postList,fetching,addPost,deletePost}}>
{children}
</PostList.Provider>
}


export default PostListProvider;
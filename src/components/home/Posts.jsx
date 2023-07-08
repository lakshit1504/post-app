import React, {useEffect, useState} from "react"
import Cards from "./Card"
import { useNavigate } from "react-router-dom"

const Posts = () => {
    const navigate=useNavigate();
  const [post, setPost] = useState([])
    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data))
    }
    useEffect(() => {
    
        if(localStorage.getItem('token')){
          getData();
          // console.log(localStorage.getItem('token'))
        }
        else{
          navigate('/login')
        }
        
        // eslint-disable-next-line
      }, []);
      
  return (
    
    
       
        <div className="post__list">
            <h2 className="list__title m-auto">Popular Posts</h2>
            <div className="list__cards">
                {
                    post.map(posts => (
                        <Cards key={posts.id} posts={posts} />
                    ))
                }
            </div>
        </div>
  )
}

export default Posts
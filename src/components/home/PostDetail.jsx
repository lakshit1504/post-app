import React, {useEffect, useState} from "react"
import { Link, useParams ,useNavigate} from "react-router-dom"

const PostDetail = () => {
    const navigate=useNavigate();
    const [currentPost, setPost] = useState([])
    const { id } = useParams()

    useEffect(() => {
    
        if(localStorage.getItem('token')){
          updateData();
          // console.log(localStorage.getItem('token'))
        }
        else{
          navigate('/login')
        }
        
      }, []);

    const updateData = async ()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`; 
        
        let data = await fetch(url);
        let parsedData = await data.json()
        setPost(parsedData)
    }


  return (
    <div className="Post">
        <div className="movie__detail">
                <div className="movie__detailRight" style={{"textAlign":"center"}}>
                    <div className="movie__detailRightTop">
                        <div className="post__name">{currentPost?.title}</div>
                       
                        
                    </div>
                    <div className="movie__detailRightBottom">
                        <div>{ currentPost?.body }</div>
                    </div>
                    <div className="home" style={{"textAlign":"center"}}>
                        <Link to="/" style={{"color":"blue" ,"textDecoration":"underLine","fontSize":"2rem"}}>Go to Home</Link></div>
                </div>
            </div>
       
    </div>
  )
}

export default PostDetail
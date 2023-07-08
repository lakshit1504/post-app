import React,{useEffect,useState} from 'react'
import skeleton ,{SkeletonTheme} from 'react-loading-skeleton'
import {Link} from "react-router-dom"

const Card = ({posts}) => {

  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  },[])

  let str=posts.body;

  return (
    <div className='card'>
        { 
          isLoading ?
          <div className="cards">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <skeleton height={300} duration={2} />
              </SkeletonTheme>

          </div>
          :
          <Link to={`/${posts.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <div className="cards__overlay">
                <div className="card__title ">{posts?posts.title:""}</div>
                <div className="card__description">{posts ? str.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>

          }
    </div>
  )
}

export default Card
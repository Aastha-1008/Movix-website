import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const Genre = ({data}) => {
  
  const {genres} = useSelector((state)=>state.home);
  return (
    <div className='genres'>
      {
        data?.map((g,id) => {
          if(!genres[g]?.name) return;
          return (
            <div className="genre" key={id}>
              {genres[g]?.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default Genre

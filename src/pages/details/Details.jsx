import React from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'

const Details = () => {
  
  

  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details

import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/Carousel/Carousel'

import useFetch from "../../../hooks/useFetch"

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie")

  const {data, loading} = useFetch(`/${endpoint}/popular`)

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movie"? "movie":"tv")
  };


  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
        <SwitchTabs data={["Movies","TV shows"]} onTabChange = {onTabChange}/>
      </ContentWrapper>
      <Carousel data = {data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular

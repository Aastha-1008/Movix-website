import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {data,loading} = useFetch("/movie/upcoming");
    const {url} = useSelector((state)=>state.home);



    const searchQueryHandler = (event) => {
        if (event.key == "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    useEffect(()=>{
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path; 
        // console.log(bg);
        setBackground(bg);
    },[data]);

    return (
        <div className='heroBanner'>
            {!loading && <div className="backdrop-img">
                <Img src={background}/>
            </div>}
            <div className="opacity-layer">

            </div>
            <ContentWrapper>
=                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">
                        Millions of movis, TV shows and people to discover. Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            placeholder='Search for a movie or tv show....'
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
            
        </div>
    )
}

export default HeroBanner

import React, {useState,useEffect} from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import './App.css';

export default function Photo(){
        const [pics, setpics] = useState([])
        const [query, Query] = useState(false)
    
        const Eachimageelement = ({ url, key }) => (
            <div className="image-item" key={key} >
              <img src={url} />
            </div>
          );
    
        const fetchImages = (count = 10) => {
            const accessKey = "LMxV3Ei7wrau-47HDadeU_upGgriexu--URLZ1vWJUs";        
            axios
              .get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
              .then (res => {
                setpics([...pics, ...res.data]);
                Query(true)
              });
        };
        useEffect(()=>{
            fetchImages()
            console.log(pics)
        },[])


        return (
                <InfiniteScroll
                    dataLength={pics}
                    next={() => fetchImages(10)}
                    hasMore={true}
            >            
            <div  className="grid">
                {query ? pics.map((image, index) => (
                        <Eachimageelement
                          url={image.urls.thumb}
                          key={index}
                        />
                      )) : ''}
            </div>
    </InfiniteScroll>
        )
    }


  
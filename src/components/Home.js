import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const photos = [
    {
        name: 'photo 1',
        url: "https://media.istockphoto.com/id/1448439652/photo/the-brightly-rising-new-years-sunrise-and-the-cross-of-jesus-christ-and-jesus.jpg?b=1&s=170667a&w=0&k=20&c=CW5SWaCQBO6VwWN8TRvSB_CSAVuA6j_ogYRR-yZPcTI="
    },
    {
        name: 'photo 2',
        url: "https://media.istockphoto.com/id/1367357589/photo/red-heart-shaped-sky-at-sunset-beautiful-landscape-with-flowers-love-background-with-copy.jpg?b=1&s=170667a&w=0&k=20&c=jJW2nQ8MHiSnWVSTUulpBt3xFKUjL0B_KAkE_uc5Sz8=" 
    },
    {
        name: 'photo 3',
        url: "https://media.istockphoto.com/id/1444449094/photo/nativity-scene-birth-of-jesus-christ-with-manger-in-snowy-night-and-starry-sky-abstract.jpg?b=1&s=170667a&w=0&k=20&c=8H4K6KDy0D_GzVAOHGdCGYHSEGDhG8fcmBKuRCw_yso="
    }
]


export default class Home extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinte: true, 
            speed: 500,
            slidestoshow: 1,
            arrows: true, 
            slidestoscroll: 1,
            className: "slides"
        }
        return(
            <div style = {{padding: 24}} className='bg-warning shadow-1-strong'>
                <h1> ...</h1> 
                <h5><i>"Let us not give up the habit of meeting together, as some are doing. Instead, let us encourage one another all the more, since you see that the Day of the Lord is coming nearer." Hebrews 10:25 (NLT)</i></h5>
                <Slider{...settings}>
                {photos.map((photo => {
                        return(
                            <div>
                             <img width = "100%" src = {photo.url}/>
                            </div>
                        )
                    }))}
                </Slider>
            </div>
        )
    }
}
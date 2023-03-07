import React from 'react';
import styles from '@/styles/Home.module.css'


function Card({title,imgUrl,body, artists, link}) {
    return (
        <div className='Card-container'>
            <div className='image-contianer'>
                <img src= {imgUrl} alt=''/> 

            </div>
            <div clasName="Card-content">
                <div clasName="card-title">
                    <h3>{title}</h3>
                    
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
                <div>
                    <p>{artists}</p>
                </div>
                <div className="btn">
                    <button> 
                        <a href={link} target="_blank" rel='noopener noferrer'>
                            view more
                        </a>
                    </button>
                </div>
            </div>
 
        </div>
    )
}

export default Card 
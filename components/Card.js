import React from 'react';
import styles from '@/styles/Home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Grid({title,imgUrl,body,artist,link}) {
  return (
   
          <Card>
            <Card.Img variant="top" src= {imgUrl} alt='' />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <p>{artist}</p>

              </Card.Text>
                     <button> 
                        <a href={link} target="_blank" rel='noopener noferrer'>
                          Song
                        </a>
                      </button>
            </Card.Body>
          </Card>
   
  );
}

export default Grid;



// function Card({title,imgUrl,body, artists, link}) {
//     return (
//         <div className='Card-container'>
//             <div className='image-contianer'>
//                 <img src= {imgUrl} alt=''/> 

//             </div>
//             <div clasName="Card-content">
//                 <div clasName="card-title">
//                     <h3>{title}</h3>
                    
//                 </div>
//                 <div className="card-body">
//                     <p>{body}</p>
//                 </div>
//                 <div>
//                     <p>{artists}</p>
//                 </div>
//                 <div className="btn">
//                     <button> 
//                         <a href={link} target="_blank" rel='noopener noferrer'>
//                             Song
//                         </a>
//                     </button>
//                 </div>
//             </div>
 
//         </div>
//     )
// }

// // export default Card 
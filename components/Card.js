import React from 'react';
import styles from '@/styles/Home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


function Grid({title,imgUrl,body,artists,link}) {
  return (
    <CardGroup>

    
          <Card
          bg='dark'
          //key=
          text ='light' 
          style={{gap: 0 }}
          className="mb-2"
          >
          
            <Card.Img variant="top" src= {imgUrl} alt=' ' />
            <Card.Body>
              <Card.Title>Song Title: {title}</Card.Title>
              <Card.Text>
                Artist: {artists}
                 
              </Card.Text>
                     <Button variant="warning" text="light"> 
                        <a href={link} target="_blank" rel='noopener noferrer'>
                          Song
                        </a>
                      </Button> 
            </Card.Body>
          </Card>
    </CardGroup>
   
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
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import TinderCard from 'react-tinder-card';
import Description from './Description';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import './Cards.css';

function Cards() {
  const [pets, setPets] = React.useState([
    {
      name: 'chewie',
      url: 'https://www.petplate.com/wp-content/uploads/2021/03/AdobeStock_236757188.jpeg'
    },
    {
      name: 'scout',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Scottish_Terrier_Photo_of_Face.jpg'
    },
    {
      name: 'puggy',
      url: 'https://www.akc.org/wp-content/uploads/2017/11/Pug-puppy-standing-in-profile-on-a-white-background.jpg'
    }
  ])
  const swiped=(direction,nameToDelete)=>{
    console.log(`i'm in swiped`,nameToDelete);
    // setLastDirection(direction);
  }

  const outOfFrame=(name)=>{
    console.log(`enough tinder today`);
    
  }
  return (
    <div>
    <div className='card-container'>
      {
        pets.map( (pet) => (
          <TinderCard className='swipe' key={pet.name} preventSwipe={['up', 'down'] } 
          onSwipe={(dir) => swiped(dir, pet.name)}
          onCardLeftScreen={() => outOfFrame(pet.name)}> 
            <div className='card' style={ {backgroundImage: `url(${pet.url})`} }>
              <h3>{pet.name}</h3>
              <a href="/description" className='moreInfo' element={<Description/>}>
              <InfoIcon />
              </a>
              
            </div>
            
          </TinderCard>
        ))
      }
        
        
    </div>
      <div className='footer-icons'>
      <button className='heart'>
          <FavoriteIcon fontSize='large' />
      </button>
      <button className='next'>
          <NextPlanIcon fontSize='large' />
    </button>

</div>
</div>
  )
}

export default Cards
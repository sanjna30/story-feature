import React from 'react'
import Stories from 'react-insta-stories'


function App() {
   
  const stories = [{

    {
      url: 'https://i.pinimg.com/736x/64/98/84/64988408be34f80f560df31f8321fa0a.jpg',
      header: {
        heading: 'Amrita shingh',
        subheading: 'Posted 5 minutes ago',
        profileImage: 'https://i.pinimg.com/736x/74/49/00/744900e93549505bae28039b0d668540.jpg',
      },
      duration: 5000,
    },

    {
      url: 'https://i.pinimg.com/736x/50/2f/b0/502fb0fca6ca6cee5f4a510fc998dc67.jpg',
      header: {
        heading: 'Pranali Rajpoot',
        subheading: 'Posted 23 minutes ago',
        profileImage: 'https://i.pinimg.com/736x/f2/bc/cb/f2bccb25ea21ed5c55bb3ae58f680a9d.jpg',
      },
      duration: 5000,
    },

    {
      url: 'https://i.pinimg.com/736x/90/86/ee/9086eefc436ded1c28138b5e970841f4.jpg',
      header: {
        heading: 'tanya yadav',
        subheading: 'Posted 18 minutes ago',
        profileImage: 'https://i.pinimg.com/736x/5b/6f/1b/5b6f1ba070c39fa8885fa83577c0501b.jpg',
      },
      duration: 5000,
    },


  }]
 
 
   
 
 
 
 
 
  return (
   <div>
    <Stories 
    
    stories={stories}
    defaultInterval={1500}
    width={432}
    height={768}
    
    
    
    />
   </div>
  )
}

export default App
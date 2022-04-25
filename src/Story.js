import React from 'react';
import './Story.css';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import { Close } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';


function Story() {

  const history = useHistory();

  function storyView() {
    history.push('/storyview');
}

    const stories = [
        {
          type: 'image',
          url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
          duration: 5000,
        },
        {
          type: 'image',
          duration: 6000,
          url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
        },
        {
          type: 'video',
          url: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4',
          duration: 28000,
        },
      ];
    
      return (
        <div className="story">
          <Stories 
            stories={stories}

          />
          <Close onClick={storyView} className='close'/>
          </div>
          
      );
    }
export default Story;
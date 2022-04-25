import { Close } from '@mui/icons-material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import './Subtwo.css'

function Subtwo() {

    const history = useHistory();

  function storyView() {
    history.push('/storyview');
}

    const stories = [
        {
          type: 'video',
          url: 'https://assets.mixkit.co/videos/preview/mixkit-young-duo-playing-soccer-at-night-2920-large.mp4',
          duration: 11000,
        },
      ];
    
      return (
        <div className="subTwo">
        <Stories 
          stories={stories}

        />
        <Close onClick={storyView} className='ex'/>
        </div>
      );
    }

export default Subtwo
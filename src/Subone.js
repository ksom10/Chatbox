import { Close } from '@mui/icons-material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import './Subone.css'

function Subone() {

    const history = useHistory();

  function storyView() {
    history.push('/storyview');
}
    
    const stories = [
        {
          type: 'video',
          url: 'https://assets.mixkit.co/videos/preview/mixkit-celebrity-woman-arriving-to-a-red-carpet-23333-large.mp4',
          duration: 39000,
        },
      ];
    
      return (
        <div className="sub">
        <Stories 
          stories={stories}

        />
        <Close onClick={storyView} className='exit'/>
        </div>
      );
    }

export default Subone;
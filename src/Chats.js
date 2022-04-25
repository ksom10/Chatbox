import React, { useState, useEffect } from 'react';
import "./Chats.css";
import { auth, db } from './firebase';
import { resetImage, selectUser } from './features/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';
import Chat from './Chat';
import { Avatar } from '@mui/material';
import { ChatBubble, RadioButtonUnchecked, Search } from '@mui/icons-material';

export default function Chats() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    })
  }, [posts])

  const takeSnap = ()=>{
    dispatch(resetCameraImage())
    history.push('/');
  }

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar"
          src={user.profilePic}
          onClick={() => {
            auth.signOut();
          }}
        />
        <div className="chats__search">
          <Search className="chats__searchIcon" />
          <input placeholder="friends" type="text" />
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>
      <div className="chat__posts">
        {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
          <Chat
            key={id}
            id={id}
            username={username}
            timestamp={timestamp}
            imageUrl={imageUrl}
            read={read}
            profilePic={profilePic}
          />
        ))}
      </div>
    
      <RadioButtonUnchecked
        className="chats__takepicicon"
        onClick={takeSnap}
        fontSize="large"
      />
    </div>
  )
}
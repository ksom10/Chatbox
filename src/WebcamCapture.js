import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router';
import './WebcamCapture.css';
import { ChatBubble, ChatBubbleOutline, ChatBubbleOutlined, Layers, RadioButtonUnchecked } from '@mui/icons-material';

const videoConstraints = {
  facingMode: "user",
}

export default function WebcamCapture() {
  const dispatch = useDispatch()
  const webcamRef = useRef(null);

  const history = useHistory()

  const capture = useCallback(() => {
    const imageSource = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSource));
    history.push('/preview')
  }, [webcamRef])

  function chat() {
      history.push('/chats');
  }

  function story() {
    history.push('/storyview');
}

  return (
    <div className="webCamCapture">
      <Webcam
      className='webCamCapture_cam'
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <RadioButtonUnchecked
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
      <ChatBubbleOutline
        className='webcamCapture__chat'
        onClick={chat}
        fontSize='large'
      />
      <Layers
      className='webcamCapture__stories'
      onClick={story}
      fontSize='large'
      />
    </div>
  )
}
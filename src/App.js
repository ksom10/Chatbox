import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';
import Story from './Story';
import './App.css';
import Chats from './Chats';
import Chatview from './Chatview';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';
import Storyview from './Storyview';
import Subone from './Subone';
import Subtwo from './Subtwo';
import logo from "./images/logo.png";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img className="app__logo" src={logo} alt="" />
            <div className="app__body">
              <div className="body__background">
              <Switch>
                <Route path="/chats/view">
                  <Chatview />
                </Route>
                <Route path="/chats">
                  <Chats />
                </Route>
                <Route path="/story">
                  <Story />
                </Route>
                <Route path="/subone">
                  <Subone />
                </Route>
                <Route path="/subtwo">
                  <Subtwo />
                </Route>
                <Route path="/storyview">
                  <Storyview />
                </Route>
                <Route path="/preview">
                  <Preview />
                </Route>
                <Route exact path="/">
                  <WebcamCapture />
                </Route>
              </Switch>
              </div>
            </div>
          </>
        )
        }

      </Router>
    </div>
  );
}

export default App;
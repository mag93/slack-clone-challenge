import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import db from "./firebase";
import {useEffect, useState} from 'react';
import Lottie from "react-lottie";

function App() {

  const [rooms, setRooms] = useState([]);

  const getChannels = () =>{
    db.collection('rooms').onSnapshot((snapshot) => {
        console.log(snapshot.docs)
        snapshot.docs.map((doc) =>{
            setRooms(snapshot.docs.map((doc) =>{
              return {id: doc.id, name: doc.data().name}
            }))
        })
    })
  }


  useEffect (() => {
      getChannels();
  }, [])


  console.log(rooms)
  return (
    <div className="App">
     <Router>
       <Container>
        <Header/>
         <Main>
         <Sidebar rooms={rooms} />
          <Switch>
            <Route path="/room">
                <Chat/>
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
         </Main>
       </Container>
     </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 38px auto;
  background: #242323;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`

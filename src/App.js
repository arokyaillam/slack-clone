import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import Chat from './Components/Chat'
import Login from './Components/Login';
import styled from 'styled-components'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import db from './Components/firebase'
import { auth, provider} from './Components/firebase'
function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(localStorage.getItem("user"))


  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })

  }

  const signOut = () =>{
    auth.signOut().then(() =>{
      localStorage.removeItem("user")
      setUser(null);
    })
  }
  useEffect(() => {
    getChannels()
  }, [])


  return (
    <div className="App">
      <Router>
        {
          !user ?
            <Login setUser = {setUser}/>
            :

            <Container>
              <Header signOut = {signOut} user = {user}/>
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat />
                  </Route>
                  <Route path = "/">
                    Seclct r create
                  </Route>
                </Switch>
              </Main> 
            </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
    width : 100%;
    height : 100vh;
    display : grid;
    grid-template-rows : 38px auto; 
`
const Main = styled.div`
    display : grid;
    grid-template-columns : 260px auto;
`
import './App.css';
import styled from 'styled-components'

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const App = () => {
  return (
   <AppContainer>
      Hello World
   </AppContainer> 
  )
}

export default App;

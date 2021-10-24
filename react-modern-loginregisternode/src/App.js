import './App.css';
import styled from 'styled-components'
import { AccountBox } from './components/accountBox/accountBox';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

function App() {
  return (
    <AppContainer>
      <AccountBox/>  
    </AppContainer>
  ) 
  
}

export default App;
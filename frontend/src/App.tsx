import './styles/App.css'
import MainHeader from './headers/MainHeader'
import BodyHandler from './bodies/BodyHandler'
import Body_1 from './bodies/parts/Body_1'
import Body_2 from './bodies/parts/Body_2'

function App() {
  return (
    <>
      <MainHeader/>
      <BodyHandler
        sections={[Body_1, Body_2]}
      />
    </>
  )
}

export default App

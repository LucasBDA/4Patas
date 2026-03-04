import './styles/App.css'
import MainHeader from './headers/MainHeader'
import BodyHandler from './bodies/BodyHandler'
import Body_1 from './bodies/components/Body_1'
import Body_2 from './bodies/components/Body_2'
import Body_3 from './bodies/components/Body_3'

function App() {
  return (
    <>
      <MainHeader/>
      <BodyHandler
        sections={[Body_1, Body_2, Body_3]}
      />
    </>
  )
}

export default App

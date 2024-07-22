import './App.css'
import Navbar from './components/Navbar.jsx'
import Left from './components/Left.jsx'
import Right from './components/Right.jsx'


function App() {
  return (
    <>
    <Navbar />
    <div className="Layout">
      <div className="w-2/12">
    <Left />
      </div>
      <div className="flex-grow">
    <Right />
      </div>
    </div>
    </>
  )
}

export default App

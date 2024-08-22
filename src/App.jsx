
import './App.css'
import Balls from './Balls'
import Footer from './Footer'
import Mainleft from './Mainleft'
import Mainright from './Mainright'
import Navbar from './Navbar'


function App() {


  return (
    <div className='body'>
      <div className='container'>
        <Navbar/>
        <div className="left-right">
        <Mainleft/>
        <Mainright/>
        </div>
        {/* <Balls/> */}
        <Footer/>
        
      </div>
      
    </div>
  )
}

export default App

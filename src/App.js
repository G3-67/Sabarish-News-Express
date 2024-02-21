import './App.css';
import './index.css';

import Business from './Business';
import Health from './Health';
import Science from './Science';
import General from './General';
import Sports from './Sports';
import Technology from './Technology'
import Intertainment from './Intertainment'
import {Link,Routes,Route} from 'react-router-dom';
import Header from './Header';


function App() {
    
  return (
    <div className='App'>
      <Header />
    <div className="frame">
    <div className="navbar">
      
      <div><Link className="text-wrapper" to ="/General">GENERAL</Link>
      <div><Link className="div" to ="/Business">BUSINESS</Link></div>
      <div><Link className="text-wrapper-2" to ="/Intertainment">ENTERTAINMENT</Link></div>
      <div><Link className="text-wrapper-3" to ="/Health">HEALTH</Link></div>
      <div><Link className="text-wrapper-4" to="/Science">SCIENCE</Link></div>
      <div><Link className="text-wrapper-5" to="/Sports">SPORTS</Link></div>
      <div><Link className="text-wrapper-6" to ="/Technology">TECHNOLOGY</Link></div>
      
    </div>
    
    
    <Routes>
        <Route path="/Business" element={<Business />}/>
        <Route path="/Intertainment" element={<Intertainment />}/>
        <Route path="/Health" element={<Health />}/>
        <Route path="/Technology" element={<Technology />}/>
        <Route path="/Sports" element={<Sports />}/>
        <Route path="/General" element={<General />}/>
        <Route path="/Science" element={<Science />}/>

    </Routes>
    </div>
    </div>
    </div>
  )
}

export default App;

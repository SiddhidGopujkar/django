import logo from './logo.svg';
import './styles/App.css';
import './styles/Icons.css';
import { Sidebar } from './components/partials/Theme';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './components/pages/Home';
import About from './components/pages/About';
import PersonalizedJourney from './components/pages/PersonalizedJourney';
import ChatBot from './components/pages/ChatBot';
import NotFound from './components/pages/NotFound';
import Recipes from './components/pages/Recipes';

function App() {
  return (
    <div className="App">

      <Router>

        <Sidebar />
        
        <Routes>
          {/* Guest routes */}
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/personalizedjourney" element={<PersonalizedJourney />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path='*' element={<NotFound />} />
          {/* Guest routes, Not logged in */}
          
          {/* Private routes */}
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;

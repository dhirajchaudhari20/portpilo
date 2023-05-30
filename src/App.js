import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import { GlobalStyles } from "./components/global-style";
import { Route } from 'react-router-dom';
import Resume from "./components/resume";
import ThankYou from "./components/thankyou";


function App() {
  


  return (
    <div className="App">
      <GlobalStyles/>
      <Nav />
      
     <Route path = '/' exact>
     
      <Home />
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      </Route> 
     <Route path = '/resume'>
      <Resume/>  
     </Route> 
     <Route path = '/thank'>
      <ThankYou/>
     </Route>
      
    </div>
  );
}

export default App;

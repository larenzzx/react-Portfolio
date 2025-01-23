// import Sample from './components/useStateSample'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // for routing to another page

import Hero from './components/Hero'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Hero />
    </>

    // sample on redirecting to another page
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Hero />} />
    //     <Route path="/about" element={
    //       <Hero />
    //     } />
    //     <Route path="/projects" element={<h1>Projects Page</h1>} />
    //     <Route path="/contact" element={<h1>Contact Page</h1>} />
    //   </Routes>
    // </Router>
  )
}

export default App

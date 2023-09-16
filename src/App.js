import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import DrawingBoard from './components/DrawingBoard';

function App() {
  // Check if the window width is greater than or equal to 900 pixels
  const isMaximized = window.innerWidth >= 900;

  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

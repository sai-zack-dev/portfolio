import { Contact } from './views/Contact';
import { Experience } from './views/Experience';
import { Header } from './views/Header'; 
import { Projects } from './views/Projects'; 
import { Skills } from './views/Skills';

function App() { 
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App

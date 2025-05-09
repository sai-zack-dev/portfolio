import { Contact } from './views/Contact';
import { Experience } from './views/Experience';
import { Header } from './views/Header'; 
import { Introduction } from './views/Introduction';
import { Projects } from './views/Projects'; 
import { Skills } from './views/Skills';

function App() { 
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App

import { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "./components/ui/multi-step-loader"; // adjust this import path
import { Contact } from "./views/Contact";
import { Experience } from "./views/Experience";
import { Header } from "./views/Header";
import { Introduction } from "./views/Introduction";
import { Projects } from "./views/Projects";
import { Skills } from "./views/Skills";

// Define your loading steps
const loadingStates = [
  { text: "Waking up the backend..." },
  { text: "Fetching skills..." },
  { text: "Loading projects..." },
  { text: "Contacting aliens..." },
  { text: "Rendering experience..." },
  { text: "Done!" },
];

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Replace this with your real data fetching logic
  //   const fetchData = async () => {
  //     try {
  //       // Example of loading from APIs
  //       // await Promise.all([fetchSkills(), fetchProjects(), fetchUser()]);
  //       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated loading
  //     } catch (error) {
  //       console.error("Failed to load data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div  className="bg-white dark:bg-black w-full h-full min-h-dvh">
      {/* Loader shown while data is loading */}
      {/* <Loader loadingStates={loadingStates} loading={loading} duration={600} /> */}

      {/* {!loading && ( */}
        <div>
          <Header />
          <Introduction />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      {/* )} */}
    </div>
  );
}

export default App;

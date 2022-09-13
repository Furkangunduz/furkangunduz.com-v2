import BigSection from "./components/BigSection"
import AboutMe from "./views/AboutMe"
import Projects from "./views/Projects"

function App() {
  return (
    <main className="h-screen overflow-hidden flex">
      <BigSection >
        <AboutMe />
      </BigSection>
      <BigSection>
        <Projects />
      </BigSection>
    </main>
  );
}

export default App;

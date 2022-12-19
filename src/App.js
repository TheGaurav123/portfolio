import "./App.css";
import { Landing, Projects, Skills, About, Footer, Form } from "./components";
import Cursor from "./components/cursor/Cursor";
function App() {
  return (
    <>
      <Cursor />
      <Landing />
      <Projects />
      <Skills />
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default App;

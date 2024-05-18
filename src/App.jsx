import "./App.css";
import Form from "./components/Form";
import BreedInfo from "./components/BreedInfo";
import Container from "./components/Container";

function App() {
  return (
    <Container className="font-mono text-xl">
      <h1 style={{ width: "60rem", fontSize: "3rem", marginBottom: "2rem" }}>
        Dog Searcher
      </h1>
      <Form />
      <BreedInfo className="grid justify-center" />
    </Container>
  );
}

export default App;

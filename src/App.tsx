import "./App.scss";
import Table from "./components/table";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Table />
      </ThemeProvider>
    </>
  );
}

export default App;

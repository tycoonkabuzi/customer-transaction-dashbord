import { Provider } from "react-redux";
import "./App.scss";
import ReduxExercise from "./components/ReduxExercise";
import Table from "./components/table";
import { ThemeProvider } from "./context/ThemeContext";
import { store } from "./store";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Todo />
      {/* <Provider store={store}>
        <ReduxExercise />
      </Provider>

      <ThemeProvider>
        <Table />
      </ThemeProvider> */}
    </>
  );
}

export default App;

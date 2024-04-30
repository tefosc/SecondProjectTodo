import { AppUi } from "./AppUI";
import { TodoProvider } from "../TodoContext/TodoContext.jsx";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;

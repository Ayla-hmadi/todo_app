import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  console.log("hihi");
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodo/>
      </div>
    </>
  );
}

export default App;

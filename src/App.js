import logo from './logo.svg';
import './App.css';
import {useQuery} from "react-query";

function App() {

  const {isLoading, data, error} = useQuery()

  return (
    <div className="App">
      react query
    </div>
  );
}

export default App;

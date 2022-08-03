import{BrowserRouter,Routes,Route,} from "react-router-dom"
import Home from './pages/home/Home'
import List from "./pages/list/List";
import Resorts  from "./pages/resorts/Resorts";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/hotels"element={<List/>}/>
      <Route path="/resorts"element={<Resorts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

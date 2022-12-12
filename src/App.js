import "./App.css";
import Acceuil from "./components/Acceuil";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/UserSlice";
import { getToDoList } from "./redux/TodoSlice";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailUser from "./components/DetailUser";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getToDoList());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Acceuil />
        {/* <Route path="/DetailUser" element={<DetailUser/> }/> */}
      </div>
    </Router>
  );
}

export default App;

{/* <Router>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Acceuil />} />

  <Route path="/acceuil" element={<DetailUser />} >
    <Route path='pro' element={<ListTodo />} />
    <Route path='cat' element={<ListUser />} />
  </Route>
  
</Routes>
</BrowserRouter>
</Router> */}
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Listview from './Pages/Listview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addtask from './Pages/Addtask';
import DetailView from './Pages/DetailView';
import Edittask from './Pages/Edittask';
import ViewTask from './Pages/ViewTask';

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />

        <Routes>
          <Route exact path="listView" element={<Listview />} />
          <Route exact path="addTask" element={<Addtask />} />
          {/* <Route exact path="addTask" element={<Addtask/>}/> */}
          <Route exact path="detailview" element={<DetailView />} />
          <Route exact path="viewtask/:id" element={<ViewTask />} />
          <Route exact path="/edittask/:id" element={<Edittask />} />
        </Routes>


      </Router>


    </div>
  );
}

export default App;

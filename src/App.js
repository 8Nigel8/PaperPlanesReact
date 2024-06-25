import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Folders from "./components/Folders";
import Folder from "./components/Folder";
import Paper from "./components/Paper";
import Lexeme from "./components/Lexeme";
import CreateFolder from "./components/CreateFolder";
import CreatePaper from "./components/CreatePaper";
import CreateLexeme from "./components/CreateLexeme";
import Game from "./components/Game";

function App() {
  return (
    <Router >
      <div id ="content">
        <Routes>
          {/*views*/}
          <Route path = "/" element = {<Dashboard />}/>
          <Route path = "/folders" element = {<Folders />}/>
          <Route path = "/folder/:id" element = {<Folder />}/>
          <Route path = "/paper/:id" element = {<Paper />}/>
          <Route path = "/lexeme/:id" element = {<Lexeme />}/>
          {/*create*/}
          <Route path = "/create_folder" element = {<CreateFolder />}/>
          <Route path = "/create_paper" element = {<CreatePaper />}/>
          <Route path = "/create_lexeme" element = {<CreateLexeme />}/>
          {/*game*/}
          <Route path = "/game" element = {<Game />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

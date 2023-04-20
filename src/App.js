import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Profile from "./Components/Profile";
import QuestionList from "./Components/QuestionList";
import Question from "./Components/Question";
import Chatroom from "./Components/Chatroom";
import Classes from "./Components/Classes";
import Subject from "./Components/Subject";
import ClassesList from "./Components/ClassesList";
import SubjectsList from "./Components/SubjectsList";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/class" element={<Classes />} />
              <Route path="/class/:id" element={<ClassesList />} />
              <Route path="/questions" element={<QuestionList />} />
              <Route path="/question/:id" element={<Question />} />
              <Route path="/chatroom/:id" element={<Chatroom />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

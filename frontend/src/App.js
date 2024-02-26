import logo from './logo.svg';
import './App.css';
import React from "react";
import RegistrationForm from "./components/registrationForm";
import UsersTable from "./components/usersTable";

function App() {
  return (
    <div className="App">
      <RegistrationForm/>
      <UsersTable/>
    </div>
  );
}

export default App;

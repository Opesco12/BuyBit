import logo from "./logo.svg";
import "./App.css";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Toolbar>
        <Button variant="text" color="primary">
          Top deals
        </Button>
        <p>iPhones</p>
        <p>Samsung Phones</p>
        <p>iWatch</p>
        <p>iPad</p>
        <p>iMac</p>
        <p>airpods</p>
      </Toolbar>
    </div>
  );
}

export default App;

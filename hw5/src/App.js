import React from "react";
import AddForm from "./components/addForm";
import ProductDisplay from './components/productDisplay';
import Searchbar from './components/searchBar';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="headerTitle">Welcome to our Warehouse!</h1>
      <div style={{display:"flex"}}>
       <AddForm />
       <Searchbar />
       </div>
       <ProductDisplay />
    </div>
  );
}

export default App;

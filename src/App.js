import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Main/Header/Header";
import Main from "./components/Main/Main";
import { moviesData } from "./moviesData";
import AppRouter from "./Router/AppRouter";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };
  return (
    <div className="App">
      
      <Header
        setSearchName={setSearchName}
        setSearchRate={setSearchRate}
        searchRate={searchRate}
      />
      <Main
        movies={
          (searchName || searchRate)
            ? movies.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase().trim()) &&
                  el.rating >= searchRate
              )
            : movies
        }
        AddNewMovie={AddNewMovie}
      />
    </div>
  );
}

export default App;

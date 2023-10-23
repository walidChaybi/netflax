import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Actors, MovieInformation, Movies, Profile, Navbar } from "./";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div style={classes.root}>
      <Navbar />
      <main style={classes.content}>
        <div style={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

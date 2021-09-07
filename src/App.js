import React from 'react';
import Movies from "./views/Movies/Movies";
import {BrowserRouter as Router, Route} from "react-router-dom";
import FilmDetails from "./views/FilmDetails/FilmDetails";
import Header from "./components/Header";
import Actor from "./views/Actor";
import AllActors from "./views/AllActors";
import Browse from "./views/Browse";

const App = () => {
    return (
        <Router>
            <Header/>
            <div className='container my-5'>
                <Route exact path='/'><Movies/></Route>
                <Route path='/film/:id'><FilmDetails /></Route>
                <Route path='/actor/:id'><Actor /></Route>
                <Route path='/browse/:name'><Browse /></Route>
                <Route path='/allActors/:id'><AllActors /></Route>
            </div>
        </Router>
    );
};

export default App;
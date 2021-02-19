import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { moviesData } from '../moviesData';
import MovieDescription from "../components/MovieDescription/MovieDescription"
import Main from '../components/Main/Main';
import App from '../App';

const AppRouter = () => {
    return (
        <div>
           <Switch>
               <Route exact path="/" component={App}/>
               <Route 
               exact 
               path="/Movie/ :id"
               render ={(defaultProps)=><MovieDescription {...defaultProps} moviesData={moviesData}/>}
               />
 


           </Switch> 
        </div>
    )
}

export default AppRouter

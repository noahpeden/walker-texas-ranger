import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import InputArea from '../Main/inputArea';
import './jokes-styles'


const FavoritesBtn = (props) => {
     return(
       <div>
         <div className='button-input'>
           <Link to='/jokes'>
            <button  className='new-jokes'
                      onClick= {()=>props.getNewJokes()}
             >Get Jokes</button></Link>
             <InputArea
               handleChange={props.handleChange}
               jokesNum={props.jokesNum}
               getNewJokes={props.getNewJokes}
             />
           <div><Link to='/favorites'><button onClick={()=>props.favoritesCheck()}>Favorites</button></Link></div>
           </div>
         <ul>
           {props.favoritesCheck()}
         </ul>
       </div>
     )
   }

export default FavoritesBtn;

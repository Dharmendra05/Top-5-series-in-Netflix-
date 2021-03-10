import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import css from './index.css'


function Cards(props){
	return (<>
             <div className="parent_cards">
             	<img src={props.imgurl} alt="avatar"/>
             	<div class="container">
             		<h4><b>{props.title}</b></h4>
             		<p>{props.about}</p>
             		<a href={props.link}>
             		<button className="btn">watch now</button>
             		</a>
             	</div>
             </div>
	   </>);
}


 

export default Cards;
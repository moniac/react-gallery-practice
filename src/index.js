import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Card from './components/Card'
import CardList from './components/CardList'
import registerServiceWorker from './registerServiceWorker'
import {robots} from './robots'
import 'tachyons'

ReactDOM.render(
	<div>
		<CardList robots={robots}/>
	</div>
	, document.getElementById('root'))
registerServiceWorker()
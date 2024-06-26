import './App.css'

import thumbnail from "./Assets/FRESHERBRINE.jpeg"
import bg from "./Assets/1080439.png"

import './Style/left-side.css'
import './Style/right-side.css'

import Groups from './components/Group'
import Menubar from './components/Menubar'
import MiniMusicPlayer from './components/Mini-Music-Player'
import SearchBar from './components/Search-bar'
import ThreeDot from './components/three-dot'

import FeaturedTrack from './components/Featured-track'
import FeaturedArtist from './components/Featured-artist'
import Recommendation from './components/Recommendation'
import AddAudio from './components/Add-audio'

import { createStore } from 'redux';
import AudioReducer from './components/AudioReducer';
import React from 'react';
import { Provider } from 'react-redux';

const store = createStore(AudioReducer);

function App() {
	return (
		<Provider store={store}>
			<img className='bg' src={bg} alt='Background' />
			<AddAudio />
			<div className="app">
				<LeftSide />
				<RightSide />
			</div>
		</Provider>
	)
}

function LeftSide() {
	return (
		<div className='left-side'>
			<Menus />
			<MiniMusicPlayer thumbnail={thumbnail} trackName={"Way Back Home"} trackAuthor={"Unknown"} />
		</div>
	)
}

function RightSide() {
	return (
		<div className='right-side'>
			<FeaturedTrack thumbnail={thumbnail} trackName={"Way Back Home"} />
			<FeaturedArtist />
			<Recommendation />
		</div>
	)
}

function Menus() {
	return (
		<div className='menus'>
			<ThreeDot />
			<SearchBar />
			<Menubar />
			<Groups />
		</div>
	)
}

export default App
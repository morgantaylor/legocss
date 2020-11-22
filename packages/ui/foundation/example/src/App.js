import React from 'react'

import '@legocss/foundation/dist/index.css'
import './index.scss'

const boxContainer = {
	position: 'relative',
	margin: '1rem',
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap'
}

const neutral200 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#f0f0f0',
	color: '#000'
}
const neutral300 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor:  '#d2d2d2',
	color: '#000'
}
const neutral400 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#b5b5b5',
	color: '#000'
}
const neutral500 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#999999',
	color: '#000'
}
const neutral600 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#7e7e7e',
	color: '#fff'
}
const neutral700 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#646464',
	color: '#fff'
}
const neutral800 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#4b4b4b',
	color: '#fff'
}
const neutral900 = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#333333',
	color: '#fff'
}

const primary = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#0075b2',
	color: '#fff'
}
const success = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#408040',
	color: '#fff'
}
const info = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#28A1C5',
	color: '#fff'
}
const warning = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#E97403',
	color: '#fff'
}
const danger = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#d53e4f',
	color: '#fff'
}
const highlight = {
	margin: '0rem 1rem 1rem 0',
	padding: '2rem',
	backgroundColor: '#E6E600',
	color: '#333333'
}

const App = () => {
	return (
		<div style={{margin: '0 auto', textAlign: 'center'}}>
			<h1 className='headline'>@legocss/foundations</h1>
			<hr />
			<section>
				<h1 className='headline' style={{textDecoration: 'underline'}}>Headlines</h1>
				<h1>H1 Example</h1>
				<h2>H2 Example</h2>
				<h3>h3 Example</h3>
				<h4>h4 Example</h4>
				<h5>h5 Example</h5>
				<h6>h6 Example</h6>
			</section>
			<hr />
			<section>
				<h1 className='headline' style={{textDecoration: 'underline'}}>Colors</h1>
				<h2 className='subheadline'>Neutrals</h2>
				<div style={boxContainer}>
					<div style={neutral200}>--color-neutral-200</div>
					<div style={neutral300}>--color-neutral-300</div>
					<div style={neutral400}>--color-neutral-400</div>
					<div style={neutral500}>--color-neutral-500</div>
					<div style={neutral600}>--color-neutral-600</div>
					<div style={neutral700}>--color-neutral-700</div>
					<div style={neutral800}>--color-neutral-800</div>
					<div style={neutral900}>--color-neutral-900</div>
				</div>
				<h2 className='subheadline'>Actions</h2>
				<div style={boxContainer}>
					<div style={primary}>--color-primary</div>
					<div style={success}>--color-sucess</div>
					<div style={info}>--color-info</div>
					<div style={warning}>--color-warning</div>
					<div style={danger}>--color-danger</div>
					<div style={highlight}>--color-highlight</div>
				</div>
			</section>
			<div>
				<p className='test-custom'>testing using mixins</p>
			</div>
		</div>
	)
}

export default App

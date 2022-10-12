import React from 'react';
import './App.css';

const questions = [
  {
    title: 'React - its ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - its ... ',
    variants: ['application', 'a part of application or page', 'idk what it is'],
    correct: 1,
  },
  {
    title: 'What is a JSX?',
    variants: [
      'Its a simple HTML',
      'Its a function',
      'Its the same HTML, but with possibility doing JS-code',
    ],
    correct: 2,
  },
];

function Result() {
	
}

function Game({ question }) {
	return (
		<>
			<div className="progress">
				<div style={{ width: '20%' }} className="progress__inner"></div>
			</div>
			<h1>{question.title}</h1>
      <ul>
				{
					question.variants.map((text) => (
						<li key={text}>{text}</li>
					))
				}
      </ul>
		</>
	)
}

function App() {
	const [step, setStep] = React.useState(0);
	const question = questions[step];

	console.log(question);

  return (
		<>
			<div className='app'>
				<Game question={question}/>
				{/* <Result /> */}
			</div>
		</>
  );
}

export default App;

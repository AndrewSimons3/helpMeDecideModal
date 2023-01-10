import React, { Fragment } from 'react';
import classes from './Screen1.module.css';
import { useState } from 'react';

function Screen1(props) {

  const [movingType, setMovingType] = useState('Move');

  const handleSwitchChange = () => {
    setMovingType('Switch');
  };

  const handleMoveChange = () => {
    setMovingType('Move');
  };

  return (
		<Fragment>
			<div className={classes.header}>
				<h1>Moving or Switching?</h1>
				<p>
					Page {props.curPage} of {props.totalPages}
				</p>
			</div>

			<p>
				Are you moving in, or are you just looking to switch to a new electric
				company?
			</p>

			<div className={classes.answers}>
				<RadioButton
					className={classes.radio}
					label='Moving'
					value={movingType === 'Move'}
					onChange={handleMoveChange}
				/>
				<RadioButton
					className={classes.radio}
					label='Switching'
					value={movingType === 'Switch'}
					onChange={handleSwitchChange}
				/>
			</div>
		</Fragment>
	);
};

const RadioButton = ({ label, value, onChange }) => {
	return (
		<label>
			<input type='radio' checked={value} onChange={onChange} />
			{label}
		</label>
	);
};


export default Screen1;

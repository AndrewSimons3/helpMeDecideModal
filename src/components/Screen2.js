import React, { Fragment } from 'react';
import { useState } from 'react';
import classes from './Screen2.module.css';

function Screen2(props) {
	const [livingType, setLivingType] = useState('House');

	const handleApartmentChange = () => {
		setLivingType('Apartment');
	};

	const handleHouseChange = () => {
		setLivingType('House');
	};
	return (
		<Fragment>
			<div className={classes.header}>
				<h1>Is this for a House or an Apartment?</h1>
				<p>
					Page {props.curPage} of {props.totalPages}
				</p>
			</div>
			<div className={classes.answers}>
				<RadioButton
					label='House'
					value={livingType === 'House'}
					onChange={handleHouseChange}
				/>
				<RadioButton
					label='Apartment'
					value={livingType === 'Apartment'}
					onChange={handleApartmentChange}
				/>
			</div>
		</Fragment>
	);
}

const RadioButton = ({ label, value, onChange }) => {
	return (
		<label>
			<input type='radio' checked={value} onChange={onChange} />
			{label}
		</label>
	);
};

export default Screen2;

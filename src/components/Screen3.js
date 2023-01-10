import React from 'react';
import { Fragment, useState } from 'react';
import classes from './Screen3.module.css';

function Screen3(props) {
	const smallHome = '500-1200 square feet, ~500kWh usage';
	const mediumHome = '1200-2000 square feet, ~1000kWh usage';
	const largeHome = '2000-3000 square feet, ~1500kWh usage';
	const extraLargeHome = '3000+ square feet, ~2000kWh usage';

	const [usage, setUsage] = useState('Small');

	const handleSmallChange = () => {
		setUsage('Small');
	};

	const handleMediumChange = () => {
		setUsage('Medium');
	};

	const handleLargeChange = () => {
		setUsage('Large');
	};

	const handleExtraLargeChange = () => {
		setUsage('ExtraLarge');
	};

	return (
		<Fragment>
			<div className={classes.header}>
				<h1>What's your usage?</h1>
				<p>
					Page {props.curPage} of {props.totalPages}
				</p>
			</div>
			<p>
				Choose your home type or enter your monthly usage to shop total monthly
				cost:
			</p>

			<div className={classes.answers}>
				<div>
					<RadioButton
						label='Small Home'
						value={usage === 'Small'}
						onChange={handleSmallChange}
					/>
					<p>{smallHome}</p>
				</div>
				<div>
					<RadioButton
						label='Medium Home'
						value={usage === 'Medium'}
						onChange={handleMediumChange}
					/>
					<p>{mediumHome}</p>
				</div>
				<div>
					<RadioButton
						label='Large Home'
						value={usage === 'Large'}
						onChange={handleLargeChange}
					/>
					<p>{largeHome}</p>
				</div>
				<div>
					<RadioButton
						label='Extra Large Home'
						value={usage === 'ExtraLarge'}
						onChange={handleExtraLargeChange}
					/>
					<p>{extraLargeHome}</p>
				</div>
			</div>

			<p>
				Things to consider... Why is comparing monthly plan cost based on your
				usage so important? How can I find out how much I expect to use?
			</p>
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

export default Screen3;

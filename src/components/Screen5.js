import React, { Fragment, useState } from 'react';
import classes from './Screen5.module.css';

function Screen5(props) {

  const [greenEnergyPlans, setGreenEnergyPlans] = useState('All Plans');

  	const handleShowAllChange = () => {
			setGreenEnergyPlans('All Plans');
		};

		const handleGreenPlanChange = () => {
			setGreenEnergyPlans('Green Plans');
		};



	return (
		<Fragment>
			<div className={classes.header}>
				<h1>How important is "Going Green"?</h1>
				<p>
					Page {props.curPage} of {props.totalPages}
				</p>
			</div>
			<p>
				Green Energy is energy generated from renewable resource like wind and
				solar.
			</p>

			<div className={classes.answers}>
				<div>
					<RadioButton
						label='Show All'
						value={greenEnergyPlans === 'All Plans'}
						onChange={handleShowAllChange}
					/>
				</div>
				<div>
					<RadioButton
						label='Show 100% Green plans ONLY'
						value={greenEnergyPlans === 'Green Plans'}
						onChange={handleGreenPlanChange}
					/>
				</div>
			</div>

			<p>
				Things to consider... What is “Going Green” with energy? How does my
				choice make an impact?
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
export default Screen5;

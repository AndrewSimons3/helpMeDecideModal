import React, { Fragment, useState } from 'react';
import classes from './Screen4.module.css';

function Screen4(props) {
	const [contractTerm, setContractTerm] = useState('All');

  const handleAllContractTermChange = () => {
    setContractTerm('All Contracts')
  };

  const handleFixedContractTermChange = () => {
    setContractTerm('Fixed Term Contracts')
  };

  const handleNoContractTermChange = () => {
    setContractTerm('No Contracts')
  };

	return (
		<Fragment>
			<div className={classes.header}>
				<h1>Terms / Contracts</h1>
				<p>
					Page {props.curPage} of {props.totalPages}
				</p>
			</div>

			<p>What contact terms interest you?</p>

			<div className={classes.answers}>
				<div>
					<RadioButton
						label='Show All'
						value={contractTerm === 'All Contracts'}
						onChange={handleAllContractTermChange}
					/>
				</div>
				<div>
					<RadioButton
						label='Fixed Term Only'
						value={contractTerm === 'Fixed Term Contracts'}
						onChange={handleFixedContractTermChange}
					/>
				</div>
				<div>
					<RadioButton
						label='No Contract Only'
						value={contractTerm === 'No Contracts'}
						onChange={handleNoContractTermChange}
					/>
				</div>
			</div>

			<div>
				<p>
					IMPORTANT NOTE: If you move out before your fixed-rate contract is up,
					don’t worry. You will NOT be charged an early termination fee if you
					cancel your service because you are moving. Texas law!
				</p>
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

export default Screen4;

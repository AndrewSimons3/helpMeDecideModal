import { useState } from 'react';
import classes from './Main.module.css';
import HelpMeChoose from './HelpMeChoose';

function Main() {
	const [toggleModal, setToggleModal] = useState(false);

	const updateShowModal = () => {
		setToggleModal(true);
	};
	const updateHideModal = () => {
		setToggleModal(false);
	};

	return (
		<div>
			<ul className={classes['provider-list']}>
				<li>Electric</li>
				<li>Water</li>
				<li>Gas</li>
				<li>TV</li>
				<li>Internet</li>
			</ul>
			<button className={classes.navBtn} onClick={updateShowModal}>Help Me Decide</button>
      {toggleModal && <HelpMeChoose onClose={updateHideModal} />}
		</div>
	);
}

export default Main;

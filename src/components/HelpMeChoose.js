import React, { useState } from 'react';
import Modal from './UI/Modal';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import classes from './HelpMeChoose.module.css'

function HelpMeChoose(props) {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = 5;

	const getPrevious = () => {
		setCurrentPage(currentPage - 1);
	};
	const getNext = () => {
		setCurrentPage(currentPage + 1);
	};
	console.log(currentPage);

	return (
		<Modal onClose={props.onClose}>
			{currentPage === 1 && (
				<Screen1 curPage={currentPage} totalPages={totalPages} />
			)}
			{currentPage === 2 && (
				<Screen2 curPage={currentPage} totalPages={totalPages} />
			)}
			{currentPage === 3 && (
				<Screen3 curPage={currentPage} totalPages={totalPages} />
			)}
			{currentPage === 4 && (
				<Screen4 curPage={currentPage} totalPages={totalPages} />
			)}
			{currentPage === 5 && (
				<Screen5 curPage={currentPage} totalPages={totalPages} />
			)}
			{currentPage !== 1 && (
				<button className={classes.navBtn} onClick={getPrevious}>
					Previous
				</button>
			)}
			{currentPage !== 5 && (
				<button className={classes.navBtn} onClick={getNext}>
					Next
				</button>
			)}
		</Modal>
	);
}

export default HelpMeChoose;

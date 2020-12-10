import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
} from '@material-ui/core';

const DialogCard = ({ data, open, close }) => {
	console.log(data);

	return (
		<Dialog open={open} onClose={close}>
			<DialogTitle>{data && data.name}</DialogTitle>
			<DialogContent dividers></DialogContent>
			<DialogActions>
				<Button>Adoptar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogCard;

import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

import SelectInformationComponent from '../components/SelectInformationComponent';
import CardsGroup from '../components/CardsGroup';

const NewFriend = () => {
	const classes = useStyles();

	return (
		<Box component='section' className={classes.root}>
			<SelectInformationComponent />
			<CardsGroup />
		</Box>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: theme.spacing(0),
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(0, 3),
			},
		},
	})
);

export default NewFriend;

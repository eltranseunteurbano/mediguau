import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Box, Collapse } from '@material-ui/core';

import SelectInformationComponent from '../components/SelectInformationComponent';
import CardsGroup from '../components/CardsGroup';

import { useMain } from '../hooks';

const NewFriend = () => {
	const classes = useStyles();
	
	const { isSearched } = useMain();
	return (
		<Box component='section' className={classes.root}>
			<SelectInformationComponent />
			<Collapse in={isSearched} className={classes.collapseGroup}>
				<CardsGroup />
			</Collapse>
		</Box>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			minHeight: 'calc(100vh - 80PX	)',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			padding: theme.spacing(0),
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(0, 3),
			},
		},
		collapseGroup: {
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '80%'
			},
		}
	})
);

export default NewFriend;

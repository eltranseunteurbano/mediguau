import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Box, Tabs, Tab, Typography } from '@material-ui/core';

import InputAvatarList from './InputAvatarList';

import { useTypeOfData } from '../hooks';

const SelectInformationComponent = () => {
	const classes = useStyles();

	const { isFriendSelected, setIsFriendSelected } = useTypeOfData();

	return (
		<Box component='main' className={classes.root}>
			<img
				src={process.env.PUBLIC_URL + './img/runDog.svg'}
				alt='El firulais'
				className={classes.img}
			/>
			<Box component='article' className={classes.data}>
				<Typography
					component='p'
					align='center'
					variant='subtitle1'
					className={classes.dataText}
				>
					¿Que estás buscando?
				</Typography>
				<Tabs
					value={isFriendSelected}
					centered
					textColor='primary'
					indicatorColor='primary'
					className={classes.tabButtonsGroup}
					onChange={(e, value) => setIsFriendSelected(value)}
				>
					<Tab label='Nuevo amigo' className={classes.tabButton} />
					<Tab label='Nuevo dueño' className={classes.tabButton} />
				</Tabs>
				<InputAvatarList open={isFriendSelected !== null} />
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			minHeight: 'calc(100vh - 80px)',
			overflow: 'hidden',
			width: '100%',
			[theme.breakpoints.up('md')]: {
				flexDirection: 'row-reverse',
			},
		},
		img: {
			width: 'max-content',
			maxHeight: 200,
			marginRight: theme.spacing(-15),
			[theme.breakpoints.up('sm')]: {
				marginRight: theme.spacing(0),
			},
		},
		data: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '90%',
			[theme.breakpoints.up('md')]: {
				width: 'auto',
			},
		},
		dataText: {
			fontWeight: 'bold',
			opacity: 0.6,
		},
		tabButtonsGroup: {
			width: '100%',
			marginBottom: `${theme.spacing(4)}px`,
		},
		tabButton: {
			width: '50%',
		},
	})
);

export default SelectInformationComponent;

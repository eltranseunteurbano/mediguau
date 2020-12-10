import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import {
	Paper,
	Typography,
	Box,
	Grid,
	CircularProgress,
} from '@material-ui/core';

import { useMain } from '../hooks';

const DogCard = (props) => {
	const classes = useStyles();
	const { name, similitud } = props;

	const {
		userSelected,
		isFriendSearching,
		getPersonData,
		getPerroData,
		similitudPersonaPerros,
	} = useMain();
	const [item, setItem] = useState({});

	useEffect(() => {
		if (isFriendSearching === 0) {
			setItem(getPersonData(name));
		} else {
			setItem(getPerroData(name));
		}
	}, [userSelected, isFriendSearching, similitudPersonaPerros]);

	return (
		<Paper className={classes.root} elevation={3}>
			<Box className={classes.header}>
				<Typography className={classes.title}>{item && item.name}</Typography>
				{isFriendSearching > 0 && (
					<Typography className={classes.subttile}>
						{Math.floor(Math.random() * (6 - 1)) + 1} años
					</Typography>
				)}
			</Box>
			<Box className={classes.container}>
				<img
					src={
						isFriendSearching === 0
							? process.env.PUBLIC_URL + '/personas/' + name + '.jpg'
							: isFriendSearching === 1
							? process.env.PUBLIC_URL + '/perros/' + name + '.jpg'
							: isFriendSearching === 2
							? process.env.PUBLIC_URL + '/perros/' + name + '.jpg'
							: ''
					}
					alt={name}
					className={classes.img}
				/>
				<Grid container className={classes.grid}>
					<Grid
						item
						xs={6}
						className={classes.gridItem}
						style={{ marginBottom: 24 }}
					>
						<Box
							className={classes.gridItemContent}
							style={{ backgroundColor: '#fff' }}
						>
							{item && item.animo ? (
								isFriendSearching === 0 ? (
									<img
										className={classes.gridItemContentImg}
										src={
											process.env.PUBLIC_URL +
											'/data/animo/personas/' +
											item.animo[0] +
											'.png'
										}
										alt='animo'
									/>
								) : (
									<img
										className={classes.gridItemContentImg}
										src={
											process.env.PUBLIC_URL +
											'/data/animo/perros/' +
											item.animo[0] +
											'.png'
										}
										alt='animo'
									/>
								)
							) : (
								''
							)}
						</Box>
						<Typography className={classes.titleCards}>Ánimo</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						className={classes.gridItem}
						style={{ marginBottom: 24 }}
					>
						<Box className={classes.gridItemContent}>
							<img
								className={classes.gridItemContentImg}
								src={process.env.PUBLIC_URL + '/img/bocado.svg'}
								alt='Bocado'
							/>
						</Box>
						<Typography className={classes.titleCards}>Bocado</Typography>
					</Grid>
					<Grid item xs={6} className={classes.gridItem}>
						<Box className={classes.gridItemContent}>
							<img
								className={classes.gridItemContentImg}
								src={process.env.PUBLIC_URL + '/img/paseo.svg'}
								alt='Paseo'
							/>
						</Box>
						<Typography className={classes.titleCards}>Paseo</Typography>
					</Grid>
					<Grid item xs={6} className={classes.gridItem}>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
							alignItems='center'
							style={{ height: '100%' }}
						>
							<Box
								position='relative'
								display='inline-flex'
								justifyContent='center'
								alignItems='center'
								style={{ height: '50px' }}
							>
								<CircularProgress
									variant='determinate'
									value={Math.round(similitud * 100)}
								/>
								<Box
									top={0}
									left={0}
									bottom={0}
									right={0}
									position='absolute'
									display='flex'
									alignItems='center'
									justifyContent='center'
								>
									<Typography
										variant='caption'
										component='div'
										className={classes.progress}
									>{`${Math.round(similitud * 100)}%`}</Typography>
								</Box>
							</Box>
							<Typography className={classes.titleCards}>Afinidad</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
			padding: theme.spacing(2),
			boxSizing: 'border-box',
			cursor: 'pointer',
			boxShadow:
				'0px 3px 3px -2px rgba(179,146,220,1), 0px 3px 4px 0px rgba(179,146,220, 0.24), 0px 1px 8px 0px rgba(179,146,220,0.12)',
			[theme.breakpoints.up('md')]: {},
			'&:hover': {
				boxShadow:
					'0px 10px 5px -5px rgba(179,146,220,0.2), 8px 8px 7px 0px rgba(179,146,220, 0.14), 0px 20px 20px 0px rgba(179,146,220,0.12)',
			},
		},
		header: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
			marginBottom: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'column',
				alignItems: 'flex-start',
			},
			[theme.breakpoints.up('md')]: {
				flexDirection: 'row',
				alignItems: 'center',
			},
		},
		title: {
			fontWeight: 'bold',
			color: '#384D61',
			fontSize: '1.3rem',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			maxWidth: '75%',
		},
		titleCards: {
			fontWeight: 'bold',
			color: '#384D61',
			fontSize: '1rem',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		progress: {
			color: '#384D61',
			fontSize: '0.8rem',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		subtitle: {
			color: '#384D61',
			opacity: 0.6,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		container: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			columnGap: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'column',
			},
			[theme.breakpoints.up('md')]: {
				flexDirection: 'row',
			},
		},
		img: {
			width: '100%',
			maxWidth: '60%',
			marginBottom: theme.spacing(0),
			[theme.breakpoints.up('sm')]: {
				maxWidth: '100%',
				marginBottom: theme.spacing(2),
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: '60%',
			},
		},
		grid: {},
		gridItem: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		gridItemContent: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#E0E0E0',
			borderRadius: 50,
			width: 50,
			height: 50,
		},
		gridItemContentImg: {
			width: '70%',
		},
	})
);

export default DogCard;

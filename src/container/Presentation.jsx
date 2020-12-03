import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Presentation = () => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Box className={classes.root} component='main'>
			<img
				className={classes.img}
				src={process.env.PUBLIC_URL + '/img/presentation.svg'}
				alt='Imagen de inicio'
			/>
			<Box className={classes.data}>
				<Typography
					className={classes.title}
					component='h1'
					variant='h1'
					color='primary'
				>
					Encuentra a tu
				</Typography>
				<Typography
					className={classes.title}
					component='h1'
					variant='h1'
					color='secondary'
					style={{ marginBottom: '24px' }}
				>
					mejor amigo
				</Typography>
				<Typography className={classes.text} component='p' variant='body1'>
					El lugar ideal para encontrar un nuevo sentido de felicidad, fuerza y
					armonía.{' '}
				</Typography>
				<Button
					className={classes.btn}
					variant='contained'
					color='primary'
					onClick={() => history.push('/new')}
				>
					Encuéntralo
				</Button>
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
			padding: theme.spacing(0, 3),
			[theme.breakpoints.up('md')]: {
				flexDirection: 'row-reverse',
			},
		},
		img: {
			width: '100%',
			maxWidth: 480,
		},
		data: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: '2.5rem',
			[theme.breakpoints.up('md')]: {
				alignItems: 'flex-start',
			},
		},
		title: {
			fontWeight: 'bold',
			fontSize: '2.5rem',
			textAlign: 'center',
			margin: theme.spacing(0),
			[theme.breakpoints.up('md')]: {
				fontSize: '3.5rem',
				textAlign: 'left',
			},
		},
		text: {
			textAlign: 'center',
			fontSize: '1.1rem',
			width: '100%',
			maxWidth: 440,
			marginBottom: theme.spacing(4),
			[theme.breakpoints.up('md')]: {
				fontSize: '1.3rem',
				textAlign: 'left',
			},
		},
		btn: {
			textTransform: 'none',
			color: theme.palette.common.white,
		},
	})
);

export default Presentation;

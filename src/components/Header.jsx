import React, { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Hidden, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { readRemoteFile } from 'react-papaparse';
import { useMain } from '../hooks';

const Header = () => {
	const classes = useStyles();
	const { loadDataCSV } = useMain();

	useEffect(() => {
		readRemoteFile(process.env.PUBLIC_URL + '/data/patalogias.csv', {
			complete: (results, file) => {
				loadDataCSV('patologias', results.data);
			},
		});
		readRemoteFile(process.env.PUBLIC_URL + '/data/perros.csv', {
			complete: (results, file) => {
				loadDataCSV('perros', results.data);
			},
		});
		readRemoteFile(process.env.PUBLIC_URL + '/data/personas.csv', {
			complete: (results, file) => {
				loadDataCSV('personas', results.data);
			},
		});
	}, []);

	return (
		<header className={classes.root}>
			<Link to='/'>
				<img
					className={classes.logo}
					src={process.env.PUBLIC_URL + 'logo.svg'}
					alt='logo'
				/>
			</Link>
			<img
				src={process.env.PUBLIC_URL + '/img/hueso.svg'}
				alt='hueso'
				className={classes.img}
			/>
			<nav className={classes.nav}>
				<Hidden mdUp>
					<IconButton color='primary'>
						<Menu />
					</IconButton>
				</Hidden>
				<Hidden smDown>
					<Typography
						component='p'
						align='center'
						variant='subtitle1'
						className={classes.navItem}
					>
						Cónocenos
					</Typography>
					<Typography
						component='p'
						align='center'
						variant='subtitle1'
						className={classes.navItem}
					>
						Locación
					</Typography>
					<Typography
						component='p'
						align='center'
						variant='subtitle1'
						className={classes.navItem}
					>
						Contáctanos
					</Typography>
				</Hidden>
			</nav>
		</header>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: theme.spacing(2),
			paddingRight: theme.spacing(1),
			boxSizing: 'border-box',
			position: 'sticky',
			zIndex: 3,
			top: 0,
			backgroundColor: '#ffffff',
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(2, 4),
			},
		},
		logo: {
			cursor: 'pointer',
			width: '100%',
			maxWidth: 220,
		},
		nav: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			columnGap: theme.spacing(3),
		},
		navItem: {
			cursor: 'pointer',
			padding: theme.spacing(0),
			transition: 'all .4s',
			textAlign: 'center',
			'&:hover': {
				fontWeight: 'bold',
				letterSpacing: theme.spacing(0.1),
				color: theme.palette.primary.main,
			},
		},
		img: {
			position: 'absolute',
			right: '50%',
			top: 0,
		},
	})
);

export default Header;

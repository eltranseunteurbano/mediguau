import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
	AppBar,
	IconButton,
	Typography,
	Toolbar,
	Box,
	Divider,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useMain } from '../hooks';

const DialogCard = ({ data, open, close }) => {
	const classes = useStyles();
	const {
		isFriendSearching,
		getPersonData,
		getPerroData,
		userSelected,
	} = useMain();
	const [item, setItem] = useState({});

	useEffect(() => {
		if (data) {
			if (isFriendSearching === 0) {
				setItem(getPersonData(data.name ? data.name : ''));
			} else {
				setItem(getPerroData(data.name ? data.name : ''));
			}
		}
	}, [userSelected, data]);

	return (
		<Dialog open={open} onClose={close} fullWidth maxWidth='md' scroll='paper'>
			<DialogTitle style={{ padding: 0 }}>
				<AppBar position='static' className={classes.appbar} color='secondary'>
					<Toolbar disableGutters className={classes.toolbar}>
						<Typography variant='h6'>{item.name}</Typography>
						<IconButton color='inherit' onClick={close}>
							<Close />
						</IconButton>
					</Toolbar>
				</AppBar>
			</DialogTitle>
			<DialogContent dividers className={classes.content}>
				<img
					src={
						isFriendSearching === 0
							? `${process.env.PUBLIC_URL}/personas/${item.name}.jpg`
							: isFriendSearching === 1
							? `${process.env.PUBLIC_URL}/perros/${item.name}.jpg`
							: isFriendSearching === 2
							? `${process.env.PUBLIC_URL}/perros/${item.name}.jpg`
							: ''
					}
					alt={item.name}
					className={classes.img}
				/>
				{isFriendSearching === 0 ? (
					<Box>
						<h1 className={classes.title}>{item.name}</h1>
						<Divider style={{ marginBottom: '36px' }} />
						<h2 className={classes.subtitle}> Descripción</h2>
						<p className={classes.text}>{item.description}</p>
					</Box>
				) : (
					<Box display='flex' flexDirection='column'>
						<h1 className={classes.title}>{item.name}</h1>
						<Divider style={{ marginBottom: '36px' }} />
						<h2 className={classes.subtitle}> Descripción</h2>
						<p className={classes.text}>{item.description}</p>
						<h2 className={classes.subtitle}> Tiempo de vida promedio</h2>
						<p className={classes.text}>{item.vida}</p>
						<h2 className={classes.subtitle}> Peso promedio</h2>
						<p className={classes.text}>{item.peso}</p>
						<h2 className={classes.subtitle}> Paseos</h2>
						<p className={classes.text}>{item.paseo ? item.paseo[1] : ''}</p>
						<h2 className={classes.subtitle}> Ánimo</h2>
						<p className={classes.text}>{item.animo ? item.animo[1] : ''}</p>
						<h2 className={classes.subtitle}> Atención</h2>
						<p className={classes.text}>{item.atencion}</p>
						<h2 className={classes.subtitle}> Energía</h2>
						<p className={classes.text}>{item.energia}</p>
						<h2 className={classes.subtitle}> Colores</h2>
						<p className={classes.text}>{item.colores}</p>
					</Box>
				)}
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' color='primary' onClick={close}>
					Cancelar
				</Button>
				<Button variant='contained' color='secondary' onClick={close}>
					{isFriendSearching === 0 ? 'Comunicar' : 'Adoptar'}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		appbar: {
			padding: theme.spacing(0, 2),
			boxSizing: 'border-box',
		},
		toolbar: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
			columnGap: theme.spacing(5),
			padding: theme.spacing(3),
		},
		img: {
			width: '100%',
			maxWidth: 500,
		},
		title: {
			margin: theme.spacing(2, 0),
			textAlign: 'center',
		},
		subtitle: {
			color: '#B392DC',
			fontSize: '1rem',
			marginBottom: theme.spacing(1),
		},
		text: {
			marginBottom: theme.spacing(2),
		},
	})
);

export default DialogCard;

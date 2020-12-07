import React, { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Box, Collapse, Grow, Avatar, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Pets, Person, LocalHospital } from '@material-ui/icons';

import { useMain } from '../hooks';

const InputAvatarList = ({ open }) => {
	const classes = useStyles();
	const { 
		isFriendSearching,
		userSelected,
		setUserSelected,
		personasData,
		patalogiasData,
		perrosData,
		toggleSearch,
	} = useMain();

	useEffect( () => {
		setUserSelected(null);
		toggleSearch(false);
	}, [isFriendSearching])

	return (
		<Collapse
			in={open}
			classes={{ wrapper: classes.wrapper, container: classes.wrapper }}
		>
			<Box className={classes.root}>
				{
					userSelected
					?
				<Avatar
					className={classes.avatar}
					alt='Avatar'
					src={isFriendSearching === 0 ? `${process.env.PUBLIC_URL}/perros/${userSelected[0]}.jpg`: isFriendSearching === 1 ? `${process.env.PUBLIC_URL}/personas/${userSelected[0]}.jpg` : ''}
				>
					<LocalHospital />
				</Avatar>
					: 
					<Avatar
					classes={{ colorDefault: classes.avatarBackground }}
					>
						{isFriendSearching === 0 ?
						<Pets />
						:
						isFriendSearching === 1 ?
						<Person />
						:
						<LocalHospital />
					}
					</Avatar>
				}
				<Autocomplete
					fullWidth
					options={isFriendSearching === 0 ? perrosData && perrosData.slice(1) : isFriendSearching === 1 ? personasData && personasData.slice(1) : patalogiasData && patalogiasData.slice(1)}
					getOptionLabel={(option) => option[0]}
					onChange={(e, value) => {setUserSelected(value); toggleSearch(false)}}
					clearOnBlur
					value={userSelected}
					renderInput={(params) => (
						<TextField
							{...params}
							label='Busca tu nombre'
							variant='outlined'
							color='primary'
						/>
					)}
				/>
			</Box>

			<Grow in={userSelected !== null}>
				<Button
				fullWidth
				color='primary'
				variant='contained'
				className={classes.btn}
				onClick={() => {toggleSearch(true)}}
				>
					Buscar
				</Button>
			</Grow>
		</Collapse>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 12,
			width: '100%',
			maxWidth: 1000,
			[theme.breakpoints.up('md')]: {
				gap: 24,
			},
		},
		wrapper: {
			width: '100%',
		},
		avatar: {
			width: theme.spacing(5),
			height: theme.spacing(5),
		},
		avatarBackground: {
			backgroundColor: theme.palette.secondary.main,
		},
		btn: {
			marginTop: theme.spacing(3),
			color:' #ffffff'
		}
	})
);

export default InputAvatarList;

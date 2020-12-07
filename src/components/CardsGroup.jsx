import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

import { useMain } from '../hooks'

import DogCard from './DogCard';

const CardsGroup = () => {
	const classes = useStyles();
	
	const { similitudPersonaPerros } = useMain();

  return (
    <Box className={classes.root}>

			{
				similitudPersonaPerros.slice(0,3).map( (card, i) =>( 
					<DogCard key={i} name={card.name}/>
				))
			}
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			padding: theme.spacing(2),
			boxSizing: 'border-box',
			gap: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row'
			},
			[theme.breakpoints.up('md')]: {
				gap: theme.spacing(4),
				padding: theme.spacing(4, 0),
			},
		},
	})
);

export default CardsGroup

import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

import DogCard from './DogCard';

const CardsGroup = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <DogCard />
      <DogCard />
      <DogCard />
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

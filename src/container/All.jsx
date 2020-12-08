import React from 'react'
import { useMain } from '../hooks';
import { Box, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core';
import DogCard from '../components/DogCard';

const All = () => {
  const { similitudPersonaPerros, isFriendSearching  } = useMain();
  const classes = useStyles();


  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Typography component='h1' className={classes.title}>Todos los resultados</Typography>
      <Grid container className={classes.root} spacing={3} direction="row" justifyContent="center">
				{
					similitudPersonaPerros.map( (card, i) =>( 
						<Grid item xs={12}  sm={4} className={classes.item} key={i}>
							<DogCard name={card.name} similitud={card.similitud}/>
						</Grid>
					))
				}
			</Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
			width: '90%',
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row'
			},
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(4, 0),
			},
		},
		item: {
      margin: 0,
      maxWidth: 420,
    },
    title: {
      fontWeight: 'bold',
      color: '#384D61',
      fontSize: '2rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: theme.spacing(3, 0),
    },
	})
);

export default All
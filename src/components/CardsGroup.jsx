import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core';
import { Grid, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { useMain } from '../hooks'

import DogCard from './DogCard';

const CardsGroup = () => {
	const classes = useStyles();
	const history = useHistory();
	
	const { similitudPersonaPerros, isFriendSearching } = useMain();
	console.log(similitudPersonaPerros)
  return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="Center" style={{marginBottom: 24, padding: 24, boxSizing: 'border-bpx'}}>
			<Grid container className={classes.root} direction="row" justify="center">
				{
					similitudPersonaPerros.slice(0,isFriendSearching === 2 ? 2 : 3).map( (card, i) =>( 
						<Grid item xs={12}  sm={4} className={classes.item} key={i}>
							<DogCard name={card.name} similitud={card.similitud}/>
						</Grid>
					))
				}
			</Grid>
			{
				isFriendSearching === 2 ?
				<Button color="secondary" variant='contained' fullWidth onClick={()=> history.push('/')}>Inscríbete para ver más</Button>
				:
				<Button color="secondary" variant='contained' fullWidth onClick={() => history.push('/all')}>Ver todos</Button>
			}
		</Box>
  )
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
			marginBottom: theme.spacing(3),
			gap: theme.spacing(3),
			flexWrap: 'noWrap',
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row'
			},
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(4, 0),
			},
		},
		item: {
			margin: 0
		}
	})
);

export default CardsGroup

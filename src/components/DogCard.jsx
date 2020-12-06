import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core';
import { Paper, Typography, Box,Grid } from '@material-ui/core';

const DogCard = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Box className={classes.header}>
        <Typography className={classes.title}>BullDog Frances</Typography>
        <Typography className={classes.subttile}>1 año</Typography>
      </Box>
      <Box className={classes.container}>
        <img src={process.env.PUBLIC_URL + '/perros/bulldog.png'} alt='image' className={classes.img} />
        <Grid container className={classes.grid}>
          <Grid item xs={6} className={classes.gridItem}>a</Grid>
          <Grid item xs={6} className={classes.gridItem}>a</Grid>
          <Grid item xs={6} className={classes.gridItem}>a</Grid>
          <Grid item xs={6} className={classes.gridItem}>a</Grid>
        </Grid>
      </Box>
    </Paper>
  )
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
      width: '100%',
      padding: theme.spacing(2),
      boxSizing: 'border-box',
			[theme.breakpoints.up('md')]: {
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
    },
    subtitle: {
      color: '#384D61',
      opacity: 0.6,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
				flexDirection: 'column'
      },
      [theme.breakpoints.up('md')]: {
				flexDirection: 'row'
			},
    },
    img: {
      width: '60%',
      marginBottom: theme.spacing(0),
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        width: '60%',
        marginBottom: theme.spacing(0),
			},
    },
    grid: {
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
	})
);


export default DogCard

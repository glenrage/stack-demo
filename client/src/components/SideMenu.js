import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles(() => ({
  root: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  text: {
    marginLeft: '10px',
  },
  sales: {
    marginLeft: '10px',
    fontWeight: 800,
  },
}));

const SideMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton className={classes.button}>
        <HomeIcon /> <Typography className={classes.text}>OVERVIEW</Typography>
      </IconButton>
      <IconButton className={classes.button} >
        <AssessmentIcon style={{ color: '#57b0ff' }} />
        <Typography className={classes.sales}>SALES</Typography>
      </IconButton>
    </div>
  );
};

export default SideMenu;

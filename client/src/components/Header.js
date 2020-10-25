import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../images/stackline.png';

const useStyles = makeStyles(() => ({
  image: {
    height: '30px',
    marginLeft: '25px',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffff',
    height: '60px',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/">
        <img src={logo} className={classes.image} alt="Logo" />
      </Link>
    </div>
  );
};

export default Header;

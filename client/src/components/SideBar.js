import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffff',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '300px',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    padding: '0px 40px 0px 40px',
    marginBottom: '10px',
  },
  subTitle: {
    fontSize: '13px',
    margin: '3px',
    color: '#ababab',
  },
  infoBox: {
    justifyContent: 'center',
  },
  image: {
    height: '250px',
    width: '230px',
    margin: '0px 3px 0px 30px',
  },
  chip: {
    borderRadius: '5px',
    border: '1px solid  #e3e3e3',
    padding: '3px 20px 3px 20px',
    margin: '3px 5px 3px 5px',
    fontSize: '12px',
  },
  tags: {
    margin: '10px 5px 10px 0px',
    width: '300px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
}));

const SideBar = (props) => {
  const productData = props.data;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.infoBox}>
        <img src={productData.image} className={classes.image} alt="product" />
        <Box className={classes.text}>
          <Typography variant="h6" className={classes.infoBox}>
            {productData.title}
          </Typography>
          <Typography className={classes.subTitle}>
            {productData.subtitle}
          </Typography>
        </Box>
        <Divider />
        <Box className={classes.tags}>
          {productData.tags.map(tag => (
            <Typography className={classes.chip} key={`item-${tag}`}>
              {tag}
            </Typography>
          ))}
        </Box>
        <Divider />
        <SideMenu />
      </Box>
    </div>
  );
};

SideBar.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default SideBar;

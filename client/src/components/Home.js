/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Chart from './Chart';
import SalesTable from './SalesTable';
import SideBar from './SideBar';
import Header from './Header';
import { fetchData } from '../actions';

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#f6f8fa',
  },
  main: {
    margin: '40px 10px 0px 20px',
    display: 'flex',
  },
  content: {
    margin: '10px',
  },
  table: {
    marginTop: '30px',
  },
});

class Home extends React.Component {
  async componentDidMount() {
    await this.props.fetchData();
  }

  render() {
    const { classes, productData } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.main}>
          <SideBar data={productData} />
          <Container className={classes.content} maxWidth="xl">
            <Chart className={classes.chart} data={productData} />
            <SalesTable className={classes.table} data={productData} />
          </Container>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const getProductData = Object.values(get(state, 'productReducer', {}));
  const [productData] = getProductData;
  return {
    productData,
  };
}

Home.propTypes = {
  fetchData: PropTypes.func,
  productData: PropTypes.shape({}),
  classes: PropTypes.shape({}).isRequired,
};

Home.defaultProps = {
  fetchData: null,
  productData: {
    image: '',
    sales: [],
    tags: [],
  },
};

export default connect(mapStateToProps, { fetchData })(withStyles(styles)(Home));

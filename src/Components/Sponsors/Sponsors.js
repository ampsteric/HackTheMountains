import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import balsa from '../../Assets/balsamiq-ss.svg'
import bank from '../../Assets/bank-g.svg'
import bubble from '../../Assets/bubble-g.svg'
import dig from '../../Assets/digital-g.svg'
import repl from'../../Assets/repl-g.svg'
import matic from'../../Assets/matic.svg'
import mlh from '../../Assets/mlh.svg'
import portis from  '../../Assets/portis.svg'
import dev from  '../../Assets/dev.svg'
import fold from  '../../Assets/fold.png'
import tezoz from  '../../Assets/tezos-g.png'
import wolf from  '../../Assets/wolf-g.png'
import echo from  '../../Assets/echoar-g.png'
import xyz from  '../../Assets/xyz-ss.png'
import bronze from  '../../Assets/bronze.png'
import iw from  '../../Assets/interviewcake-ss.webp'
import jet from  '../../Assets/jetbrains-b.png'
import mule from  '../../Assets/stickermule-ss.png'
import shaido from  '../../Assets/shashido-ss.jpeg'
import voice from  '../../Assets/voiceflow-ss.webp'
import './sponsors.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#212121',
    width: '100%',
    flexGrow: 1,
    color:'white'
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#212121">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Gold" {...a11yProps(0)} />
          <Tab label="Silver" {...a11yProps(1)} />
          <Tab label="Bronze" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <div className="conatiner"> */}
              {/* <div className="row" align='center'> */}
              <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <img style={{width:30}} src={dev}/>
        </Grid>
        <Grid item xs={3}>
        <img style={{width:30}} src={dev}/>
        </Grid>
        <Grid item xs={3}>
        <img style={{width:30}} src={dev}/>
        </Grid>
        <Grid item xs={3}>
        <img style={{width:30}} src={dev}/>
        </Grid>
      </Grid>
    </div>
                  {/* <div className="col-md-2">
                    <img style={{width:30}} src={dev}/>
                  </div>
                  <div className="col-md-2">
                    <img src={matic}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:100}} src={fold}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:100}} src={portis}/>
                  </div>
                  <div className="col-md-2">
                    <img  style={{width:100}} src={tezoz}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:100}} src={wolf}/>
                  </div> */}
                  
              {/* </div> */}
              <br/>
              {/* <div className="row" align='center'>
                  <div className="col-md-2 mx-2">
                    <img style={{width:150}}  src={xyz}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200}} src={mule}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200}}  src={shaido}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200}} src={voice}/>
                  </div>
                  <div className="col-md-2">
                    <img  style={{width:100}} src={balsa}/>
                  </div>
                  
              </div> */}
             
            
          {/* </div> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="container-fluid">
          <div className="row" align='center'>
                  <div className="col-md-2">
                    <img  src={balsa}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200}} src={bubble}/>
                  </div>
                  <div className="col-md-2">
                    <img src={bank}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200 , marginLeft:50}} src={echo}/>
                  </div>
                  <div className="col-md-2">
                    <img  style={{width:100}} src={dig}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:100}} src={wolf}/>
                  </div>
                  
              </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="container-fluid">
          <div className="row" align='center'>
                  <div className="col-md-2">
                    <img  style={{width:150}} src={bronze}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200}} src={iw}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:100}}  src={jet}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:200}} src={echo}/>
                  </div>
                  <div className="col-md-2">
                    <img  style={{width:100}} src={dig}/>
                  </div>
                  <div className="col-md-2">
                    <img style={{width:100}} src={wolf}/>
                  </div>
                  
              </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

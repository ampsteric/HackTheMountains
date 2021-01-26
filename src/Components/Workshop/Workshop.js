import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Img from '../../Assets/mlh.svg'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
  }));
  
export default function Workshop() {
    const classes = useStyles();

    return (
            <Box  style={{width:'229px' , height:'298px' , border:'1px solid grey' , borderRadius:10  , padding:' 20px 20px 50px 20px'}}>
                 <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <img src={Img} />
                                </Grid>
                                <Grid item xs={12}>
                                    <p style={{color:'white' , textAlign:'left' , fontSize:15}}>has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                                </Grid>
                                <Grid item xs={6} spacing={5}>
                                <Button style={{width:100 , fontSize:10}} variant="outlined" color="primary">
                                    Secondary
                                </Button>
                                </Grid>
                                <Grid item xs={6} spacing={5}>
                                <Button style={{width:100 , fontSize:10}} variant="outlined" color="primary">
                                    Secondary
                                </Button>
                                </Grid>
                            </Grid>
                </div>
            </Box>            
    )
}




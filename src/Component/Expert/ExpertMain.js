import React, { Component } from 'react'
import {
  
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import problem from '../../images/ProblemFarmer.jpg'
import slider5 from '../../images/slider5.jpg'
// import {browserHistory} from 'react-router'

import tractor from '../../images/Machinery/tractor1.jpg'
import pesticide from '../../images/Pesticide.jpeg'


export default class ExpertMain extends Component {
  
  render () {
    return (
      <div style={{backgroundColor: '#F5FCFF'}}>
      
        <Grid container sm>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 250,
                marginTop: 80
              }}
            >
              <CardMedia
                style={styles.media}
                image={problem}
                title='Farmer Problem'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
               Farmer Problem
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 10,
                marginTop: 80
              }}
            >
              <CardMedia
                style={styles.media}
                image={tractor}
                title='Machinery'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
                Machinery
                </Typography>

              </CardContent>
            </Card>
          </Grid>

        </Grid>
        <Grid container sm>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 250,
                marginTop: 10,
                marginBottom:15
                
              }}
            >
              <CardMedia
                style={styles.media}
                image={slider5}
                title='Fertilizer'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
                  Fertilizer's
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item sm>
            <Card
              style={{
                maxWidth: 345,
                marginLeft: 10,
                marginTop: 10,
                marginBottom:15
              }}
            >
              <CardMedia
                style={styles.media}
                image={pesticide}
                title='Pesticide'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  style={styles.textDec}
                  component='h2'
                >
                  Pesticide's
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  textDec: {
    textAlign: 'center'
  }
}

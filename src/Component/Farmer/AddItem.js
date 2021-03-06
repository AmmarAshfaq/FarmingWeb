import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'
import TableGrid from '../../Container/FarmerTableGrid'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import {
  getCropAddData,
  getProblemAddData
} from '../../Container/store/action/farmerAction'

import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Background from '../../images/theme.png'

import FarmerProblemData from '../AllData/FarmerProblemData'
import FarmerCropData from '../AllData/FarmerCropData'
class AddedItem extends Component {
 
  componentWillMount () {
    this.props.getAddedCrop(this.props.farmerId)
    this.props.getAddedProblem(this.props.farmerId)
  }
  // shouldComponentUpdate (nextProps) {
  //   // if(nextProps.cropList.problemArray.length > )
  //   console.log(nextProps.cropList.problemArray.length)
  //   console.log(this.props.cropList.problemArray.length)
  //   return nextProps.cropList.problemArray.length !== this.props.cropList.problemArray.length
  // }

  // componentWillReceiveProps (nextProps) {
  //   // console.log(nextProps.cropList.problemArray.length )
  //   // console.log(this.props.cropList.problemArray.length)
  //   if(nextProps.cropList.problemArray.length >this.props.cropList.problemArray.length){
  //     this.props.getAddedProblem(this.props.farmerId)
  //   }
  //   // this.setState({
  //   //   change: nextProps.cropList.problemArray.length > this.props.cropList.problemArray.length || nextProps.cropList.cropArray.length >this.props.cropList.cropArray.length
  //   // })
  // }
  render () {
 
    const { classes } = this.props
    return (
      <div style={{  flexGrow: 1, backgroundImage: `url(${Background})` }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={[classes.paper,classes.marginTopTable]}>
              {
                
                this.props.cropList.problemArray ? (
                <TableGrid
                  data={this.props.cropList.problemArray}
                  typeSelect='Problem'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.props.cropList.cropArray ? (
                <TableGrid
                  data={this.props.cropList.cropArray}
                  typeSelect='Crops'
                />
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    opacity: 0.9,

    // height:'auto'
  },
  marginTopTable:{
    marginTop: 100,

  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

function mapStateToProps (state) {
  return {
    farmerId: state.authReducer.currentUserData.user.id,
    cropList: state.farmerReducer,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getAddedCrop: obj => {
      dispatch(getCropAddData(obj))
    },
    getAddedProblem: obj => {
      dispatch(getProblemAddData(obj))
    }
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddedItem)

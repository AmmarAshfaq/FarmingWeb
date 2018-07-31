import React from 'react'
import { TextField,Button } from '@material-ui/core'
import { browserHistory } from 'react-router'
const style = {
  paperWapper: {
    width: '40%',
    margin: '100px auto 0px',
    border: '5px solid #fff',
    padding: '20px',
    backgroundColor: '#3f51b5', 
    color: '#fff',
    textAlign:'center',
    borderRadius: 10

  },
  textStyle: {
    width: '100%',
    color:'#fff'
  },
  button: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
    // backgroundColor:'#fff',
    color:'#fff',
    backgroundColor:'#000'
  },
  heading: {
    color: '#fff'
  }
}

class AddPesticide extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      image: [],
      description:''

    }
    console.log(this.props)
  }
  
  updateValue = (ev, target) => {
    let obj = {}
    obj[target] = ev.target.value
    this.setState(obj)
  }
  goTo = () => {
    browserHistory.push('/companymain')
  }

  render () {
    return (
      <div style={style.paperWapper}>
        <div>
          <h1 style={style.heading}>Add Pesticide</h1>
          <TextField
            onChange={event => {
              this.updateValue(event, 'name')
            }}
            value={this.state.name}
            style={style.textStyle}
            type='text'
            label='Pesticide Name'
          /><br />
           <TextField
            onChange={event => {
              this.updateValue(event, 'price')
            }}
            value={this.state.price}
            style={style.textStyle}
            type='text'
            label='Pesticide Price'
          /><br />
           <TextField
            onChange={event => {
              this.updateValue(event, 'image')
            }}
            value={this.state.image}
            style={style.textStyle}
            type='text'
            label='Add Image'
          /><br />
          <TextField
            onChange={event => {
              this.updateValue(event, 'decription')
            }}
            value={this.state.description}
            style={style.textStyle}
            type='text'
            label='Decription'
          /><br />
          
         
          <Button  onClick={this.goTo} style={style.button}>
            Add
          </Button>
          

        </div>
      </div>
    )
  }
}

export default AddPesticide

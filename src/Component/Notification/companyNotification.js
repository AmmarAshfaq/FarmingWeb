import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { browserHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import NotificationIcon from '../../images/Icons/notification.png'
import Tooltip from '@material-ui/core/Tooltip'
import { notificationDataDetail } from '../../Container/store/action/companyAction'

const ITEM_HEIGHT = 48

class NotificationDialog extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  handleSelect = (data) => {
    this.props.getResponse(data)
    browserHistory.push('/notificationpanel')
  }

  render () {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    // console.log(open)

    return (
      <div>
        <Tooltip title='Notifications'>
          <IconButton
            color='inherit'
            aria-label='More'
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup='true'
            onClick={this.handleClick}
            style={{ marginRight: 5, position: 'relative' }}
          >
            <img src={NotificationIcon} alt='loading' width='30' height='25' />
          </IconButton>
        </Tooltip>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 220
            }
          }}
          style={{ position: 'absolute', top: 45 }}
        >
          {this.props.companyNoti.map(option => (
            <MenuItem key={option} onClick={() => this.handleSelect(option)}>
              <Avatar
                alt='Remy Sharp'
                src={option.image_url}
                style={{ marginRight: 5 }}
              />
              {option.name
                ? option.name.substring(0, 15)
                : option.pesticideName
                  ? option.pesticideName.substring(0, 15)
                  : option.machineName
                    ? option.machineName.substring(0, 15)
                    : null}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getResponse: data => {
      dispatch(notificationDataDetail(data))
    }
  }
}
function mapStateToProps (state) {
  return {
    companyNoti: state.farmerReducer.companyNotification,
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationDialog)

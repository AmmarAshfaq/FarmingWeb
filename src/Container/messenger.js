import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import { Grid, Paper, Avatar } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import ImageIcon from '@material-ui/icons/Image'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import {
  ConnectWithSocket,
  getAllMessage
} from '../Container/store/action/messageAction'
import { compose } from 'redux'
import { connect } from 'react-redux'
import AllUserMessages from './AllUserMessages'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20
  },
  grow: {
    flexGrow: 1
  },

  title: {
    marginLeft: 285,
    fontSize: 28,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  avatarStyle: { width: 70, height: 70, margin: 5 },
  titleStyle: { flexDirection: 'column', flexGrow: 1 },
  paddingRemoveList: { padding: 0 },
  button: {
    margin: theme.spacing.unit,
    justifyContent: 'flex-end'
  }
})

class Messenger extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    message: ''
  }

  componentWillMount () {
    // console.log(window.document.referrer)
    // this.props.connectSocket()
    this.props.getUserMessage(this.props.userId)
  }
  // componentDidMount(){
  //   console.log(window.document.referrer)
  // }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  changeValue = (event, target) => {
    let obj = {}
    // console.log(event.target.value)
    obj[target] = event.target.value
    this.setState(obj)
  }

  sendMessage = () => {
    let obj = {
      receiverInfo: {
        receiverId: '5c0ed2ea757b4002b4d275dd',
        receiverType: 'Expert',
        receiverName: 'Expert'
      },
      senderInfo: {
        senderId: '5c0589af4d6c120884796498',
        senderName: 'Farmer',
        senderType: 'Farmer'
      },
      message: this.state.message,
      conversationId: '5c0589af4d6c1208847964985c0ed2ea757b4002b4d275dd'
    }
    // console.log(obj)
    this.props.connectSocket(obj)
  }
  render () {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    return (
      <div className={classes.root}>
        <AppBar position='static' style={{ backgroundColor: '#00806d' }}>
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <Typography
              className={classes.title}
              variant='h1'
              color='inherit'
              noWrap
            >
              MESSAGES
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup='true'
                onClick={this.handleProfileMenuOpen}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup='true'
                onClick={this.handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={3}>
            <Paper>
              <AllUserMessages />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper>
              <div
                style={{
                  height: 510,
                  backgroundColor: '#8080803b',
                  overflowY: 'auto'
                  // display:'flex'
                }}
                // keys={ind}
              >
                {this.props.msgList.map((item, ind) => (
                  <Fragment keys={ind}>
                    {item.senderInfo.senderId === this.props.userId ? (
                      <div
                        style={{
                          display: 'flex',
                          float: 'left',
                          width: '100%'
                        }}
                      >
                        <Avatar
                          alt='Ammar'
                          src={require('../images/ammar.jpg')}
                          className={classNames(
                            classes.avatar,
                            classes.bigAvatar
                          )}
                        />
                        <p style={{ height: '100%' }}>
                          <span
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                              marginBottom: 8,
                              height: '50%',
                              fontSize: 24
                            }}
                          >
                            {item.receiverInfo.receiverName}
                            {/* {console.log(item.receiverInfo.receiverName)} */}
                          </span>
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'flex-end',
                              height: '50%'
                            }}
                          >
                            {item.message}
                            {/* Walaikum Assalam! */}
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          float: 'right',
                          width: '100%',
                          // alignItems:'flex-end'
                          justifyContent: 'flex-end'
                        }}
                      >
                        <p style={{ height: '100%' }}>
                          <span
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              marginBottom: 8,
                              height: '50%',
                              fontSize: 24
                            }}
                          >
                            {item.receiverInfo.receiverName}
                            {/* {console.log(item.receiverInfo.receiverName)} */}
                          </span>
                          <span
                            style={{
                              display: 'flex',
                              // alignItems: 'flex-end',
                              justifyContent: 'flex-start',
                              height: '50%'
                            }}
                          >
                            {item.message}
                            {/* Walaikum Assalam! */}
                          </span>
                        </p>

                        <Avatar
                          alt='Ammar'
                          src={require('../images/mobeen.jpg')}
                          className={classNames(
                            classes.avatar,
                            classes.bigAvatar
                          )}
                        />
                      </div>
                    )}
                    {/* {item.receiverInfo.receiverId === this.props.userId ? (
                      <div style={{ display: 'flex', float: 'right' }}>
                        <p style={{ display: 'flex', alignItems: 'flex-end' }}>
                          {item.message}
                          Walaikum Assalam!
                        </p>

                        <Avatar
                          alt='Ammar'
                          src={require('../images/mobeen.jpg')}
                          className={classNames(
                            classes.avatar,
                            classes.bigAvatar
                          )}
                        />
                      </div>
                    ) : null} */}
                  </Fragment>
                ))}
              </div>

              <div
                style={{
                  height: 50,
                  backgroundColor: '#fff',
                  display: 'flex',
                  width: '100%'
                }}
              >
                <TextField
                  // id='standard-full-width'
                  style={{ width: '80%', marginBottom: 0 }}
                  placeholder='Enter Message ....'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={this.state.message}
                  onChange={event => this.changeValue(event, 'message')}
                />
                <Button
                  color='primary'
                  style={{ width: '20%', fontSize: '24px' }}
                  onClick={() => this.sendMessage()}
                >
                  SEND
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    connectSocket: data => {
      dispatch(ConnectWithSocket(data))
    },
    getUserMessage: data => {
      dispatch(getAllMessage(data))
    }
  }
}

function mapStateToProps (state) {
  return {
    userId: state.authReducer.currentUserData.user.id,
    msgList: state.messageReducer.allMsgList
  }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Messenger)

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { browserHistory } from 'react-router'

// const item = [
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Diseases Information Related To Agriculture',
//     img: 'http://www.ffc.com.pk/wp-content/uploads/Sona-Urea-P-1.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'Crop Rates,Purchase Crops,Sell Crops',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/FFC-DAP.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Technologies Related to Agriculture',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/FFC-SOP-1.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Fertilizers Related to Agriculture',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/MOP-Murate.jpg'
//   },
//   {
//     title: "Fertilizer's",
//     functionTitle1: 'All Types Of Pesticide Related to Agriculture',

//     img: 'http://www.ffc.com.pk/wp-content/uploads/Sona-Boron-1.jpg'
//   }
// ]

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 18
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    cursor: 'pointer'
  }
})

class ProblemSlider extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    // console.log(this.props.typeSelect)
  }
  goToProblem = () => {
    // console.log(data)
    this.props.typeSelect === 'Crop'
      ? browserHistory.push({
        pathname: '/ProductList',
        state: { typeCheck: this.props.typeSelect, display: this.props.info }
      })
      : browserHistory.push('/problemSolution')
  }
  render () {
    const { classes, typeSelect, info } = this.props
    // console.log(info.length)
    // console.log(typeSelect)
    // console.log(item)
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: info.length,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000
    }
    // const info = this.props.infoProblem;
    // info.concate(this.props.infoCrop)

    return (
      <Slider {...settings}>
        {this.props.info.map((data, ind) => (
          <Card className={classes.card} keys={ind}>
            <CardHeader title={data.title} />
            <CardMedia
              className={classes.media}
              image={data.image_url}
              title='Contemplative Reptile'
              onClick={this.goToProblem.bind(this)}
            />
            <CardContent>
              <Typography component='p'>{data.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    )
  }
}

export default withStyles(styles)(ProblemSlider)

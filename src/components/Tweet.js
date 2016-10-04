import React, {Component} from 'react'

const tweetStyle = {
  border:'solid 2px blue',
  width: '30%',
  margin: 'auto'
}


class Tweet extends Component {

  render() {
    return (
      <div
        style={tweetStyle}
      >
        <b>Name: </b>
        <i>{this.props.name}</i>
        <br/>
        <b>Tweet: </b>
        <i>{this.props.tweet}</i>
        <br/>
        <b>Date: </b>
        <i>{this.props.date}</i>
      </div>
    )
  }
}

// Tweet.propTypes = {
//   name: PropTypes.string.isRequired,
//   tweet: PropTypes.string.isRequired,
//   date: PropTypes.string
// }


export default Tweet

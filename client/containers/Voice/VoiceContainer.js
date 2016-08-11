import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const VoiceContainer = React.createClass({
  propTypes: {
    topicIdentifier: PropTypes.string.isRequired,
    voiceIdentifier: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'supporting']),
  },
  render () {
    return (
      <Card containerStyle={{marginBottom: '1rem'}}>
        <CardHeader title={this.props.username} />
        <CardTitle title={this.props.title} />
        <CardText>
          {this.props.text}
        </CardText>
        <CardActions>
          <FlatButton label='Action1' />
          <FlatButton label='Action2' />
        </CardActions>
      </Card>
    )
  },
})

function mapStateToProps ({voices}, props) {
  const {topicIdentifier, voiceIdentifier, timestamp, username, title, text, type} = voices[props.voiceIdentifier]
  return {
    topicIdentifier,
    voiceIdentifier,
    timestamp,
    username,
    title,
    text,
    type,
  }
}

export default connect(mapStateToProps)(VoiceContainer)

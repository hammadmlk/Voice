import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
         CreateTopicDialogContainer } from 'containers'
import { TopicPage } from 'components'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
        <Route path='authenticate' component={AuthenticateContainer} />
        <Route path='createTopic' component={CreateTopicDialogContainer} onEnter={checkAuth} />
        <Route path=':username/:slug' component={TopicPage} onEnter={checkAuth} />
      </Route>
    </Router>
  )
}

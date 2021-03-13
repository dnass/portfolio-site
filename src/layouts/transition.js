import React from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'

const timeout = 150

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0
  }
}

const PageTransition = ({ children, location: { pathname } }) => (
  <TransitionGroup>
    <Transition
      key={pathname}
      timeout={{
        enter: timeout,
        exit: timeout
      }}
    >
      {(status) => <div style={getTransitionStyles[status]}>{children}</div>}
    </Transition>
  </TransitionGroup>
)

export default PageTransition

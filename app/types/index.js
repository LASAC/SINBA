import PropTypes from 'prop-types'

const childrenComponent = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
])

export default {
  childrenComponent,
}

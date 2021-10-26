import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {

    return <p className={`alert alert-${props.variant} my-5 h4 text-center`} role="alert">
        {props.children}
    </p>
}

Message.propTypes = {
    variant: PropTypes.string.isRequired
}

Message.defaultProps = {
    variant: 'danger'
}

export default Message

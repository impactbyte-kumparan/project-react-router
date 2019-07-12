import React from 'react'

const Topic = ({ match }) => {
  return <h3>Requested Param: {match.params.id}</h3>
}

export default Topic

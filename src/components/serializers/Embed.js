import React from 'react'

export default ({node}) => <div dangerouslySetInnerHTML={{__html: node.code}} />

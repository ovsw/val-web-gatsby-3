import React from 'react'

const QuestionAnswer = ({question, answer, item}) => {
  return (
    <>
      <h4 className='' data-collapse-summary='' aria-expanded='false'>
        <a href='#' style={{color: 'white'}}>{item}. {question}</a>
      </h4>
      <div className='faequently-description' aria-hidden='true' style={{display: 'block'}} dangerouslySetInnerHTML={{__html: answer}} />
    </>
  )
}

export default QuestionAnswer

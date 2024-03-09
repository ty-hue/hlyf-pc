import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  return (
    <>
      <div>questionLayout</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default QuestionLayout

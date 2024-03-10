import { useTitle } from 'ahooks'
import React, { FC } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Empty } from 'antd'

const Star: FC = () => {
  const questionList = [
    {
      _id: '1',
      title: '问卷1',
      isStar: true,
      isPublished: true,
      answerCount: 35,
      createdAt: '2024-02-22 19:00:00',
    },
    {
      _id: '2',
      title: '问卷2',
      isStar: false,
      isPublished: true,
      answerCount: 24,
      createdAt: '2024-02-21 19:00:00',
    },
    {
      _id: '3',
      title: '问卷3',
      isStar: true,
      isPublished: false,
      answerCount: 56,
      createdAt: '2024-02-11 17:00:00',
    },
  ]
  useTitle('我的问卷-星标问卷')
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_header}>
        <div className={styles.wrap_header_left}>星标问卷</div>
        <div className={styles.wrap_header_right}>搜索框</div>
      </div>
      <div className={styles.wrap_content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map(item => {
            return <QuestionCard {...item} key={item._id} />
          })}
      </div>
      <div className={styles.wrap_footer}>分页</div>
    </div>
  )
}

export default Star

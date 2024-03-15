import { useTitle } from 'ahooks'
import React, { FC } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Empty, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadingQuestionList from '../../hooks/useLoadingQuestionList'
import ListPagination from '../../components/ListPagination'

const Star: FC = () => {
  useTitle('我的问卷-星标问卷')
  const { list, loading, total } = useLoadingQuestionList({ isStar: true })
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_header}>
        <div className={styles.wrap_header_left}>星标问卷</div>
        <div className={styles.wrap_header_right}>
          <ListSearch />
        </div>
      </div>
      {loading ? (
        <div>
          <Spin />
        </div>
      ) : (
        <div className={styles.wrap_content}>
          {list.length === 0 && <Empty description="暂无数据" />}
          {list.length > 0 &&
            list.map((item: any) => {
              return <QuestionCard {...item} key={item._id} />
            })}
        </div>
      )}
      <div className={styles.wrap_footer}>
        <ListPagination {...{ total }} />
      </div>
    </div>
  )
}

export default Star

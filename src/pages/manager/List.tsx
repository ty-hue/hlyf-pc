import { useTitle } from 'ahooks'
import React, { FC } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Empty, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadingQuestionList from '../../hooks/useLoadingQuestionList'
import ListPagination from '../../components/ListPagination'
// import { useSearchParams } from 'react-router-dom'

const List: FC = () => {
  useTitle('我的问卷-问卷列表')
  const { list, total, loading } = useLoadingQuestionList({})
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_header}>
        <div className={styles.wrap_header_left}>我的问卷</div>
        <div className={styles.wrap_header_right}>
          <ListSearch />
        </div>
      </div>
      {loading ? (
        <div>
          {' '}
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
      {/* <div className={styles.wrap_footer}>加载中.....</div> */}
      <div className={styles.wrap_footer}>
        <ListPagination {...{ total }} />
      </div>
    </div>
  )
}

export default List

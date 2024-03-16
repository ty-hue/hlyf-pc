import { useRequest, useTitle } from 'ahooks'
import React, { FC, useState } from 'react'
import styles from './common.module.scss'
import { Empty, Space, Table, Tag, Button, Modal, message, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadingQuestionList from '../../hooks/useLoadingQuestionList'
import ListPagination from '../../components/ListPagination'
import {
  RecoverManyQuestionListService,
  delManyQuestionListService,
} from '../../utils/api/question'

const { confirm } = Modal
const Trash: FC = () => {
  const { list, loading, total, refresh } = useLoadingQuestionList({ isDeleted: true })
  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublish: boolean) =>
        isPublish ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>,
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '发布时间',
      dataIndex: 'createdAt',
    },
  ]
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const del = () => {
    confirm({
      title: '您确定要删除所选问卷吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => delRun(),
    })
  }
  const delMany = async () => await delManyQuestionListService(selectedRowKeys as Array<string>)
  const { run: delRun } = useRequest(delMany, {
    manual: true,
    onSuccess: () => {
      message.success('删除成功')
      refresh()
      setSelectedRowKeys([])
    },
  })
  const { run: recover, loading: loadingBtn } = useRequest(
    async () => await RecoverManyQuestionListService(selectedRowKeys as Array<string>),
    {
      manual: true,
      onSuccess: () => {
        message.success('恢复成功')
        refresh()
        setSelectedRowKeys([])
      },
    }
  )

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  useTitle('我的问卷-回收站')
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_header}>
        <div className={styles.wrap_header_left}>回收站</div>
        <div className={styles.wrap_header_right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.wrap_content}>
        {loading && (
          <div>
            <Spin />
          </div>
        )}
        {list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 && (
          <>
            <div style={{ textAlign: 'left' }}>
              <Space>
                <Button
                  type="default"
                  onClick={recover}
                  loading={loadingBtn}
                  disabled={selectedRowKeys.length === 0}
                >
                  恢复
                </Button>
                <Button type="primary" onClick={del} disabled={selectedRowKeys.length === 0}>
                  彻底删除
                </Button>
              </Space>
            </div>
            <Table
              columns={tableColumns}
              dataSource={list}
              pagination={false}
              rowKey={q => q._id}
              rowSelection={rowSelection}
            />
          </>
        )}
      </div>

      <div className={styles.wrap_footer}>
        <ListPagination {...{ total }} />
      </div>
    </div>
  )
}

export default Trash

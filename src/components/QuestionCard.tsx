import {
  StarOutlined,
  EditOutlined,
  LineChartOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { Divider, Button, Space, Tag, Popconfirm, message, Modal } from 'antd'
import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './QuestionCard.module.scss'
import { useRequest } from 'ahooks'

import {
  createQuestionService,
  delQuestionListService,
  updateQuestionListService,
} from '../utils/api/question'

const { confirm } = Modal
type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props
  const [isStarState, setIsStarState] = useState(isStar)
  const [isDeleted, setIsDeleted] = useState(false)
  //更新星标
  const updateQuestionStar = async () => await updateQuestionListService(_id, { isStar: !isStar })
  const { run: updateStar } = useRequest(updateQuestionStar, {
    manual: true,
    onSuccess: () => {
      setIsStarState(!isStarState)
    },
  })
  const copyQuestion = async () => await createQuestionService()

  const { run: duplicate } = useRequest(copyQuestion, {
    manual: true,
    onSuccess: result => {
      if (result.id) {
        message.success('复制成功')
        nav(`/question/edit/${result.id}`)
      }
    },
  })
  //删除问卷
  const delQuestion = async () => await delQuestionListService(_id)
  const { run: deleleQustion } = useRequest(delQuestion, {
    manual: true,
    onSuccess: () => {
      message.success('删除成功')
      setIsDeleted(true)
    },
  })
  function del() {
    confirm({
      title: '确定要删除该问卷吗？',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      cancelText: '取消',
      onOk: () => deleleQustion(),
    })
  }
  if (isDeleted) return null
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_header}>
        <Link
          className={styles.wrap_header_left}
          to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
        >
          <Space>
            {isStar ? (
              <StarOutlined style={{ color: 'red' }} />
            ) : (
              <StarOutlined style={{ color: 'grey' }} />
            )}
            {title}
          </Space>
        </Link>
        <div className={styles.wrap_header_right}>
          <Space>
            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles.wrap_footer}>
        <div>
          <Button
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={() => nav(`/question/edit/${_id}`)}
            disabled={isPublished}
          >
            编辑问卷
          </Button>
          <Button
            type="text"
            icon={<LineChartOutlined />}
            size="small"
            onClick={() => nav(`/question/stat/${_id}`)}
          >
            问卷统计
          </Button>
        </div>
        <div>
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />} onClick={updateStar}>
              {isStarState ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷吗？"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>
            <Button type="text" size="small" icon={<DeleteOutlined />} onClick={del}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default QuestionCard

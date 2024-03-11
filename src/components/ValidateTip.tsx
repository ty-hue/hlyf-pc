import { InfoCircleOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import styles from './ValidateTip.module.scss'
type PropsType = {
  tip: string
}
const ValidateTip: FC<PropsType> = (props: PropsType) => {
  return (
    <span className={styles.container_wrap}>
      <InfoCircleOutlined />
      <span className={styles.wrap_tip}>{props.tip}</span>
    </span>
  )
}
export default ValidateTip

import { Input } from 'antd'
import React, { FC, useEffect, useState } from 'react'
const { Search } = Input
import type { ChangeEvent } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [value, setValue] = useState<string>('')

  // 搜索执行的回调
  const onSearch = (value: string) => {
    nav({
      pathname: pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  //输入内容的回调
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const newVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(newVal)
  }, [])
  return (
    <Search
      placeholder="输入关键字"
      value={value}
      allowClear
      onChange={onChange}
      onSearch={onSearch}
    />
  )
}

export default ListSearch

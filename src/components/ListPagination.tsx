import { Pagination } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { List_SEARCH_PARAM_CURRENT, List_SEARCH_PARAM_PAGE_SIZE } from '../constant'
type PropsType = {
  total: number
}
const ListPagination: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const onChange = (current: number, pageSize: number) => {
    setCurrent(current)
    setPageSize(pageSize)
    searchParams.set(List_SEARCH_PARAM_CURRENT, current.toString())
    searchParams.set(List_SEARCH_PARAM_PAGE_SIZE, pageSize.toString())
    nav({
      pathname: pathname,
      search: searchParams.toString(),
    })
  }
  const [searchParams] = useSearchParams()
  useEffect(() => {
    setCurrent(Number(searchParams.get(List_SEARCH_PARAM_CURRENT)) || 1)
    setPageSize(Number(searchParams.get(List_SEARCH_PARAM_PAGE_SIZE)) || 10)
  }, [searchParams])
  return (
    <div>
      <Pagination total={props.total} onChange={onChange} current={current} pageSize={pageSize} />
    </div>
  )
}
export default ListPagination

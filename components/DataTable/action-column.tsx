'use client'

import React from "react"
import EditBtn from "../ActionsButtons/EditBtn"
import DeleteBtn from "../ActionsButtons/DeleteBtn"
import ViewBtn from "../ActionsButtons/ViewBtn"
import { useRouter } from "next/navigation"

type ActionColumnProps<T> = {
  row: T
  id?: string | undefined
  endpoint?: string
  label?: string
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  onView?: (row: T) => void
  disableDelete?: boolean
}

export default function ActionColumn<T>({
  row,
  id = "",
  endpoint = "",
  label = "",
  onEdit,
  onDelete,
  onView,
  disableDelete = false
}: ActionColumnProps<T>) {
  const router = useRouter()

  const handleEdit = () => {
    if (onEdit) {
      onEdit(row)
    } else if (endpoint) {
      router.push(endpoint)
    }
  }

  const handleView = () => {
    if (onView) {
      onView(row)
    } else if (endpoint) {
      router.push(endpoint)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {onView && (<ViewBtn label={label} id={id} onView={handleView} />)}
      {onEdit && (<EditBtn label={label} id={id} onClick={handleEdit} />)}
      {onDelete && (<DeleteBtn label={label} onClick={() => onDelete(row)} disableDelete={disableDelete} />)}
    </div>
  )
}

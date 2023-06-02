import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeTabFilter } from '../../store/tabsSlice'

import classes from './tabs.module.scss'

export function Tabs() {
  const dispatch = useAppDispatch()
  const tabsState = useAppSelector((state) => state.tabs.tabs)

  const renderActive = () => tabsState.findIndex((elem) => elem === true)

  return (
    <div className={classes.tabs}>
      <button
        type="button"
        id="tabs-0"
        onClick={(e) => dispatch(changeTabFilter((e.target as Element).id))}
        className={renderActive() === 0 ? classes.active : ''}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        id="tabs-1"
        onClick={(e) => dispatch(changeTabFilter((e.target as Element).id))}
        className={renderActive() === 1 ? classes.active : ''}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        id="tabs-2"
        onClick={(e) => dispatch(changeTabFilter((e.target as Element).id))}
        className={renderActive() === 2 ? classes.active : ''}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

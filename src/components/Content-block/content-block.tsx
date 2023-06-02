import React from 'react'

import { Filter } from '../Filter/filter'
import { Tabs } from '../Tabs/tabs'
import { TicketsList } from '../Tickets-list/tickets-list'

import classes from './content-block.module.scss'

export function ContentBlock() {
  return (
    <div className={classes['content-block']}>
      <Filter />
      <div className={classes['tabs-tickets-wrapper']}>
        <Tabs />
        <TicketsList />
      </div>
    </div>
  )
}

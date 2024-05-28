import React from 'react'
import Eventist from '@/component/event-list'
import { getAllEvents } from '@/dummy-data'
import { getFeaturedEvent } from '@/dummy-data'
export default function Home() {
  const futerdEvent = getFeaturedEvent();
  return (
   <Eventist items={futerdEvent}/>
  )
}

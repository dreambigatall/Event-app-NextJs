
"use client"
import React from 'react'
import { getFilterdEvents } from '@/dummy-data';
import Eventist from '@/component/event-list';
import ResultsTitle from '@/component/ui/results-title';
export default function FilterdEventPage({params}) {
  
  
  const year = params.slug[0];
  const month = params.slug[1]
  const numYear= + year
  const numMonth =+month;
  

  if(
    isNaN(numYear)||
    isNaN(numMonth)||
    numYear > 2030||
    numMonth < 1 ||
    numMonth > 12
  ){
  return <h1 className='center'> invalid filter</h1>
  }
 
  const filteredEvent = getFilterdEvents({
    year:numYear,
    month:numMonth,
  })

  if(!filteredEvent || filteredEvent.length === 0){
    return <h1>no event found</h1>
  }
 const dates = new Date(numYear,numMonth-1)
  return (
   <div>
    <ResultsTitle date={dates} />
    <Eventist items={filteredEvent}/>
   </div>
  )
}

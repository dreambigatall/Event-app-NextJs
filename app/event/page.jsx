'use client'
import React from 'react'
import { getAllEvents } from '@/dummy-data'
import EventItem from '@/component/event-item';
import Eventist from '@/component/event-list';
import EventSearchPage from '@/component/event-search';
import { useRouter } from 'next/navigation';
export default function AllEventPage({params}) {
   const {datas} = params;
   const route = useRouter()
    const data = getAllEvents();
    function submitHandler(month,year){
      const fullPath= `/event/${year}/${month}`
      route.push(fullPath);

    }
  return (
    <div>
      
        
          <EventSearchPage onSearch={submitHandler}/>
           <Eventist items={data}/>
         
       
    
    </div>
  )
}

"use client"
import React from 'react';
import { Fragment } from 'react';
import { useRouter } from 'next/router'; // Import from 'next/router'
import { getEventId } from '@/dummy-data';
import EventSummary from '@/component/eventdetail/event-summary';
import EventLogistics from '@/component/eventdetail/event-logistics';
import EventContent from '@/component/eventdetail/event-content';

export default function EventDetailPage({params}) {
    
    const event =  getEventId(params.id) 

    return (
       <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>{event.description}</EventContent>
       </Fragment>
    );
}
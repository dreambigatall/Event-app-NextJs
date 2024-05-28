'use client'
import React, { useRef } from 'react'
import Button from './ui/button'
import classes from './event-serch.module.css'
export default function EventSearchPage(props) {
    
    const YearInputRef = useRef();
     const MonthInputRef = useRef();
    
    function submitHandler(event){
        event.preventDefault();
        const selectedYear= YearInputRef.current.value;
        const selectMont = MonthInputRef.current.value;
       props.onSearch(selectMont,selectedYear)

    }
    
  return (
    <form className={classes.form}onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='year'>year</label>
                <select id='year' ref={YearInputRef}>
                    <option value='2021'>2022</option>
                    <option value='2022'>2023</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor='month'>Month</label>
                <select id='month' ref={MonthInputRef}>
                    <option value='1'>January</option>
                    <option value='2'>Feb</option>
                    <option value='3'>March</option>
                    <option value='4'>Appril</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>Aug</option>
                    <option value='9'>Sep</option>
                    <option value='10'>Oct</option>
                    <option value='11'>Nov</option>
                    <option value='12'>December</option>
                    
                </select>
            </div>
        </div>
        <Button>Find Event</Button>
    </form>
  )
}

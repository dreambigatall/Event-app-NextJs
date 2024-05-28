import Link from 'next/link'
import React from 'react'
import classes from './main-header.module.css'
export default function MainHeader() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>NextEvents</Link>
        </div>
        <nav className={classes.navigation}>
           
                    <Link href="/event">All Event</Link>
               
        </nav>
    </header>
  )
}

import Link from "next/link";
import classes from './event-item.module.css'
import Button from "./ui/button";
export default function EventItem(props){

    const {title, image, date, location, id} = props;
    const humanreadebleDate = new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
   const exploreLink = `event/${id}`
    const formattedAdress = location.replace(',', '\n')
    return(
        <li className={classes.item}>
            <img src={'/' + image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summery}>
                    <h1>{title}</h1>
                </div>
                <div className={classes.date}>
                    <time>{humanreadebleDate}</time>
                </div>
                <div className={classes.address}>
                    {formattedAdress}
                </div>
                <div className={classes.actions}>
                   <Button link={exploreLink}>Explore Event</Button>
                </div>
            </div>
        </li>
    )
}
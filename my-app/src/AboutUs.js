import React from 'react'
import './About.css'
import img1 from './images/cat1.jpg';
import img2 from './images/cat2.jpg';
import img3 from './images/cat3.jpg';

function About() {
    return <div className='about'>
        <h1>About Us</h1>
        <p>Hello we are cats4lyf</p>
        <br/>
        <p>We're a cat sales agency that help businesses drive revenue with the use of inbound marketing and sales. Our team is made up of smart and talented people that are passionate about creating inbound sales results.</p>
        <br />
        <p>In 2021, we spoke to over 10,000 people from lifelong cat-lovers to potential owners.</p>
        <br />
        <p>Our vision is a world where every cat is treated with kindness and an understanding of it's needs. Yes we know its an ambitious vision. However, we truly believe it can be achieved because of our passion, our professional approach and simply because cats are among the UK's most popular companion pets.</p>
        <br />

                
</div>
}
function images() {
    return(
        <img src={img1} height={200} width={200} alt=''/>
    )
}

function images() {
    return (
        <img src={img2} height={200} width={200} alt='' />
    )
}

function images() {
    return (
        <img src={img3} height={200} width={200} alt='' />
    )
}
export default About

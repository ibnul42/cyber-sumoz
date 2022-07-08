import React from 'react'
import './faq.scss'
import faqImage from '../img/faq.svg'
import faqImage2 from '../img/faq2.svg'
import { useState } from 'react'

const faqs = [
    {
        title: 'This is a question 1',
        num: '01',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis suscipit illum, voluptatem deleniti voluptates odio expedita consequatur? Voluptate, earum quibusdam'
    },
    {
        title: 'This is a question 2',
        num: '02',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis suscipit illum, voluptatem deleniti voluptates odio expedita consequatur? Voluptate, earum quibusdam'
    },    
    {
        title: 'This is a question 3',
        num: '03',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis suscipit illum, voluptatem deleniti voluptates odio expedita consequatur? Voluptate, earum quibusdam'
    },    
    {
        title: 'This is a question 4',
        num: '04',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis suscipit illum, voluptatem deleniti voluptates odio expedita consequatur? Voluptate, earum quibusdam'
    },    
    {
        title: 'This is a question 5',
        num: '05',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis suscipit illum, voluptatem deleniti voluptates odio expedita consequatur? Voluptate, earum quibusdam'
    },
]

function Faq() {
    const [selected, setSelected] = useState(null)
  return (
    <div className='faq'>
        
        <div className="faq-content">
        {faqs.map((faq, index) => (
            <div key={index} className="single-content" onClick={() => setSelected(index)}>
                <img src={selected === index ? faqImage2 : faqImage} alt={faq.title} />
                <div className="text">
                    <p className="title">{faq.title}</p>
                    <p className="number">{faq.num}</p>
                </div>
            </div>  
        ))}
                          
        </div>
    </div>
  )
}

export default Faq
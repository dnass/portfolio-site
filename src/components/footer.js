import React, {Component} from 'react'
import Contact from './contact'
import data from '../data.json';

const createIcons = contacts => contacts.map(contact => {
  return <Contact icon={contact.icon} link={contact.link} alt={contact.alt} key={contact.alt}/>
});

class Footer extends Component {
  render() {
    return (
      <footer className='tc mb5'>
        {createIcons(data.contact_icons)}
      </footer>
    )
  }
}

export default Footer;

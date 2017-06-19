import React from 'react'
import FontAwesome from 'react-fontawesome';

function Contact(props) {
  return (
    <a className='mh3 black-80' href={props.link} target='_blank' rel="noopener noreferrer" alt={props.alt}>
      <FontAwesome
        className='grow'
        name={props.icon}
        size='3x'
      />
    </a>
  );
};

export default Contact;

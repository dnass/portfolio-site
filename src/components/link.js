import React from 'react'

function Link(props) {
  return (
    <article className='fl w-100 w-50-m  w-33-ns pa2-ns grow'>
      <a href={props.url} target='_blank' rel="noopener noreferrer" alt={props.title} className='ph2 ph0-ns pb3 link db'>
        <div className='aspect-ratio aspect-ratio--1x1'>
          <img src={`img/${props.img}`} alt={props.title} className='db bg-center cover aspect-ratio--object' />
        </div>
        <h3 className='f5 f4-ns mb0 black-80'>{props.title}</h3>
        <h3 className='f6 f5 fw4 mt2 black-60'>{props.pub}</h3>
      </a>
    </article>
  );
};

export default Link;

import React from 'react'

const Section = ({ title, children }) => (
  <section className="pt4 pb3 ph5-ns ph2 w-100">
    <h3 className="ttu tracked black-50 fw4 f4 tc mt3 mb4">{title}</h3>
    {Array.isArray(children)
      ? children.map((child, i) => (
          <div key={i} className="flex flex-column items-end-ns pb4">
            {child}
          </div>
        ))
      : children}
  </section>
)

export default Section

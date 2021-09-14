import React from 'react'

const HeaderAdmin = (props) => {
  return (
    <div
      className='p-col-12 p-shadow-2 docs'
      style={{backgroundColor: '#c7e8eb', padding: '10px',height:'120px'}}
    >
      <div className='content-section introduction bel-grid-container bel-space-top-m bel-space-bottom-m' />
      <div className='feature-intro '>
        <h3
          className='font-weight-bold'
          style={{marginTop: '0px'}}
        >
          {props.title}
        </h3>
        <p className='font-weight-bold'>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default HeaderAdmin

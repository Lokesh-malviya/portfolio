import React from 'react'

const Workitems = ({items}) => {
  const l = items.link;
  return (
    <div className="work__card" key={items.id}>
        <img src={items.image} alt="" className="work__img"/>
        <h3 className="work__title">{items.title}</h3>
        <a href={l} className="work__button">Demo <i className="bx bx-right-arrow-alt work__button-icon"></i></a>


    </div>
  )
}

export default Workitems

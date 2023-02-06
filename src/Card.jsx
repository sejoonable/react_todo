import React from 'react'

const Card = ({ item }) => {
    return (
      <div>
        <div className='jaemok'>
          {item.jaemok}
        </div>
        <div className='naeyong'>
          {item.naeyong}
        </div>
      </div>
    )
  }

export default Card
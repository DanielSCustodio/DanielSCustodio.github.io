import React from 'react'

const ButtonToggle = () => {
  return (
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite"
      style={ { backgroundColor: "orange" } }>
      <span className="navbar-toggler-icon"></span>
    </button>
  )
}

export default ButtonToggle
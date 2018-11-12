import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const ProjectCard = props => {
  const {name, description, image, link, github} = props
  let colWidth = name === 'Brand Identity' ? 'col-12' : 'col-12 col-md-4'
  return (
    <div className={`card-wrapper ${colWidth}`}>
      <div className="card">
        <div className="card-body-hover">
          <p className="card-text">{description}</p>
          {link && (
            <a href={link} target="_blank">
              <i className="fas fa-external-link-alt" />
            </a>
          )}
          <a href={github} target="_blank">
            <i className="fab fa-github" />
          </a>
        </div>
        {/*<img className="card-img-top" src={image} alt="Card image cap" />*/}
        <div
          className="card-img-top"
          style={{backgroundImage: `url(${image})`}}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

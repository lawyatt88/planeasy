import React, {Component} from 'react'
import {css} from 'glamor'

const Photostack = props => {
  const {imgUrl, border, rotateImg, background, height, width, margin} = props

  const imgStyle = {
    height,
    width,
    WebkitBoxShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)',
    MozBoxShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)',
    boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)',
    ...(rotateImg
      ? {
          WebkitTransform: `rotate(${rotateImg}deg)`,
          MozTransform: `rotate(${rotateImg}deg)`,
          OTransform: `rotate(${rotateImg}deg)`,
          msTransform: `rotate(${rotateImg}deg)`,
          transform: `rotate(${rotateImg}deg)`
        }
      : {})
  }

  const {rotate: rotateBackground, ...restBackgroundOps} = background

  const stack = css({
    float: 'left',
    position: 'relative',
    margin,
    ...imgStyle,
    '&::before': {
      content: `''`,
      position: 'absolute',
      zIndex: '-1',
      top: '-1px',
      left: '1px',
      ...imgStyle,
      WebkitTransform: `rotate(${rotateBackground}deg)`,
      MozTransform: `rotate(${rotateBackground}deg)`,
      OTransform: `rotate(${rotateBackground}deg)`,
      msTransform: `rotate(${rotateBackground}deg)`,
      transform: `rotate(${rotateBackground}deg)`,
      ...(Object.keys(restBackgroundOps).length
        ? {...restBackgroundOps}
        : {
            background: `url(${imgUrl}) no-repeat center`,
            backgroundSize: `cover`
          }),
      ...(border ? {border} : {})
    }
  })

  return (
    <div className={stack}>
      <div
        style={{
          width,
          height,
          background: `url(${imgUrl}) no-repeat center`,
          backgroundSize: `cover`
        }}
      />
    </div>
  )
}

export default Photostack

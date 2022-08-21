import React from 'react'

export default function Img(props) {
  return (

        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} className={props.className} />
  )
}

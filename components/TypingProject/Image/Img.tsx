import React from 'react'
type Props={src:string,alt:string,className:string}
export default function Img(props:Props) {
  return (

        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} className={props.className} />
  )
}
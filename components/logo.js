import Image from 'next/image'

function Logo({
	name,
	height,
	width,
	url
}) {
  return (
  	<img src={ `/${url}` } alt={name} width={ `${width}` } height={ `${height}` } />
  )
}

export default Logo

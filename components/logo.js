import Image from 'next/image'

function Logo({
	url,
	name
}) {
  return (
  	<img src={ `/${url}` } alt={name} width="24" height="24" />
  )
}

export default Logo

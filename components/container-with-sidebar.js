export default function ContainerWithSidebar({ children }) {
  return (
	  <div className="w-full max-w-8xl mx-auto">
	  	<div className="lg:flex">
	  		{children}
	  	</div>

	  </div>
  )
}

import Logo from './logo'

export default function PanelBtn({
title,
content,
url,
logo_name,
logo_url
}) {
  return (
    <a className="panel-btn" href={url}>
      <span className="img-wrap">
	      <Logo
	      name={logo_name}
	      url={logo_url}
        height={"24"}
        width={"24"}
	      />
      </span>
      <span className="content-wrap">
	      <strong>{title}</strong><br/>
	      <small>{content}</small>
      </span>
    </a>
  )
}

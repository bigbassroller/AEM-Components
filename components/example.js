import Link from 'next/link'
import MyTabs from '../components/tabs'

export default function Example({
title,
content,
properties,
markup,
json,
postcss,
css
}) {
  return (
    <div className="content-area">
      <div className="entry-header">
        <h2 className="entry-title">{title}</h2>
      </div>
      <div className="entry-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <MyTabs
        properties={properties}
        markup={markup}
        json={json}
        postcss={postcss}
        css={css}
      />
    </div>
  )
}

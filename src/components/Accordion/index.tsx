import { KeyboardEvent } from "react"
import { FC, useState } from "react"
import { Converter } from "showdown"
import { ReactComponent as DownArrow } from '../../assets/images/icons/down-arrow.svg'
import './index.scss'

function replaceURLs(message: string) {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.replace(urlRegex, function(url: string) {
    var hyperlink = url;
    if (!hyperlink.match('^https?://')) {
      hyperlink = 'http://' + hyperlink;
    }
    hyperlink = hyperlink.replace('</li>', '')

    return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + hyperlink + '</a>'
  })
}

const FAQDetails: FC<{ title: string, desc: string, githubURL?: string, usesMD?: boolean }> = ({ title, desc, githubURL, usesMD }) => {
  const [open, setOpen] = useState(false)
  const [openSemi, setOpenSemi] = useState(false)
  const [descr] = useState(desc.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL))

  let markdownConverter = new Converter()

  const handleOpen = (el: any) => {
    setOpenSemi(!openSemi)
    setOpen(!open)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault()
      handleOpen(e.target)
    }
  }

  return (
    <div className={'faqdetails'  + (openSemi ? ' open-semi' : '') + (open ? ' open' : '')}>
      <div className='faqdetails-header' tabIndex={0} onClick={handleOpen} onKeyDown={handleKeyDown}><span><DownArrow /></span>{title}</div>
      <div className={'faqdetails-content' + (usesMD ? ' md' : '')}>
        <div dangerouslySetInnerHTML={{__html: usesMD ? replaceURLs(markdownConverter.makeHtml(descr)) : replaceURLs(descr)}}></div>
        {githubURL && <a className='github-link' href={githubURL} target='_blank' rel="noreferrer">View on Github</a>}
      </div>
    </div>
  )
}

export default FAQDetails
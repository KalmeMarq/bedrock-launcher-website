import { KeyboardEvent } from "react"
import { FC, useState } from "react"
import { ReactComponent as DownArrow } from '../../assets/images/icons/down-arrow.svg'
import './index.scss'

const FAQDetails: FC<{ title: string, desc: string }> = ({ title, desc }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = (el: any) => {
    setOpen(!open)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault()
      setOpen(!open)
    }
  }

  return (
    <div className={'faqdetails' + (open ? ' open' : '')}>
      <div className='faqdetails-header' tabIndex={0} onClick={handleOpen} onKeyDown={handleKeyDown}><span><DownArrow /></span>{title}</div>
      <div className='faqdetails-content' dangerouslySetInnerHTML={{__html: desc.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL)}}></div>
    </div>
  )
}

export default FAQDetails
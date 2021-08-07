import { FC, useState } from "react"
import { ReactComponent as DownArrow } from '../../assets/images/down-arrow.svg'
import './index.scss'

const FAQDetails: FC<{ title: string, desc: string }> = ({ title, desc }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = (el: any) => {
    setOpen(!open)
  }

  return (
    <div className={'faqdetails' + (open ? ' open' : '')}>
      <div className='faqdetails-header' tabIndex={0} onClick={handleOpen}><span><DownArrow /></span>{title}</div>
      <div className='faqdetails-content' dangerouslySetInnerHTML={{__html: desc.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL)}}></div>
    </div>
  )
}

export default FAQDetails
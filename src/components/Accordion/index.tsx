import { KeyboardEvent } from "react"
import { FC, useState } from "react"
import { ReactComponent as DownArrow } from '../../assets/images/icons/down-arrow.svg'
import './index.scss'

const FAQDetails: FC<{ title: string, desc: string }> = ({ title, desc }) => {
  const [open, setOpen] = useState(false)
  const [openSemi, setOpenSemi] = useState(false)
  const [dheight, setDHeight] = useState(0)

  const calcHeight = (el: any) => {
    let height = el.offsetHeight
    setDHeight(height)
  }

  const handleOpen = (el: any) => {
    setOpenSemi(!openSemi)
    calcHeight(el)
    if(open) {
      setDHeight(0)
    }
    setTimeout(() => {
      setOpen(!open)
    }, 0)
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
      <div className='faqdetails-content' style={{ maxHeight: dheight }} dangerouslySetInnerHTML={{__html: desc.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL)}}></div>
    </div>
  )
}

export default FAQDetails
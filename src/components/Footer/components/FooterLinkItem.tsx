import { FC } from "react"

const FooterLinkItem: FC<{ goTo: string }> = ({ goTo, children }) => {
  return (
    <li className='footer-link'>
      <a href={goTo} rel="noreferrer" target='_blank'>{children}</a>
    </li>
  )
}

export default FooterLinkItem
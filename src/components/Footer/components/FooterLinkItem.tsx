import { FC } from "react"

const FooterLinkItem: FC<{ label: string, goTo: string }> = ({ label, goTo, children }) => {
  return (
    <li className='footer-link'>
      <a aria-label={label} href={goTo} rel="noreferrer" target='_blank'>{children}</a>
    </li>
  )
}

export default FooterLinkItem
import { FC } from "react"

interface IButtonText {
  type?: 'button' | 'link' | 'route-link',
  content?: 'text' | 'icon'
  width?: number,
  label?: string,
  to?: string,
  disabled?: boolean,
  className?: string | undefined,
  rel?: string | undefined,
  target?: React.HTMLAttributeAnchorTarget | undefined,
  onClick?: React.MouseEventHandler | undefined
}

const ButtonText: FC<IButtonText> = ({ content, width, type, label, to, children, target, rel, onClick, className, disabled }) => {
  return (
    <>
      { type === 'button'
        ? (
          <button aria-disabled={disabled ? 'true' : 'false'} className={'button-text' + (disabled ? ' disabled' : '') + ((content ?? 'text') === 'icon' ? ' button-icon' : '') + ' ' + (className ?? '')} aria-label={label} onClick={onClick} style={{ width: width ?? 'max-content' }}>
            {children}
          </button> 
        )
        : (
          <a href={to} className={'button-text' + ((content ?? 'text') === 'icon' ? ' button-icon' : '') + ' ' + (className ?? '')} rel={rel} target={target} aria-label={label} onClick={onClick} style={{ width: width ?? 'max-content' }}>
            {children}
          </a> 
        )
      }
    </>
  )
}

export default ButtonText

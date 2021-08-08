import './index.scss'
import img from '../../assets/images/logos/BedrockLauncher_128x128.png'
import { ReactComponent as FlaskIcon } from '../../assets/images/icons/flask.svg'
import { ReactComponent as DownloadIcon } from '../../assets/images/icons/download.svg'
import { ReactComponent as QuestionIcon } from '../../assets/images/icons/question.svg'
import { ReactComponent as HomeIcon } from '../../assets/images/icons/home.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg'
import { ReactComponent as HamburgerIcon } from '../../assets/images/icons/hamburger.svg'
import { ReactComponent as CancelIcon } from '../../assets/images/icons/cancel.svg'
import docs from '../../assets/images/icons/doc.png'
import { Link } from 'react-router-dom'
import NavbarLink from './components/NavbarLink'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const nref = useRef<HTMLDivElement>(null)
  const sref = useRef<HTMLDivElement>(null)

  const handleSideBarOpen = () => {
    if(searchOpen && !navOpen) setSearchOpen(false)
    setNavOpen(!navOpen)
  }

  const handleSearch = () => {
    if(!searchOpen && navOpen) setNavOpen(false)
    setSearchOpen(!searchOpen)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if(searchOpen && sref.current !== null) {
        if(!sref.current!.contains(e.target)) setSearchOpen(false)
      }

      if(navOpen && sref.current !== null) {
        if(!nref.current!.contains(e.target)) setNavOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [searchOpen, navOpen])

  return (
    <header className='navbar'>
      <div className='container'>
        <Link to='/' className='nav-logo' onClick={() => window.scroll(0, 0)}>
          <img src={img} alt="" />
          Bedrock Launcher
        </Link>
        <nav className='header-nav'>
          <ul>
            <NavbarLink goTo='/' icon={<HomeIcon aria-label='home icon' />} label='home'>Home</NavbarLink>
            <NavbarLink goTo='/docs' icon={docs} label='releases'>Docs</NavbarLink>
            <NavbarLink goTo='/releases' icon={<FlaskIcon aria-label='releases icon' />} label='releases'>Releases</NavbarLink>
            <NavbarLink goTo='/faq' icon={<QuestionIcon aria-label='faq icon' />} label='faq'>FAQ</NavbarLink>
            <NavbarLink
              goTo='/downloads'
              icon={<DownloadIcon aria-label='download icon' />}
              label='download'>Download
            </NavbarLink>
            
            <button className='search-btn' disabled onClick={handleSearch}>
              {!searchOpen ? <SearchIcon /> : <CancelIcon className='cancel-icon' />}
            </button>
            <button className='hamburger-btn' onClick={handleSideBarOpen}>
              {!navOpen ? <HamburgerIcon /> : <CancelIcon className='cancel-icon' />}
            </button>
            <div className={'searchsidebar' + (searchOpen ? ' open' : '')} ref={sref}>
              <div className="container">
                <input type="text" placeholder='search' />
                <div className='search-results'>

                </div>
              </div>
            </div>
            <div className={'sidebar' + (navOpen ? ' open' : '')} ref={nref}>
              <div className="container">
                <nav>
                  <h3>Categories</h3>
                  <h4>FAQ</h4>
                  <ul>
                    <li><Link to="/faq" onClick={handleSideBarOpen}>FAQ</Link></li>
                    <li><Link to='/faq/data' onClick={handleSideBarOpen}>Data FAQ</Link></li>
                    <li><Link to='/faq/accounts' onClick={handleSideBarOpen}>Accounts FAQ</Link></li>
                    <li><Link to='/faq/versions' onClick={handleSideBarOpen}>Versions FAQ</Link></li>
                    <li><Link to='/faq/misc' onClick={handleSideBarOpen}>Miscellaneous FAQ</Link></li>
                  </ul>
                  <h4>Releases</h4>
                  <ul>
                    <li><Link to="/releases" onClick={handleSideBarOpen}>Releases</Link></li>
                    <li><Link to='/releases/public' onClick={handleSideBarOpen}>Public Releases</Link></li>
                    <li><Link to='/releases/beta' onClick={handleSideBarOpen}>Beta Releases</Link></li>
                  </ul>
                  <h3>Docs</h3>
                  <h4>Dev Info</h4>
                  <ul>
                    <li><a target='_blank' rel="noreferrer" href='https://github.com/BedrockLauncher/BedrockLauncher/' onClick={handleSideBarOpen}>Launcher Source</a></li>
                    <li><a target='_blank' rel="noreferrer" href='https://github.com/KalmeMarq/bedrock-launcher-website' onClick={handleSideBarOpen}>Website Source</a></li>
                    <li><Link to='/docs/dev/compiling' onClick={handleSideBarOpen}>Compiling</Link></li>
                    <li><Link to='/docs/dev/contributing' onClick={handleSideBarOpen}>Contributing</Link></li>
                    <li><Link to='/docs/dev/dev-software-prerequisites' onClick={handleSideBarOpen}>Dev Software Pprerequisites</Link></li>
                    <li><Link to='/docs/dev/software-prerequisites' onClick={handleSideBarOpen}>Software Pprerequisites</Link></li>
                    <li><Link to='/docs/dev/hardware-prerequisites' onClick={handleSideBarOpen}>Hardware Pprerequisites</Link></li>
                  </ul>
                  <h4>Legal</h4>
                  <ul>
                    <li><Link to='/docs/legal/code-of-conduct' onClick={handleSideBarOpen}>Code of Conduct</Link></li>
                    <li><Link to='/docs/legal/disclaimers' onClick={handleSideBarOpen}>Disclaimers</Link></li>
                    <li><Link to='/docs/legal/license' onClick={handleSideBarOpen}>License</Link></li>
                  </ul>
                  <h3>Others</h3>
                  <ul>
                  <li><a rel="noreferrer" href='https://github.com/BedrockLauncher/BedrockLauncher.Installer/releases/latest/download/BedrockLauncher.Installer.exe' target='_blank'>Download Launcher</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

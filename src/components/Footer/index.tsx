import './index.scss'
import carjem from '../../assets/images/logos/CarJem_standalone.gif'
import coolAbhi from '../../assets/images/logos/CoolAbhi1290.png'
import FooterCardItem from './components/FooterCardItem'
import FooterLinkItem from './components/FooterLinkItem'

const index = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <hr />
        <nav>
          <ul>
            <FooterLinkItem goTo="https://github.com/BedrockLauncher/BedrockLauncher">
              Sources
            </FooterLinkItem>
            <FooterLinkItem goTo="https://github.com/BedrockLauncher/BedrockLauncher/blob/master/LICENSE.txt">
              License
            </FooterLinkItem>
            <FooterLinkItem goTo="https://github.com/BedrockLauncher/BedrockLauncher/releases">
              Releases
            </FooterLinkItem>
          </ul>
        </nav>
        <div className='footer-cards'>
          <FooterCardItem link='https://carjem.carrd.co/'icon={carjem} title='Carjem' description='Creator of Bedrock Launcher' />
          <FooterCardItem link='https://coolabhi1290.github.io/' icon={coolAbhi} title='CoolAbhi1290' description="Creator of Bedrock Launcher's Website" />
        </div>
        <span className='copyright'>&#169; Not associated or approved by Mojang</span>
      </div>
    </div>
  )
}

export default index

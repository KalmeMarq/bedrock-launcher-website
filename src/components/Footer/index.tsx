import './index.scss'
import carjem from '../../assets/images/logos/CarJem_standalone.gif'
import coolAbhi from '../../assets/images/logos/CoolAbhi1290.png'
import FooterCardItem from './components/FooterCardItem'
import FooterLinkItem from './components/FooterLinkItem'

const index = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <nav>
          <ul>
            <FooterLinkItem label='repo link' goTo="https://github.com/BedrockLauncher/BedrockLauncher">
              Sources
            </FooterLinkItem>
            <FooterLinkItem label='license link' goTo="https://github.com/BedrockLauncher/BedrockLauncher/blob/master/LICENSE.txt">
              License
            </FooterLinkItem>
            <FooterLinkItem label='releases link' goTo="https://github.com/BedrockLauncher/BedrockLauncher/releases">
              Releases
            </FooterLinkItem>
          </ul>
        </nav>
        <div className='footer-cards'>
          <FooterCardItem label='Carjem' link='https://carjem.carrd.co/'icon={carjem} title='Carjem' description='Creator of Bedrock Launcher' />
          <FooterCardItem label='CoolAbhi1290' link='https://coolabhi1290.github.io/' icon={coolAbhi} title='CoolAbhi1290' description="Creator of Bedrock Launcher's Website" />
        </div>
        <span className='copyright'>Carjem 2021 &#169; Not associated or approved by Mojang</span>
      </div>
    </div>
  )
}

export default index

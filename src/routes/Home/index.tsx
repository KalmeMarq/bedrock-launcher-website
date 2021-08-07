import './index.scss'
import logo from '../../assets/images/logos/logo.png'
import bg1 from '../../assets/images/banners/1.0_pocket_edition.jpg'
import bg2 from '../../assets/images/banners/1.08_cats_and_pandas.jpg'
import bg3 from '../../assets/images/banners/1.09_combat_update_java.jpg'
import bg4 from '../../assets/images/banners/1.11_exploration_update_java.jpg'
import bg5 from '../../assets/images/banners/1.12_world_of_color_update_java.jpg'
import bg6 from '../../assets/images/banners/1.13_technically_updated_java.jpg'
import bg7 from '../../assets/images/banners/1.13_update_aquatic.jpg'
import bg8 from '../../assets/images/banners/1.14_village_pillage_update.jpg'
import bg9 from '../../assets/images/banners/1.15_buzzy_bees_update.jpg'
import bg10 from '../../assets/images/banners/1.16_nether_update.jpg'
import bg11 from '../../assets/images/banners/bedrock_master.jpg'
import bg12 from '../../assets/images/banners/bedrock_standard.jpg'
import bg13 from '../../assets/images/banners/original_image.jpg'
import bg14 from '../../assets/images/banners/other_dungeons.jpg'
import ss0 from '../../assets/images/screenshots/home_tab.png'
import ss1 from '../../assets/images/screenshots/version_chooser_full.png'
import ss2 from '../../assets/images/screenshots/version_manager.png'
import ss3 from '../../assets/images/screenshots/general_settings_tab.png'
import ss4 from '../../assets/images/screenshots/themes.png'
import { useRef, useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/images/icons/blunt-arrow-down.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/images/icons/youtube.svg'
import { ReactComponent as DiscordIcon } from '../../assets/images/icons/discord.svg'

const Home = () => {
  const divRref = useRef<HTMLDivElement>(null);
  const bgs = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14]
  const [cover, setCover] = useState(Math.round(Math.random() * (bgs.length - 1)))
  const showSections = [
    {
      id: '89a37837',
      title: 'Versions',
      description: 'Get access to almost all versions and switch between them in an instant.',
      img: ss1
    },
    {
      id: '412b6f3d',
      title: 'Version Management',
      description: 'Add as many versions as you wish with ease!',
      img: ss2
    },
    {
      id: 'f36353e8',
      title: 'Settings',
      description: "Tweak every nook and cranny to your heart's content",
      img: ss3
    },
    {
      id: 'd59132d7',
      title: 'Themes',
      description: 'Your launcher, your theme!',
      img: ss4
    }
  ]

  /* 
  useEffect(() => {
    const timer = setInterval(() => {
      setCover((cover + 1) % bgs.length)
    }, 6900);
    return () => clearInterval(timer);
  }); */

  const handleScrollDown = () => {
    let off = divRref.current?.getBoundingClientRect().bottom ?? 100
    window.scroll(0, off - 100)
  }

  return (
    <>
      <div className='main-section' ref={divRref} style={{backgroundImage: 'url(' + bgs[cover] + ')'}}>
        <img src={logo} alt="" className='logo' />
        <h3>An unofficial Minecraft Bedrock for Windows 10 Launcher</h3>
      
        <div className='buttons-group0'>
          <a style={{ width: 160 }} href='https://github.com/BedrockLauncher/BedrockLauncher.Installer/releases/latest/download/BedrockLauncher.Installer.exe' className='button-text'>Download</a>
          <a style={{ width: 160 }} href='https://github.com/BedrockLauncher/BedrockLauncher' className='button-text'>Source</a>
          <a style={{ width: 160 }} href='https://www.paypal.com/donate/?cmd=_donations&business=RNZMRCMNX3SJY&currency_code=USD&source=url' className='button-text'>Donate</a>
        </div>
        <div className='buttons-group1'>
          <a href='https://twitter.com/carter5467_99' rel="noreferrer" target='_blank' className='button-text social'>
            <TwitterIcon />
          </a>
          <a href='https://www.youtube.com/channel/UC4-VHCZD7eLdxRr5aUXAQ5w' rel="noreferrer" target='_blank' className='button-text social'>
            <YoutubeIcon />
          </a>
          <a href='/' className='button-text social disabled' aria-disabled="true">
            <DiscordIcon />
          </a>
        </div>
        <div className='arrow-scroll'>
          <Arrow className='arrow-down' onClick={handleScrollDown} />
        </div>
      </div>
      <main className='home-show-sections'>
        <div className='container'>
          <section className='home-show-section'>
            <img src={ss0} alt="" />
          </section>
          {showSections.map((sec, i) => {
            return (
              <section className='home-show-section' key={sec.id}>
                { i % 2 === 0 ? (
                  <>
                    <div className='cont'>
                      <h3>{sec.title}</h3>
                      <p>{sec.description}</p>
                    </div>
                    <div className='img'>
                      <img src={sec.img} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className='img'>
                      <img src={sec.img} alt="" />
                    </div>
                    <div className='cont'>
                      <h3>{sec.title}</h3>
                      <p>{sec.description}</p>
                    </div>
                  </>
                )
                }
              </section>
            )
          })}
          <a style={{width: 'max-content'}} href="https://github.com/BedrockLauncher/BedrockLauncher" target='_blank' className='button-text being-built'>
            What's being built?
          </a>
        </div>
      </main>
    </>
  )
}

export default Home

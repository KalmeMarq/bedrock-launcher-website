import { useState, useEffect } from "react"
import GithubReleases from "../../util/GitHubReleases"
import './index.scss'
import Accordion from "../../components/Accordion"
import banner0 from '../../assets/images/banners/1.13_technically_updated_java.jpg'
import banner1 from '../../assets/images/banners/1.15_buzzy_bees_update.jpg'
import CategorySelection from "../../components/CategorySelection"

const ReleasesRoute = () => {
  const [releases, setReleases] = useState([] as GithubReleases[])
  const [betas, setBetas] = useState([] as GithubReleases[])

  document.title = 'Releases - Bedrock Launcher'

  useEffect(() => {
    let going = true
    fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases')
    .then(res => res.json())
    .then(data => {
      going && setBetas(data)
    })

    fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher/releases')
    .then(res => res.json())
    .then(data => {
      going && setReleases(data)
    })

    return () => { going = false }
  }, [])

  return (
    <div className='releases'>
      <section className='releases-section'>
        <h2>Releases</h2>
        <p>Version information for the Bedrock Launcher</p>
      </section>
      <main>
        <div className="container">
          <CategorySelection.Parent>
            <CategorySelection.Item to='/releases/public' bg={banner0} title='Public Releases' description='Releases that are safe for public usage' />
            <CategorySelection.Item to='/releases/beta' bg={banner1} title='Beta Releases' description='Releases that are work in progress' />
          </CategorySelection.Parent>
          <hr />
          {releases.map(rel => <Accordion key={rel.id} title={rel.name} desc={rel.body.replaceAll('\r\n', '<br />')} /> )}
          {betas.map(rel => <Accordion key={rel.id} title={rel.name} desc={rel.body.replaceAll('\r\n', '<br />')} /> )}
        </div>
      </main>
    </div>
  )
}

export default ReleasesRoute

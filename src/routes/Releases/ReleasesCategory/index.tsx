import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Accordion from '../../../components/Accordion'
import GithubReleases from '../../../util/GitHubReleases'
import '../index.scss'
import { ReleasesCategories } from '../../../util/Releases'
import GoBack from '../../../components/GoBack'

const ReleasesCategory = () => {
  const history = useHistory()
  const { category } = useParams<{ category: string }>()
  const [releases, setReleases] = useState([] as GithubReleases[])
  const categoryInfo = ReleasesCategories.find(rel => rel.name === category)
  if(!categoryInfo) history.push('/releases')
  else {
    document.title = (categoryInfo.title ?? '') + ' - Bedrock Launcher'
  }

  useEffect(() => {
    let going = true
    if(category !== 'beta' && category !== 'public') return () => { going = false }

    fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher' + (category === 'beta' ? '-Beta' : '') + '/releases')
    .then(res => res.json())
    .then(data => {
      going && setReleases(data)
    })

    return () => { going = false }
  })

  return (
    <div className='releases'>
      <section className='releases-section' style={{ backgroundImage: 'url(' + categoryInfo?.img.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL) + ')'  }}>
        <h2>{categoryInfo?.title}</h2>
        <p>{categoryInfo?.description}</p>
      </section>
      <div className='container'>
        <main>
          <div className="container">
            <GoBack />
            {releases.map(rel =>  <Accordion key={rel.id} title={rel.name} desc={rel.body.replaceAll('\r\n', '<br />')} /> )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ReleasesCategory

import { useState, useEffect } from "react"
import GithubReleases from "../../util/GitHubReleases"
import './index.scss'
import { ReactComponent as TickIcon } from '../../assets/images/icons/tick.svg'

const ReleasesRoute = () => {
  const [filter, setFilter] = useState('')
  const [showReleases, setShowReleases] = useState(true)
  const [showBetas, setShowBetas] = useState(true)
  const [releases, setReleases] = useState([] as GithubReleases[])
  const [betas, setBetas] = useState([] as GithubReleases[])

  useEffect(() => {
    fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases')
    .then(res => res.json())
    .then(data => {
      setBetas(data)
    })

    fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher/releases')
    .then(res => res.json())
    .then(data => {
      setReleases(data)
    })
  }, [])
  
  return (
    <div className='releases'>
      <section className='releases-section'>
        <h2>Releases</h2>
        <p>Version information for the Bedrock Launcher</p>
      </section>
      <div className='container'>
        <main>
          <div className='filter-form'>
            <input type="text" className='vsearch' placeholder='Search' onChange={(e) => {
              setFilter(e.target.value)
            }} />
            <div className='checkbox'>
              <label>
                <input type="checkbox" checked={showReleases} onChange={() => setShowReleases(!showReleases)} />
                <div className='fake-checkbox'>
                  <TickIcon className='check' />
                </div>
                <span>Releases</span>
              </label>
            </div>
            <div className='checkbox'>
              <label>
                <input type="checkbox" checked={showBetas} onChange={() => setShowBetas(!showBetas)} />
                <div className='fake-checkbox'>
                  <TickIcon className='check' />
                </div>
                <span>Betas</span>
              </label>
            </div>
          </div>
          {releases.map(rel => {
            if(showReleases && (filter === '' || rel.name.toLowerCase().includes(filter.toLowerCase()))) {
              return (
                <details key={rel.id}>
                  <summary>{rel.name}</summary>
                  <div className='details-body' dangerouslySetInnerHTML={{__html: rel.body.replaceAll('\r\n', '<br />')}}>
                  </div>
                </details>
              )
            } else {
              return <></>
            }
          })}
          {betas.map(rel => {
             if(showBetas && (filter === '' || rel.name.toLowerCase().includes(filter.toLowerCase()))) {
              return (
                <details key={rel.id}>
                  <summary>{rel.name}</summary>
                  <div className='details-body' dangerouslySetInnerHTML={{__html: rel.body.replaceAll('\r\n', '<br />')}}>
                  </div>
                </details>
              )
            } else {
              return <></>
            }
          })}
        </main>
      </div>
    </div>
  )
}

export default ReleasesRoute

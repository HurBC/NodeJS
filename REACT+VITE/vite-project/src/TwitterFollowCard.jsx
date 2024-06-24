import { useState } from "react"

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
 
  const imageSrc = `https://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-h'>
        <img
          className='tw-followCard-avatar'
          alt="pfp"
          src={imageSrc}
        />
        <div className='tw-followCard-info'>
          {children}
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
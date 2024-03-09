import viteLogo from '/vite.svg'
import {useState} from 'react'

export function Card ({initialFollowing = false, children, buttonElement, userName = 'myUndefined', name, formatUserName}) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing)
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  const image = `${viteLogo}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const classFollowing = isFollowing ? 'tw-followCard-button active' : 'tw-followCard-button'
  

  return (
    <article className="tw-followCard">
      <header className='tw-followCard-header'>
        <img className="tw-followCard-avatar" src={image} alt="" />
        <div className="tw-followCard-info">
          <strong>{children} {name}</strong>
          {buttonElement}
          <span className="tw-followCard-infoUser">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={classFollowing} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}
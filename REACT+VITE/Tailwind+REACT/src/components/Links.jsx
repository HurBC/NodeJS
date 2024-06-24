export const Link = ({ link, content }) => {
  return (
    <a href={`#${link}`}>{content}</a>
  )
}

export const IconLink = ({ link, icon, S }) => {
 return (
  <a href={`#${link}`}><ion-icon name={icon} style={S}></ion-icon></a>
 )
}

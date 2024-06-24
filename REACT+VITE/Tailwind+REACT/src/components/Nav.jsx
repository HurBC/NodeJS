import { SectionsLinks } from "../mocks/SectionsLinks"
import { iconsStyles } from "../const/Styles"
import { IconLink, Link } from "./Links"

export const Nav = () => {

  const Links = () => {
    return (
      SectionsLinks.map((link) => (
        (link.icon) ? 
        <IconLink key={link.id} link={link.link} icon={link.icon} S={iconsStyles.headerIcons} /> :
        <Link key={link.id} link={link.link} content={link.content} />
      ))
    )
  }

  return (
    <nav className="w-1/2 h-17 flex gap-11 items-center text-orange-100">
      <ul className="flex gap-9 items-center">
        <Links />
      </ul>
      <ion-icon name="person" style={iconsStyles.headerIcons}></ion-icon>
    </nav>
  )
}


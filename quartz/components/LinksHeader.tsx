import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksheader.scss"

export default (() => {
  function LinksHeader() {
    return (

    <div>
      <nav class="links-header">
          <ul>
            <li><a href="https://treycole.me">Home</a></li>
            <li> <a href="https://treycole.me/publications.html">Publications</a></li>
            <li><a href="https://notes.treycole.me">Notes</a></li>
          </ul>
        </nav>
      </div>
    )
  }

  return LinksHeader
}) satisfies QuartzComponentConstructor
import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksheader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <a href="https://treycole.me">Home</a>
          </span>
          <span>
            <a href="https://treycole.me/publications.html">Publications</a>
          </span>
          <span>
            <a href="https://treycole.me/cv.pdf">CV</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
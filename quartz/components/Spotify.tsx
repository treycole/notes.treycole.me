import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Spotify() {
    return (
        <div className="spotify-container">
        <iframe
            style="border-radius:12px" 
            src="https://open.spotify.com/embed/playlist/4lFWNtfl9IO26GMaRG9A9m?utm_source=generator&theme=0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            width="100%"
            height="352"
        />
        </div>
    )
  }

  return Spotify
}) satisfies QuartzComponentConstructor
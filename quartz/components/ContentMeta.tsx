import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

const TimeMeta = ({ value }: { value: Date }) => (
  <time dateTime={value.toISOString()} title={value.toDateString()}>
    {value.toLocaleDateString()}
  </time>
)

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      // if (fileData.dates) {
      //   segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      // }

      if (fileData.dates) {
        if (fileData.dates.created) {
          segments.push(
            <span>
              🚀 Launched <TimeMeta value={fileData.dates.created} />
            </span>,
          )
        }

        if (fileData.dates.modified) {
          segments.push(
            <span>
              🪄 Refined <TimeMeta value={fileData.dates.modified} />
            </span>,
          )
        }
      }
      

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>⏳ {displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

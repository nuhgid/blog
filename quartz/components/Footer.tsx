import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    const linkEntries = Object.entries(links)
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {linkEntries.map(([text, link], index) => (
            <>
              <a href={link}>{text}</a>
              {index < linkEntries.length - 1 && " | "}
            </>
          ))}
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

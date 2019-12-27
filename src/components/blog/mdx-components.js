import classnames from "classnames"

const CodeBlock = ({ children, filename }) => {
  return (
    <div
      className={classnames(
        "my-10 pb-4 overflow-x-auto border border-solitude-214 rounded",
        {
          "pt-12": filename,
          "pt-4": !filename,
        },
      )}
    >
      {filename && (
        <div className="absolute top-0 left-0 flex items-center w-full h-10 px-4">
          <div className="flex items-center">
            <svg width="54" height="14">
              <use xlinkHref="/assets/icons.svg#control" />
            </svg>
          </div>
          <div className="flex-1 text-center">{filename}</div>
        </div>
      )}
      <code className="block float-left min-w-full px-4">{children}</code>
    </div>
  )
}

const Image = ({ title, ...props }) => {
  return (
    <figure className="flex flex-col items-center max-w-full py-4">
      <img {...props} />
      {title && (
        <figcaption className="px-2 mt-1 text-xs tracking-wide text-center tablet:text-sm desktop:text-base">
          {title}
        </figcaption>
      )}
    </figure>
  )
}

const Paragraph = ({ children, ...props }) => {
  // This will prevent the validateDOM error
  // e.g. <figure> insise <p> tag
  if (children.type && children.type.displayName) {
    return children
  }

  return <p {...props}>{children}</p>
}

const Link = ({ children, ...props }) => {
  if (children.length < 1) {
    return null
  }

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline text-ocean"
    >
      {children}
    </a>
  )
}

export default {
  code: CodeBlock,
  img: Image,
  p: Paragraph,
  a: Link,
}

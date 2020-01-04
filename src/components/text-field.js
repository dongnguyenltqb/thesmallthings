import classnames from "classnames"

export default function TextField({
  multiline,
  label,
  helpText,
  errorText,
  className,
  ...props
}) {
  const hasError = Boolean(errorText)
  return (
    <label className={classnames("block", className)}>
      {label && <div className="font-semibold">{label}</div>}
      {helpText && (
        <div className="text-xs tracking-wide text-dark-gray">{helpText}</div>
      )}
      {!multiline && (
        <input
          type="text"
          {...props}
          className={classnames(
            "w-full h-10 px-3 mt-1 text-base border focus:border-black",
            {
              "border-mid-gray": !hasError,
              "border-error": hasError,
            },
          )}
        />
      )}
      {multiline && (
        <textarea
          rows="8"
          {...props}
          className={classnames(
            "w-full px-3 py-2 mt-1 text-base border focus:border-black",
            {
              "border-mid-gray": !hasError,
              "border-error": hasError,
            },
          )}
        />
      )}
      {hasError && (
        <div className="mt-px text-xs tracking-wide text-error">
          {errorText}
        </div>
      )}
    </label>
  )
}

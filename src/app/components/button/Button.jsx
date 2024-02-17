export default function Button({ onClick, className, disabled, type, children, style, ariaLabel }) {

    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}
            type={type}
            style={style}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
}
import styles from './styles.module.css';

export default function Button({ onClick, className, disabled, type, children, style, ariaLabel }) {

    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
            style={style}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
}
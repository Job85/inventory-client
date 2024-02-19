import styles from './styles.module.css';

export default function Button({ onClick, className, disabled, type, children, style, ariaLabel }) {

    const buttonClasses = `${styles.button} ${className || ''}`;

    return (
        <button
            className={buttonClasses.trim()}
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
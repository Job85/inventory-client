import styles from './styles.module.css';

export default function LabelInput({ type, name, name2, placeholder, defaultValue, onChange }) {

    return (
        <>
            <label
                className={styles.label}
                htmlFor={name}>{name2}</label>
            <input
                className={styles.input}
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </>
    )
}
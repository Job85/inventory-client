import styles from './styles.module.css';

export default function LabelInput({ type, name, name2, placeholder, defaultValue, onChange }) {

    return (
        <>
            <label htmlFor={name}>{name2}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </>
    )
}
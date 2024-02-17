import styles from './styles.module.css';

export default function LabelInput({ type, name, placeholder, defaultValue, onChange }) {

    return (
        <>
            <label htmlFor={name}>{name}</label>
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
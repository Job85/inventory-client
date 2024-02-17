import styles from './styles.module.css';

export default function LabelInput({ type, name }) {

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input
                type={type}
                name={name}
            />
        </>
    )
}
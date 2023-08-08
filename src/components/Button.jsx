export const BUTTON_TYPES = {
    inverted: "inverted",
    google: "google",
    bordered: "bordered"
}

const Button = ({ children, variant = "" }) => {
    return (
        <>
            <button className={ `button ${variant ? `button--${variant}` : ''}` }>
                { children }
            </button>
        </>
    )
}

export default Button



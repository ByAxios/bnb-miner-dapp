const Button = ( {text, isDisabled,customClass} ) => {
    return (
        <button disabled = { isDisabled ? "disabled" : ""} className={isDisabled ? `bg-gray-500 text-gray-300 p-2 px-3 rounded-md ${customClass}` : `bg-blue-500 text-white p-2 px-3 rounded-md ${customClass}`}> { text } </button>
     );
}

export default Button;
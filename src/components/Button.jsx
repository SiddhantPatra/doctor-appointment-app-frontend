import PropTypes from 'prop-types';

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-green-500 text-white border-[#007E85]"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  Button.propTypes = {
    label: PropTypes.any,
    iconURL: PropTypes.any, // Add this line for iconURL prop validation
    backgroundColor: PropTypes.any,
    textColor: PropTypes.any,
    borderColor: PropTypes.any,
    fullWidth: PropTypes.any,
  };
  export default Button;

/* 
import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md' */

export const Input = ({ label, type, id, name, value, placeholder, checked, isRequired }) => {
  return <div>
    {type === 'radio' || type === 'checkbox' ?
      <>
        <input className="radioAndCheckBox" type={type} id={id} name={name} value={value} placeholder={placeholder} checked={checked} required={isRequired} />
        <label htmlFor={name}>{label}</label>
      </> : <>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} required={isRequired} />
      </>
    }

  </div>
}

/* const InputError = () => {
  return <div>error</div>
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
} */
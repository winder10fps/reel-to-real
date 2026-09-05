import { type ReactNode, type SubmitEventHandler } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import './Form.css'

type Props = {
  onSubmit: SubmitEventHandler<HTMLFormElement>;
  children: ReactNode;
  buttonText: string;
  errorMessage: string | undefined;
}

export const Form = ({ onSubmit, children, buttonText, errorMessage }: Props) => {
  return (
    <form onSubmit={onSubmit} className='form'>
      {errorMessage &&
        <span className='error-message' >{errorMessage}</span>
      }
      {children}
      <Button type="submit">{buttonText}</Button>
    </form>
  )
}
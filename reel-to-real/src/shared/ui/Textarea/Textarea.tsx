import React from 'react'
import './Textarea.css'

type Props = {
  placeholder: string
  className?: string,
  errored?: boolean,
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const Textarea = ({
  placeholder,
  className,
  errored,
  value,
  onChange
}: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      className={[
        'textarea',
        className,
        errored && 'errored'
      ].filter(Boolean).join(' ')}
      value={value}
      onChange={onChange}
      
    >

    </textarea>
  )
}
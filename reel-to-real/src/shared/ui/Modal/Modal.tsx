import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  withBackButton?: boolean;
  onBackButtonClick?: () => void
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  withBackButton,
  onBackButtonClick
}: Props) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <div className="modal-header__buttons">
            {withBackButton &&
              <button className='modal-back-button' onClick={onBackButtonClick}>
                <img src="/icons/arrow-small-left.svg" alt="<" />
              </button>
            }
            <button className='modal-close-button' onClick={onClose}>
              <img src="/icons/close.svg" alt="×" />
            </button>
          </div>
          <h3 className="modal-header__title">{title}</h3>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )

}
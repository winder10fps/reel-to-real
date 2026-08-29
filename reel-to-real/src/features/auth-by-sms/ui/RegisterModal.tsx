import { Modal } from '@/shared/ui'
import { useState } from 'react'
import StepFormRegister from './StepFormRegister/StepFormRegister'
import StepFormConfirm from './StepFormConfirm/StepFormConfirm'

type Props = {
  isOpen: boolean,
  onClose: () => void
}

export const RegisterModal = ({ isOpen, onClose }: Props) => {
  const [step, setStep] = useState<'register' | 'confirm'>('register')
  const [userPhone, setUserPhone] = useState('')

  const handleRegisterSuccess = (phone: string) => {
    setUserPhone(phone)
    setStep('confirm')
  }

  const handleConfirmSuccess = () => {
    setStep('register')
    onClose();
  }

  const handleClose = () => {
    setStep('register')
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={step === 'register' ? 'Вход или регистрация' : 'Подтверждение'}
      withBackButton={step === 'confirm'}
      onBackButtonClick={() => setStep('register')}
    >
      {step === 'register' &&
        <StepFormRegister onSuccess={handleRegisterSuccess} />
      }
      {step === 'confirm' &&
        <StepFormConfirm phone={userPhone} onSuccess={handleConfirmSuccess} />
      }
    </Modal>
  )
}
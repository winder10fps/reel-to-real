import { useAuth } from "@/entities/user"
import { Button, Modal } from "@/shared/ui"
import './ProfileModal.css'

type Props = {
  isOpen: boolean,
  onClose: () => void
}

export const ProfileModal = ({ isOpen, onClose }: Props) => {
  const { user, setUser } = useAuth()

  const logoutButtonClick = () => {
    if (confirm('Вы уверены, что хотите выйти из аккаунта?')) {
      setUser(null)
      onClose()
    }
  }

  if (!user) return
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Кабинет'>
      <div className='profile-modal__container'>
        <div className="profile-modal__phone">Аккаунт: {user.phone}</div>
        <Button stretched size='small' onClick={logoutButtonClick}>
          Выйти
        </Button>
      </div>
    </Modal>
  )
}
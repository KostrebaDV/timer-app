import { FC } from 'react';
import ClassNames from 'classnames';
import styles from './styles/index.module.scss';

export const ModalComponent:FC<{isOpen: boolean}> = (
  {
    children,
    isOpen,
    handelModalClose
  }
) => {
  const modalStyles = ClassNames(
    styles.modal,
    {
      [styles.modal_open]: isOpen,
    }
  )

  const overlayModalStyles = ClassNames(
    styles.modalOverlay,
    {
      [styles.modalOverlay_open]: isOpen,
    }
  )

  return (
    <div>
      <div className={modalStyles}>
        {children}
      </div>
      <div className={overlayModalStyles} onClick={handelModalClose}></div>
    </div>
  )
}
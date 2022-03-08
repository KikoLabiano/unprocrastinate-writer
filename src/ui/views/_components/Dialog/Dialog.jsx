import styles from './Dialog.module.scss';

const Dialog = ({
  children,
  contentClassName = '',
  closeIcon = true,
  closeOnEscape = true,
  modalContentClassName = '',
  footer,
  onClose,
  title = '',
  visible = false
}) => {
  return (
    <div className={`${styles.modal} ${visible ? styles.visible : ''}`}>
      <div className={`${modalContentClassName} ${styles.modalContent}`}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          {closeIcon && (
            <div className={styles.close}>
              <span onClick={onClose}>&times;</span>
            </div>
          )}
        </div>
        <div className={`${contentClassName} ${styles.modalBody}`}>{children}</div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export { Dialog };

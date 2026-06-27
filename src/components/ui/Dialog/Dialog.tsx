import { X } from 'lucide-react'
import { useEffect } from 'react'

import IconButton from '../IconButton'
import LinkButton from '../LinkButton'

interface DialogProps {
  open: boolean
  title: string
  children: React.ReactNode

  confirmText?: string
  cancelText?: string

  onConfirm?: () => void
  onCancel?: () => void
}

export default function Dialog ({
  open,
  title,
  children,
  confirmText = 'Continue',
  cancelText = 'Cancel',
  onConfirm,
  onCancel
}: DialogProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className='dialog-backdrop' onClick={onCancel}>
      <div className='dialog' onClick={e => e.stopPropagation()}>
        <div className='dialog-header'>
          <h2>{title}</h2>

          <IconButton
            variant='text'
            onClick={onCancel}
            aria-label='Close dialog'
          >
            <X size={20} />
          </IconButton>
        </div>

        <div className='dialog-content'>{children}</div>

        <div className='dialog-actions'>
          <LinkButton variant='text' className='button-padding-large' onClick={onCancel}>
            {cancelText}
          </LinkButton>

          <LinkButton className='button-padding-large' onClick={onConfirm}>{confirmText}</LinkButton>
        </div>
      </div>
    </div>
  )
}

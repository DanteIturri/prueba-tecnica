import { FC } from 'react'

export const CardLoading:FC = () => {
  return (
    <>
    <div className="card-loading">
              {/* Indicador de Carga */}
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text short"></div>
    </div>
    </>
  )
}

import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import sortRightIcon from '../public/icons/sort-right.svg'
import sortLeftIcon from '../public/icons/sort-left.svg'
import styles from '../styles/ImageSlider.module.css'

export default function ImageSlider ({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const applySlideScroll = () => {
    const previewsContainer = document.querySelector(`.${styles.previewsContainer}`)
    const preview = document.querySelector(`.${styles.preview}`)

    previewsContainer.scrollTo({
      left: preview.offsetWidth * currentImageIndex,
      behavior: 'smooth'
    })
  }
  const handleNextImage = () => {
    applySlideScroll()
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }
  const handlePrevImage = () => {
    applySlideScroll()
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    )
  }

  const handleModalClick = (e) => {
    setShowModal(false)
  }

  return (
      <div className={styles.container}>
        <button className={`${styles.navigationButton} ${styles.prevButton}`} onClick={handlePrevImage}>
          <Image src={sortLeftIcon} alt="prev" width={20} height={20} />
        </button>
        <ul className={styles.previewsContainer}>
          {images.map((imageUrl, index) => (
            <li key={imageUrl} className={styles.preview}>
              <Image
                className={`${styles.preview} ${currentImageIndex === index ? styles.active : null}`}
                src={imageUrl}
                alt="preview"
                width={50}
                height={50}
                onClick={() => setCurrentImageIndex(index)}
              />
            </li>
          ))}
        </ul>
        <Image className={styles.imageContainer} src={images[currentImageIndex]} onClick={() => setShowModal(true)} alt="slider" width={800} height={800} />
        <button className={`${styles.navigationButton} ${styles.nextButton}`} onClick={handleNextImage}>
          <Image src={sortRightIcon} alt="next" width={20} height={20} />
        </button>
        {showModal && (
          <div className={styles.modal} onClick={handleModalClick}>
            <Image src={images[currentImageIndex]} alt="modal" width={800} height={800} />
          </div>
        )}
      </div>
  )
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

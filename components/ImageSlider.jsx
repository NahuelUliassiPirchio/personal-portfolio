import { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import sortRightIcon from '../public/icons/sort-right.svg'
import sortLeftIcon from '../public/icons/sort-left.svg'
import styles from '../styles/ImageSlider.module.css'

function getYouTubeVideoId (url) {
  if (typeof url !== 'string') return null
  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname.replace(/^www\./, '')
    if (hostname === 'youtu.be') {
      return parsedUrl.pathname.split('/').filter(Boolean)[0] ?? null
    }
    if (hostname === 'youtube.com' || hostname === 'm.youtube.com') {
      if (parsedUrl.pathname === '/watch') return parsedUrl.searchParams.get('v')
      const [, videoId] = parsedUrl.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/) ?? []
      return videoId ?? null
    }
  } catch {
    return null
  }
  return null
}

export default function ImageSlider ({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(images.map((url) => !getYouTubeVideoId(url)))

  const applySlideScroll = () => {
    const previewsContainer = document.querySelector(`.${styles.previewsContainer}`)
    const preview = document.querySelector(`.${styles.preview}`)
    if (previewsContainer && preview) {
      previewsContainer.scrollTo({
        left: preview.offsetWidth * currentImageIndex,
        behavior: 'smooth'
      })
    }
  }

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
    applySlideScroll()
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
    applySlideScroll()
  }

  const handleModalClick = () => {
    setShowModal(false)
  }

  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading]
      newLoading[index] = false
      return newLoading
    })
  }

  const currentYoutubeId = getYouTubeVideoId(images[currentImageIndex])

  return (
    <div className={styles.container}>
      <ul className={styles.previewsContainer}>
        {images.map((imageUrl, index) => {
          const youtubeId = getYouTubeVideoId(imageUrl)
          const previewSrc = youtubeId
            ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
            : imageUrl
          return (
            <li key={imageUrl} className={styles.preview}>
              <Image
                className={`${styles.preview} ${currentImageIndex === index ? styles.active : ''}`}
                src={previewSrc}
                alt="preview"
                width={50}
                height={50}
                onClick={() => setCurrentImageIndex(index)}
                onLoad={() => handleImageLoad(index)}
              />
            </li>
          )
        })}
      </ul>

      <figure>
        <button className={`${styles.navigationButton} ${styles.prevButton}`} onClick={handlePrevImage}>
          <Image src={sortLeftIcon} alt="prev" width={20} height={20} />
        </button>
        <div className={styles.imageContainer}>
          {loading[currentImageIndex] && (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
            </div>
          )}
          {currentYoutubeId
            ? (
            <iframe
              className={styles.youtubeVideo}
              src={`https://www.youtube-nocookie.com/embed/${currentYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${currentYoutubeId}&controls=1&modestbranding=1&playsinline=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
              )
            : (
            <Image
              className={`${styles.image} ${!loading[currentImageIndex] && styles.display}`}
              src={images[currentImageIndex]}
              onClick={() => setShowModal(true)}
              alt="slider"
              width={800}
              height={400}
              onLoad={() => handleImageLoad(currentImageIndex)}
            />
              )}
        </div>
        <button className={`${styles.navigationButton} ${styles.nextButton}`} onClick={handleNextImage}>
          <Image src={sortRightIcon} alt="next" width={20} height={20} />
        </button>
      </figure>

      {showModal && !currentYoutubeId && (
        <div className={styles.modal} onClick={handleModalClick}>
          <Image
            src={images[currentImageIndex]}
            alt="modal"
            width={800}
            height={800}
            onLoad={() => handleImageLoad(currentImageIndex)}
          />
        </div>
      )}
    </div>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

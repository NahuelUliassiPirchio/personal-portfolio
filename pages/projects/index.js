import useTranslation from 'next-translate/useTranslation'

import Layout from '../../components/Layout'
import MetaDecorator from '../../components/MetaDecorator'
import ProjectsSection from '../../components/ProjectsSection'

import styles from '../../styles/ProjectsCatalog.module.css'

export default function ProjectsCatalogPage () {
  const { t } = useTranslation('projects')

  return (
    <>
      <MetaDecorator
        title={t('meta.title')}
        description={t('meta.description')}
        image='UPLogo.svg'
      />
      <Layout>
        <header className={styles.catalogHeader}>
          <h1 className={styles.catalogTitle}>{t('catalog.title')}</h1>
          <p className={styles.catalogIntro}>{t('catalog.intro')}</p>
        </header>
        {ProjectsSection({ key: 'projects-catalog', id: 'projects-catalog', featuredOnly: false })}
      </Layout>
    </>
  )
}

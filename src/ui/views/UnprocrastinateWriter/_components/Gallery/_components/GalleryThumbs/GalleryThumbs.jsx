import { useRecoilValue } from 'recoil';

import styles from './GalleryThumbs.module.scss';

import { backgroundState } from 'store';

export const GalleryThumbs = ({ onSelectBackground, selectedBackground }) => {
  const backgroundProperties = useRecoilValue(backgroundState);

  const renderBackgrounds = () => {
    console.log(backgroundProperties.listOfBackgrounds);
    return (
      <div className={styles.galleryThumbsWrapper}>
        {backgroundProperties.listOfBackgrounds.map(background => (
          <div className={styles.thumbWrapper}>
            <img
              alt=""
              className={`${styles.thumb} ${selectedBackground === background ? styles.selectedBackground : ''}`}
              key={background}
              onClick={() => onSelectBackground(background)}
              src={background}
            />
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderBackgrounds()}</div>;
};

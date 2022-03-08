import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import styles from './Gallery.module.scss';

import { backgroundState } from 'store';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { Dialog } from 'ui/views/_components/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GalleryThumbs } from './_components/GalleryThumbs';
import { Tooltip } from 'ui/views/_components/Tooltip';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const Gallery = ({ numberOfBackgrounds }) => {
  const [backgroundProperties, setBackground] = useRecoilState(backgroundState);

  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const onPreviousBackground = () => {
    const inmBackgroundProperties = { ...backgroundProperties };
    if (inmBackgroundProperties.selectedBackground === 0) {
      inmBackgroundProperties.selectedBackground = numberOfBackgrounds - 1;
    } else {
      inmBackgroundProperties.selectedBackground = inmBackgroundProperties.selectedBackground - 1;
    }
    setBackground(inmBackgroundProperties);
  };

  const onNextBackground = () => {
    const inmBackgroundProperties = { ...backgroundProperties };
    if (inmBackgroundProperties.selectedBackground === numberOfBackgrounds - 1) {
      inmBackgroundProperties.selectedBackground = 0;
    } else {
      inmBackgroundProperties.selectedBackground = inmBackgroundProperties.selectedBackground + 1;
    }
    setBackground(inmBackgroundProperties);
  };

  const onSelectBackground = background => {
    const inmBackgroundProperties = { ...backgroundProperties };
    inmBackgroundProperties.selectedBackground = backgroundProperties.listOfBackgrounds
      .map(back => {
        return back.img;
      })
      .indexOf(background);

    setBackground(inmBackgroundProperties);
  };

  const onSelectBackgroundOpen = () => {
    setIsGalleryVisible(true);
  };

  return (
    <div className={styles.galleryControls}>
      <Tooltip content={messages[language]['previousBackground']} direction="top" tooltipClassName={styles.tooltip}>
        <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('arrowLeft')} onClick={onPreviousBackground} />
      </Tooltip>
      <Tooltip content={messages[language]['backgroundGallery']} direction="top" tooltipClassName={styles.tooltip}>
        <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('gallery')} onClick={onSelectBackgroundOpen} />
      </Tooltip>
      <Tooltip content={messages[language]['nextBackground']} direction="top" tooltipClassName={styles.tooltip}>
        <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('arrowRight')} onClick={onNextBackground} />
      </Tooltip>
      <Tooltip content={messages[language]['backgroundLink']} direction="top" tooltipClassName={styles.tooltip}>
        <FontAwesomeIcon
          aria-hidden={false}
          icon={AwesomeIcons('link')}
          onClick={() =>
            window.open(backgroundProperties.listOfBackgrounds[backgroundProperties.selectedBackground].link)
          }
        />
      </Tooltip>
      <Dialog
        onClose={() => setIsGalleryVisible(false)}
        title={messages[language]['backgroundGalleryTitle']}
        visible={isGalleryVisible}>
        <GalleryThumbs
          onSelectBackground={onSelectBackground}
          selectedBackground={backgroundProperties.listOfBackgrounds[backgroundProperties.selectedBackground].img}
        />
      </Dialog>
    </div>
  );
};

export { Gallery };

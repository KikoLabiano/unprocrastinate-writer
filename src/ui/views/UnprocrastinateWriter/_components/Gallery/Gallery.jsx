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

  // const backgroundInterval = useRef(0);

  // useEffect(() => {
  //   if (backgroundProperties.isPlaying) {
  //     console.log('ENTRO');
  //     backgroundInterval.current = setInterval(() => {
  //       console.log('llego');
  //       onNextBackground();
  //     }, 5000);
  //     console.log({ backgroundInterval });
  //   } else {
  //     console.log({ backgroundInterval });
  //     clearInterval(backgroundInterval.current);
  //   }
  // }, [backgroundProperties.isPlaying]);

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
    console.log('onNextBackground');
    const inmBackgroundProperties = { ...backgroundProperties };
    console.log(inmBackgroundProperties.selectedBackground, numberOfBackgrounds - 1);
    if (inmBackgroundProperties.selectedBackground === numberOfBackgrounds - 1) {
      inmBackgroundProperties.selectedBackground = 0;
    } else {
      inmBackgroundProperties.selectedBackground = inmBackgroundProperties.selectedBackground + 1;
    }
    console.log(inmBackgroundProperties.selectedBackground);
    setBackground(inmBackgroundProperties);
  };

  // const onTogglePlayGallery = () => {
  //   const inmBackgroundProperties = { ...backgroundProperties };

  //   inmBackgroundProperties.isPlaying = !inmBackgroundProperties.isPlaying;
  //   setBackground(inmBackgroundProperties);
  // };

  const onSelectBackground = background => {
    console.log(background);
    console.log(backgroundProperties.listOfBackgrounds.indexOf(background));
    const inmBackgroundProperties = { ...backgroundProperties };
    inmBackgroundProperties.selectedBackground = backgroundProperties.listOfBackgrounds.indexOf(background);
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
      <Dialog
        onClose={() => setIsGalleryVisible(false)}
        title={messages[language]['backgroundGalleryTitle']}
        visible={isGalleryVisible}>
        <GalleryThumbs
          onSelectBackground={onSelectBackground}
          selectedBackground={backgroundProperties.listOfBackgrounds[backgroundProperties.selectedBackground]}
        />
      </Dialog>
    </div>
  );
};

export { Gallery };

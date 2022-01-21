/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer } from './styles';

import { SearchInput } from 'components/SeachInput';
import ReactLoading from 'react-loading';

import { IoClose } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';

import { overlayVariants } from 'variants/modal/overlayVariants';
import { modalVariants } from 'variants/modal/modalVariants';

export const Modal = ({
  setIsModalOpen,
  isModalOpen
}: any) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const controls = useAnimation();

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKl6Bud6TjwdOahcuSQ9AYQdyjKUeC2gw&type=video&&maxResults=2&q=matue').then(({ data }) => {
      setItems(data.items);
      setIsLoading(false);
    }).catch((error) => {
      console.log('ERROR YOU', error);
    })
    
  }, []);


  useEffect(() => {
    if (isModalOpen) {
      controls.start("show")
    } else {
      controls.start("hidden");
    }
  }, [isModalOpen]);


  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return ReactDOM.createPortal(
    <Overlay 
      isModalOpen={isModalOpen}
      as={motion.div}
      variants={overlayVariants}
      animate={controls}
    >
      <ModalContainer
        as={motion.div}
        variants={modalVariants}
      >
        <div className="close-icon" onClick={handleCloseModal}>
          <IoClose className="icon" size="4.2rem" />
        </div>
        <SearchInput 
          setItems={setItems}
          setIsLoading={setIsLoading}
        />
        <div className="videos-container">
          {isLoading && (
            <ReactLoading
              type="spinningBubbles"
              className="react-loading"
              color={'#04193A'}
            />
          )}
          
          {!isLoading && (
            <React.Fragment>
              {items?.length > 0 && items?.map((item: {
                id: {
                  kind: string,
                  videoId: string
                }
              }) => (
                <div className="iframe-container">
                  <Iframe 
                    srcPath={item.id.videoId}
                    key={item.id.videoId}
                  />
                </div>
              ))}
            </React.Fragment>
          )}

        </div>
      </ModalContainer>
    </Overlay>,
    document?.getElementById('modal-root') as Element,
  );
};
    
export const Iframe = ({ srcPath }: { srcPath: string, key: any }) => {
  return (
    <iframe src={`https://www.youtube.com/embed/${srcPath}`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  )
}

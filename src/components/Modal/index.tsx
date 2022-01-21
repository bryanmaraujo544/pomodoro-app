import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer } from './styles';

import { SearchInput } from 'components/SeachInput';
import ReactLoading from 'react-loading';

import { IoClose } from 'react-icons/io5';

export const Modal = ({
  setIsModalOpen
}: any) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKl6Bud6TjwdOahcuSQ9AYQdyjKUeC2gw&type=video&&maxResults=2&q=matue').then(({ data }) => {
      console.log('RESPONSE YOU', data);
      setItems(data.items);
      setIsLoading(false);
    }).catch((error) => {
      console.log('ERROR YOU', error);
    })
    
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  console.log({ items });
  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
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
              {items.map((item: {
                id: {
                  kind: string,
                  videoId: string
                }
              }) => (
                <Iframe 
                  srcPath={item.id.videoId}
                  key={item.id.videoId}
                />
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
    <iframe width="auto" height="315" src={`https://www.youtube.com/embed/${srcPath}`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  )
}

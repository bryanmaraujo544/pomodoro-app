import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

import { Container } from './styles';

export const SearchInput = ({
  setItems,
  setIsLoading
}: any) => {
  const [searchValue, setSearchValue] = useState("");
  
  function handleChangeSearchValue(event: any) {
    setSearchValue(event.target.value);
  }

  function handleSearch(event: any) {
    event.preventDefault();
    setIsLoading(true);

    if (searchValue === '') {
      return window.alert('Do not let any empty field');
    }
    
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKl6Bud6TjwdOahcuSQ9AYQdyjKUeC2gw&type=video&&maxResults=2&q=${searchValue}`).then(({ data }) => {
      console.log('RESPONSE YOU', data);
      setItems(data.items);
      setIsLoading(false);
    }).catch((error) => {
      console.log('ERROR YOU', error);
    })
    console.log('on submit');
  }

  return (
    <Container 
      onSubmit={handleSearch}
    >
      <input
        value={searchValue}
        placeholder="Search..."
        onChange={handleChangeSearchValue}
      />
      <button type="submit">
        <FaSearch/>
      </button>
    </Container>
  )
}

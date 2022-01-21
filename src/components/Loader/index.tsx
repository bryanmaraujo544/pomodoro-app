import React from 'react';
import { LoaderStyled } from './styles';

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <LoaderStyled />
  )
}

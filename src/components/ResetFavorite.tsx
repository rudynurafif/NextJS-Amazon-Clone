import { resetFavorite } from '@/store/slice';
import React from 'react';
import { useDispatch } from 'react-redux';

const ResetFavorite = () => {
  const dispatch = useDispatch();

  const handleResetFavorite = () => {
    const confirmReset = window.confirm(
      'Are you sure wanto to reset the items from your favorite?'
    );
    if (confirmReset) {
      dispatch(resetFavorite());
    }
  };

  return (
    <button onClick={handleResetFavorite} className='reset-button'>
      Reset Favorite
    </button>
  );
};

export default ResetFavorite;

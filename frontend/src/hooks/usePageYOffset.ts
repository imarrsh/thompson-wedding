import { useState, useEffect } from 'react';
import { useEvent } from './useEvent';
import { debounce } from 'lodash';

export function usePageYOffset() {
  
  const [ offset, setOffset ] = useState(0);
  
  const handler = debounce(function() { 
    setOffset(window.pageYOffset);
  }, 16);
  
  useEvent('scroll', handler);
  
  return offset;
};
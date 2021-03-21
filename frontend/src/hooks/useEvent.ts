import { useEffect } from 'react';

export function useEvent(event: string, handler: EventListener, passive = false): void {
  useEffect(()=> {
    window.addEventListener(event, handler, passive);
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  }, []);
}
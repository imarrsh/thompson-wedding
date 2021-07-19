import * as React from 'react';
import { CommonProps } from "react-images";

/**
 * Custom View for React Images modal- in an effort to skirt Tailwind's base img styling, 
 * (block, always ends up left-aligned using this component) this overrides 
 * the built-in View component since theres no other direct way to style the 
 * inner img
 */
 const CustomView = (props: CommonProps) => {
  
  const { 
    carouselProps, 
    isFullscreen, 
    isModal, 
    getStyles, 
    currentView, 
    currentIndex, 
    views 
  } = props;

  const { formatters } = {...carouselProps} || {};
  
  const innerProps = {
    alt: formatters?.getAltText && formatters?.getAltText(props) || "",
    src: typeof(currentView?.source) === 'string' 
      ? currentView?.source
      : currentView?.source?.regular || ""
  }

  return (
    <div className="flex justify-center">
      <img {...innerProps} className="h-auto max-h-screen max-w-full select-none"/>
    </div>
  )
}

export default CustomView;
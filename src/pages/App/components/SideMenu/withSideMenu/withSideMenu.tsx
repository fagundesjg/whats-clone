import React from 'react';

const withSideMenu = (WrappedComponent: React.ElementType) => {
  const WithSideMenuHOC = ({ ...props }) => {
    return <WrappedComponent {...props} />;
  };

  return WithSideMenuHOC;
};

export { withSideMenu };

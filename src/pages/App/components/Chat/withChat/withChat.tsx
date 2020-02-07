import React from 'react';

const withChat = (WrappedComponent: React.ElementType) => {
  const WithChatHOC = ({ ...props }) => {
    return <WrappedComponent {...props} />;
  };

  return WithChatHOC;
};

export { withChat };

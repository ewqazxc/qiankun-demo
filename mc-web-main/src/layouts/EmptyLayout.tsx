import React, { FC, useLayoutEffect, useEffect } from 'react';

interface Props {
  location: Location & { query: any; state: any };
}

const EmptyLayout: FC<Props> = props => {
  const { children } = props;
  return (
    <div style={{ height: '100%' }}>
      {children}
    </div>
  );
};
export default EmptyLayout;

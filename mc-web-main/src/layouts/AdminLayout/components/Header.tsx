import React, { FC, useLayoutEffect, useEffect, useState } from 'react';

interface Props {
  location: Location & { query: any; state: any };
}

const Header: FC<Props> = props => {
  const { children } = props;
  return (
    <h1>
      Header
    </h1>
  );
};
export default Header;

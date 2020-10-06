import React from 'react';
import AdminLayout from '@/layouts/AdminLayout/index';
import EmptyLayout from '@/layouts/EmptyLayout';


const hitRoster = (pathname: string) => {
  let flag = false;
  if (pathname.indexOf('/sigle/') > -1) {
    flag = true;
  }
  return flag;
};
interface Props {
  children: React.ReactElement;
  location: Location & { query: any; state: any };
}
export default (props: Props) => {
  const { children, location } = props;
  if (hitRoster(location.pathname)) {
    return <EmptyLayout {...props} />;
  } else {
    return <AdminLayout {...props} />;
  }
}

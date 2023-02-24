import { useSelector } from 'react-redux';

export const loading = () => {
  const { status } = useSelector((state: any) => state.auth);

  const loading = status === 'checking';

  return loading;
};

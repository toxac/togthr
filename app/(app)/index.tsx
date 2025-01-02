import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useAuth } from '../../components/context/AuthContext';

export default function Index() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      const redirectRoute = user ? '/lists' : '/auth'
      router.replace(redirectRoute);
    }
  }, [user, loading]);

  return null;
}
import router from 'next/router';
import { useEffect, useState } from 'react';

import { User } from 'src/types';
import { profiles } from 'utils/profiles';

function useSession() {
  const [profile, setProfile] = useState<User | undefined>(undefined);

  useEffect(() => {
    const user = typeof window !== 'undefined' && localStorage.getItem('profile');
    if (!user) {
      router.push('/login');
    } else {
      const currentUser = profiles.find(profile => profile.name === user);
      setProfile(currentUser);
    }
  }, []);

  return profile;
}

export default useSession;

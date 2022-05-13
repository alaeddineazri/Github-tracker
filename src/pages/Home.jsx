import { useEffect, useState } from 'react';
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import Welcome from './Welcome';


function Home() {
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {welcome? <> <UserSearch />
      <UserResults /></>: <Welcome /> }
      
    </>
  )
}

export default Home

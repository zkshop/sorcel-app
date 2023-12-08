import { useEffect } from 'react';
import Routes from './routes/Routes';
import { usePostHog } from '@3shop/posthog';

export const App = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.startSessionRecording();
  }, []);

  return <Routes />;
};

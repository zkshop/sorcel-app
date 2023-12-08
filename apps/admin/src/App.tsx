import Routes from './routes/Routes';
import { usePostHog } from '@3shop/posthog';

export const App = () => {
  const posthog = usePostHog();

  posthog.startSessionRecording();

  return <Routes />;
};

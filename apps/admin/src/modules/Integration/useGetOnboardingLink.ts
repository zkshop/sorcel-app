import { envVars } from '@3shop/config';
import axios from 'axios';
import { useState } from 'react';
import { useCustomerTokenCookie } from '../../useCustomerTokenCookie';

type CreateOnboardingLinkResponse = {
  onboarding_link: string;
};

export const useGetOnboardingLink = () => {
  const [loading, setLoading] = useState(false);
  const [onboardingLink, setOnboardingLink] = useState<string | null>(null);
  const { tokenCookie } = useCustomerTokenCookie();

  async function getOnboardingLink() {
    setLoading(true);
    const response = await axios.post<CreateOnboardingLinkResponse>(
      `${envVars.PUBLIC_FUNCTIONS_URL}/api/admin/create-stripe-account`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + tokenCookie,
        },
      },
    );

    setOnboardingLink(response.data.onboarding_link);
    setLoading(false);
  }

  return { onboardingLink, loading, getOnboardingLink };
};

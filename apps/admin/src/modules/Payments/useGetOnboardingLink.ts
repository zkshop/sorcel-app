import { useState } from 'react';
import { useCustomerTokenCookie } from '../../useCustomerTokenCookie';
import { httpServerless } from '@3shop/http-serverless';

type CreateOnboardingLinkResponse = {
  onboarding_link: string;
};

export const useGetOnboardingLink = () => {
  const [loading, setLoading] = useState(false);
  const [onboardingLink, setOnboardingLink] = useState<string | null>(null);
  const { tokenCookie } = useCustomerTokenCookie();

  async function getOnboardingLink(accountId?: string) {
    setLoading(true);
    const response = await httpServerless.post<CreateOnboardingLinkResponse>(
      `api/admin/create-stripe-account`,
      {
        accountId,
      },
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

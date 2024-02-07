import {
  Box,
  Button,
  HStack,
  Header,
  Heading,
  Link,
  Spinner,
  Switch,
  Tag,
  VStack,
} from '@3shop/ui';
import { useState } from 'react';
import { CheckCircleIcon } from '@3shop/ui';
import { envVars } from '../envVars';
import { Plan_Enum } from '@3shop/apollo';
import { useAppData } from '../useAppData';

type PlanType = 'yearly' | 'monthly';

export const Plan = () => {
  const { data, error, loading } = useAppData();
  const [planType, setPlanType] = useState<PlanType>('yearly');

  const handlePlanTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanType(e.target.checked ? 'monthly' : 'yearly');
  };

  if (loading) return <Spinner />;
  if (!data || error) return <p>Error</p>;

  const proPlanCheckoutLink =
    planType === 'monthly'
      ? envVars.MONTHLY_PRO_PLAN_CHECKOUT_LINK
      : envVars.YEARLY_PRO_PLAN_CHECKOUT_LINK;

  const proPlanCheckoutLinkWithId = `${proPlanCheckoutLink}?client_reference_id=${data.id}`;

  return (
    <Box>
      <Header title="Plan"></Header>

      {data.plan === Plan_Enum.Pro && <p>You are currently subscribed to the Pro plan !</p>}
      {data.plan === Plan_Enum.Free && (
        <>
          <Box
            alignItems="flex-start"
            backgroundColor="black"
            color="white"
            rounded="lg"
            p={16}
            my={2}
          >
            <HStack mb={4} justifyContent="space-between">
              <Tag backgroundColor="black" color="white" rounded="full" border="solid 1px white">
                Pro
              </Tag>

              <Box fontWeight="bold">
                Yearly (20% off) <Switch value={planType} onChange={handlePlanTypeChange} /> Monthly
              </Box>
            </HStack>

            <Heading as="h2" color="white" size="md">
              {planType === 'yearly' ? 'Yearly' : 'Monthly'} Pro Plan
            </Heading>

            <VStack
              gap={2}
              fontWeight="bold"
              alignItems="flex-start"
              my={8}
              py={16}
              borderY="solid 1px white"
            >
              <HStack>
                <CheckCircleIcon />
                <p>Unlimited modules (incl. payment)</p>
              </HStack>
              <HStack>
                <CheckCircleIcon />
                <p>Your own brand</p>
              </HStack>
              <HStack>
                <CheckCircleIcon /> <p>5 admin users</p>
              </HStack>
            </VStack>

            <Box fontWeight="bold">
              <span>{planType === 'yearly' ? '300$' : '30$'}</span>
              <Link href={proPlanCheckoutLinkWithId} target="_blank">
                <Button float="right">Upgrade to PRO</Button>
              </Link>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

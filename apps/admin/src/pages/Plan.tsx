import { Box, Button, HStack, Header, Heading, Link, Switch, Tag, VStack } from '@3shop/ui';
import { useState } from 'react';
import { CheckCircleIcon } from '@3shop/ui';
import { envVars } from '@3shop/config';

type PlanType = 'yearly' | 'monthly';

export const Plan = () => {
  const [planType, setPlanType] = useState<PlanType>('yearly');

  const handlePlanTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanType(e.target.checked ? 'monthly' : 'yearly');
  };

  const proPlanCheckoutLink =
    planType === 'monthly'
      ? envVars.MONTHLY_PRO_PLAN_CHECKOUT_LINK
      : envVars.YEARLY_PRO_PLAN_CHECKOUT_LINK;

  return (
    <Box>
      <Header title="Plan"></Header>

      <Box alignItems="flex-start" backgroundColor="black" color="white" rounded="lg" p={16} my={2}>
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
          <Link href={proPlanCheckoutLink} target="_blank">
            <Button float="right">Get Access</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

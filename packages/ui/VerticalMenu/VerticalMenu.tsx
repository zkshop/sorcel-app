import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

type VerticalMenuItem = {
  title: string;
  content: React.ReactNode;
};

type VerticalMenuProps = {
  items: VerticalMenuItem[];
};

export const VerticalMenu = ({ items }: VerticalMenuProps) => (
  <Tabs defaultIndex={1}>
    <TabList>
      {items.map((item) => (
        <Tab
          key={`tab-${item.title}`}
          fontSize="lg"
          fontWeight="bold"
          textAlign="left"
          justifyContent="flex-start"
          w="120px"
        >
          {item.title}
        </Tab>
      ))}
    </TabList>

    <TabPanels mt={4}>
      {items.map((item, i) => (
        <TabPanel key={i}>{item.content}</TabPanel>
      ))}
    </TabPanels>
  </Tabs>
);

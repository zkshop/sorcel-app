import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

type HorizontalMenuItem = {
  title: string;
  content: React.ReactNode;
};

type HorizontalMenuProps = {
  items: HorizontalMenuItem[];
};

const HorizontalMenu = ({ items }: HorizontalMenuProps) => {
  return (
    <Tabs orientation="vertical">
      <TabList>
        {items.map((item) => (
          <Tab key={`tab-${item.title}`}>{item.title}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {items.map((item) => (
          <TabPanel>{item.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default HorizontalMenu;

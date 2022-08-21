import { Box } from "@chakra-ui/react";
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
      <Box>
        <TabList>
          {items.map((item) => (
            <Tab key={`tab-${item.title}`}>{item.title}</Tab>
          ))}
        </TabList>
      </Box>

      <Box>
        <TabPanels>
          {items.map((item) => (
            <TabPanel>{item.content}</TabPanel>
          ))}
        </TabPanels>
      </Box>
    </Tabs>
  );
};

export default HorizontalMenu;

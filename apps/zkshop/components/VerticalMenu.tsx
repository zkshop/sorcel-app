import { Box } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

type VerticalMenuItem = {
  title: string;
  content: React.ReactNode;
};

type VerticalMenuProps = {
  items: VerticalMenuItem[];
};

const VerticalMenu = ({ items }: VerticalMenuProps) => (
  <Tabs orientation="vertical" justifyContent="flex-start">
    <Box>
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
    </Box>

    <Box ml="2">
      <TabPanels>
        {items.map((item, i) => (
          <TabPanel key={i}>{item.content}</TabPanel>
        ))}
      </TabPanels>
    </Box>
  </Tabs>
);

export default VerticalMenu;

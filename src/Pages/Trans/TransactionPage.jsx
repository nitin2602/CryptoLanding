import React from "react";
import DashLayout from "../../Components/DashLayout";
import {
  Button,
  Card,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import Table from "./Components/Tableset";
import Tableset from "./Components/Tableset";
const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      tag: "367",
    },
    {
      name: "Withdraw",
      tag: "37",
    },
    {
      name: "Deposit",
      tag: "67",
    },
    {
      name: "Trade",
      tag: "3",
    },
  ];
  return (
    <DashLayout title={"Transactions"}>
      <Flex justifyContent="end" mt={6} mb={3}>
        <Button>
          <Icon as={IoMdDownload} />
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList>
            {tabs.map((data) => (
              <Tab fontWeight="bold" display="flex" gap={2} key={data.name}>
                {data.name}
                <Tag colorScheme="gray" borderRadius="full" mr={1}> {data.tag}</Tag>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <Tableset />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>Hello</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashLayout>
  );
};

export default TransactionPage;

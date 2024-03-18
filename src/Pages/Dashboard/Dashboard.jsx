import React from "react";

import DashLayout from "../../Components/DashLayout";

import Portfolio from "./Components/Portfolio";
import Pricing from "./Components/Pricing";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./Components/Transaction";

import Infocard2 from "./Components/Infocard2";
import Infocard1 from "./Components/Infocard1";

const Dashboard = () => {
  return (
    <DashLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={2}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={{
          base:2,
          xl:1,
        }}>
          <Pricing />
         
        </GridItem>
        <GridItem colSpan={{
          base:2,
          xl:1,
        }} >
        <Transaction />
        </GridItem>
        <GridItem colSpan={{
          sm:2,
          xl:1,
        }}>
          <Infocard1  />
        </GridItem>
        <GridItem>
          <Infocard2 colSpan={{
          base:2,
          xl:1
        }} />
        </GridItem>
      </Grid>
    </DashLayout>
  );
};

export default Dashboard;

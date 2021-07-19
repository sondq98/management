import { Box, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import MainHeader from "../../components/MainHeader";
import Management from "./Management";
import Role from "./Role";
import "./style.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function getPanelProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}
function EmployeeManagement() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <MainHeader />
      <div className="wrapper">
        <h3 className="wrapper__header">HR Management</h3>
        <Tabs
          sx={{
            marginTop: "20px",
            minHeight: "fit-content",
            p: "0",
            height: "fit-content",
          }}
          TabIndicatorProps={{ style: { display: "none" } }}
          value={currentTab}
          onChange={(e, newValue) => {
            setCurrentTab(newValue);
          }}
        >
          <Tab label="Management" color="primary" {...getPanelProps(0)} />
          <Tab label="Role" color="primary" {...getPanelProps(1)} />
        </Tabs>
        <Box
          sx={{
            border: "1px solid lightgray",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <TabPanel value={currentTab} index={0}>
            <Management />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <Role />
          </TabPanel>
        </Box>
      </div>
    </>
  );
}

export default EmployeeManagement;

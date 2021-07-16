import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MainHeader from '../../../components/MainHeader';
import InfomationTab from './InfomationTab';
import SkillTab from './SkillTab';
import CertificationTab from './CertificationTab';
import "./style.css"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Profile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="Profile">
            <MainHeader></MainHeader>
            <div className="profileDetail">
                <div className="headerPanel">
                    User Infomation
                </div>
                <div className="mainPanel">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                            <Tabs
                                value={value}
                                indicatorColor="none"
                                onChange={handleChange}
                                aria-label="basic tabs example">
                                <Tab label="Infomation" {...a11yProps(0)} />
                                <Tab label="Skill" {...a11yProps(1)} />
                                <Tab label="Certification" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <InfomationTab />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <SkillTab />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <CertificationTab />
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Profile;

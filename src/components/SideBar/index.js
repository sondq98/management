import * as React from 'react';
import { useHistory } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';

export default function SideBar() {

    let history = useHistory();
    const handleClickHome = () => {
        history.push("/home");
    }
    const handleClickCompany = () => {
        history.push("/company");
    }
    const handleClickBranch = () => {
        history.push("/branch");
    }
    const handleClickDivision = () => {
        history.push("/division");
    }
    const handleClickProject = () => {
        history.push("/project");
    }
    const handleClickHumanResource = () => {
        history.push("/employee");
    }
    return (
        <Paper sx={{
            width: 250,
            maxWidth: '100%',
        }}>
            <MenuList style={{
                margin : '5px 20px',
                border: '1px solid rgba(0, 0, 0, 0.12)'
            }}>
                
                <MenuItem onClick={handleClickHome} sx={{
                    height: '52px',
                    marginX: '10px',
                    borderRadius: '6px',
                    fontWeight: 'bold',backgroundColor: '#E8F1FF',
                    "&:hover": {
                        backgroundColor: '#E8F1FF',
                    },
                }}>
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClickCompany} sx={{
                    height: '52px',
                    marginX: '10px',
                    borderRadius: '6px',
                    fontWeight: 'bold',backgroundColor: '#E8F1FF',
                    "&:hover": {
                        backgroundColor: '#E8F1FF',
                    },
                }}>
                    <ListItemIcon>
                        <BusinessOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Company</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClickBranch} sx={{
                    height: '52px',
                    marginX: '10px',
                    borderRadius: '6px',
                    fontWeight: 'bold',backgroundColor: '#E8F1FF',
                    "&:hover": {
                        backgroundColor: '#E8F1FF',
                    },
                }}>
                    <ListItemIcon>
                        <LayersIcon />
                    </ListItemIcon>
                    <ListItemText>Branch</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClickDivision} sx={{
                    height: '52px',
                    marginX: '10px',
                    borderRadius: '6px',
                    fontWeight: 'bold',backgroundColor: '#E8F1FF',
                    "&:hover": {
                        backgroundColor: '#E8F1FF',
                    },
                }}>
                    <ListItemIcon>
                        <CollectionsBookmarkIcon />
                    </ListItemIcon>
                    <ListItemText>Division</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClickProject} sx={{
                    height: '52px',
                    marginX: '10px',
                    borderRadius: '6px',
                    fontWeight: 'bold',backgroundColor: '#E8F1FF',
                    "&:hover": {
                        backgroundColor: '#E8F1FF',
                    },
                }}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText>Project</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClickHumanResource} sx={{
                    height: '52px',
                    marginX: '10px',
                    borderRadius: '6px',
                    fontWeight: 'bold',backgroundColor: '#E8F1FF',
                    "&:hover": {
                        backgroundColor: '#E8F1FF',
                    },
                }}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText>Human Resource</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}
import React, { useState } from 'react';
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { getSkillSelectField } from '../../../../store/profile/action';

import SkillTable from './SkillTable';
import SkillTableUpdate from './SkillTableUpdate';

function UpdateBtn(props) {
    return (
        <Button
            variant="contained"
            color="primary"
            className="btn-30"
            onClick={props.onClick}
            sx={{
                textTransform: 'capitalize'
            }}
        >
            Update
        </Button>
    )
}
function ConfirmBtn(props) {
    return (
        <Button
            variant="contained"
            color="success"
            className="btn-30"
            onClick={props.onClick}
            sx={{
                textTransform: 'capitalize'
            }}
        >
            Confirm
        </Button>
    )
}




function SkillTab(props) {
    let history = useHistory();
    const handleClickBack = () => {
        history.push("/profile");
    }
    const [show, setShow] = useState({ showUpdateTable: false, showConfirmBtn: false });
    const onClickUpdateButton = () => {
        setShow({
            showUpdateTable: !show.showUpdateTable,
            showConfirmBtn: !show.showConfirmBtn
        });
    };

    const { profileReducer, dispatch } = props;
    const { userData } = profileReducer;
    const [userSkillLastUpdate, setUserSkillLastUpdate] = React.useState(userData.skill.skillLastUpdate)

    return (
        <div className="skillTab">
            <div className="skillTab-TableWrapper">
                {
                    show.showUpdateTable ?
                        <SkillTableUpdate />
                        : <SkillTable />
                }
                <div className="skillTab-LastUpdateTime">
                    <span className="timeUpdate-label">Last update</span>
                    <span className="timeUpdate">{userSkillLastUpdate}</span>
                </div>
            </div>
            <div>
                <div className="br"></div>
                <div className="footerPanel">
                    <div className="buttonGroup">
                        {show.showConfirmBtn ? <ConfirmBtn onClick={onClickUpdateButton} /> : <UpdateBtn onClick={onClickUpdateButton} />}
                        <Button
                            variant="contained"
                            className="btn-30"
                            onClick={handleClickBack}
                            sx={{
                                textTransform: 'capitalize',
                                bgcolor: '#212121',
                                '&:hover': {
                                    bgcolor: '#080808'
                                }
                            }}
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileReducer: state.profileReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(SkillTab);
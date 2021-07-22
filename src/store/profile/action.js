import { ACTION_TYPES } from "./reducer";

export const getUserData = () => ({
    type : ACTION_TYPES.GET_USER_DATA
});
export const getUserInfomation = () => ({
    type : ACTION_TYPES.GET_USER_INFOMATION
});
export const getUserSkill = () => ({
    type : ACTION_TYPES.GET_USER_SKILL
});
export const getUserCertification = () => ({
    type : ACTION_TYPES.GET_USER_CERTIFICATION
});
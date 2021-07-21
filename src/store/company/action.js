import { ACTION_TYPE } from "./reducer";
export const getAll = () => {
  return {
    type: ACTION_TYPE.GET_ALL,
  };
};
export const getDataWithFilter = (filter) => {
  return {
    type: ACTION_TYPE.FILTER_DATA,
    payload: { ...filter },
  };
};
export const getSearchedData = (searchCondition) => {
  return {
    type: ACTION_TYPE.SEARCH_DATA,
    payload: { ...searchCondition },
  };
};

export const getOne = (id) => {
  return {
    type: ACTION_TYPE.GET_ONE,
    payload: id,
  };
};

export const updateCompany = (company) => {
  return {
    type: ACTION_TYPE.UPDATE_COMPANY,
    payload: company,
  };
};
export const deleteCompany = (id) => {
  return {
    type: ACTION_TYPE.DELETE_ONE,
    payload: id,
  };
};

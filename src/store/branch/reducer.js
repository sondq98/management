export const ACTION_TYPE = {
    DELETE_ONE: "DELETE_ONE",
    GET_ALL: "GET_ALL",
    FILTER_DATA: "FILTER_DATA",
    SEARCH_DATA: "SEARCH_DATA",
    GET_ONE: "GET_ONE",
    UPDATE_COMPANY: "UPDATE_COMPANY",
};

const demoData = [
    {
        code: "001",
        companyName: "VTI",
        email: `anh.nguyenductuan@vti.com.vn 001`,
        phoneNumber: "0123456788",
        status: "pending",
    },
    {
        code: "002",
        companyName: "VTI",
        email: `anh.nguyenductuan@vti.com.vn 002`,
        phoneNumber: "0123456788",
        status: "stopped",
    },
    {
        code: "003",
        companyName: "VTI",
        email: `anh.nguyenductuan@vti.com.vn 003`,
        phoneNumber: "0123456788",
        status: "working",
    },
    {
        code: "004",
        companyName: "VTI",
        email: `anh.nguyenductuan@vti.com.vn 004`,
        phoneNumber: "0123456788",
        status: "working",
    },
    {
        code: "005",
        companyName: "VTI",
        email: `anh.nguyenductuan@vti.com.vn 005`,
        phoneNumber: "0123456788",
        status: "working",
    },
    {
        code: "006",
        companyName: "VTI",
        email: `anh.nguyenductuan@vti.com.vn 006`,
        phoneNumber: "0123456788",
        status: "working",
    },
];
let initState = {
    tableData: [],
    filter: { row: 5, currentPage: 1, max: demoData.length },
};
function companyReducer(state = initState, action) {
    switch (action.type) {
        case ACTION_TYPE.GET_ALL: {
            return { ...state, tableData: demoData };
        }
        case ACTION_TYPE.GET_ONE: {
            let id = action.payload;
            let company = demoData.filter((e) => e.code === id)[0];
            return { ...state, company };
        }
        case ACTION_TYPE.FILTER_DATA: {
            let filter = action.payload;
            filter.max = demoData.length;
            if (!state?.searchCondition) {
                let tableData = filterData(filter);
                return {
                    ...state,
                    tableData,
                    filter,
                };
            } else {
                let data = searchData(state.searchCondition);
                filter.max = data.length;
                let tableData = filterData(filter, data);

                return {
                    ...state,
                    tableData,
                    filter,
                };
            }
        }
        case ACTION_TYPE.SEARCH_DATA: {
            let searchCondition = action.payload;
            if (searchCondition.status === "all") searchCondition.status = "";
            let { filter } = state;

            let tableData = searchData(searchCondition);
            filter.currentPage = 1;
            filter.max = tableData.length;
            tableData = tableData.slice(
                filter.row * (filter.currentPage - 1),
                filter.row * filter.currentPage
            );
            return {
                ...state,
                tableData,
                searchCondition,
            };
        }
        case ACTION_TYPE.UPDATE_COMPANY: {
            let company = action.payload;
            let index = demoData.findIndex((e) => e.code === company.code);
            demoData[index] = company;
            return { ...state };
        }
        case ACTION_TYPE.DELETE_ONE: {
            let code = action.payload;
            let index = demoData.findIndex((e) => e.code === code);
            demoData.splice(index, 1);
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}
const searchData = (searchCondition) => {
    return [...demoData].filter((e) => {
        return (
            e.phoneNumber.indexOf(
                searchCondition.phoneNumber ? searchCondition.phoneNumber : ""
            ) !== -1 &&
            e.email.indexOf(searchCondition.email ? searchCondition.email : "") !==
            -1 &&
            e.status.indexOf(searchCondition.status ? searchCondition.status : "") !==
            -1 &&
            e.code.indexOf(
                searchCondition.companyCode ? searchCondition.companyCode : ""
            ) !== -1 &&
            e.companyName.indexOf(
                searchCondition.companyName ? searchCondition.companyName : ""
            ) !== -1
        );
    });
};
const filterData = (filter, data) => {
    if (!data) {
        return [...demoData].slice(
            filter.row * (filter.currentPage - 1),
            filter.row * filter.currentPage
        );
    } else {
        return [...data].slice(
            filter.row * (filter.currentPage - 1),
            filter.row * filter.currentPage
        );
    }
};
export default companyReducer;

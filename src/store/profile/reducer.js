export const ACTION_TYPES = {
    GET_USER_DATA: "GET_USER_DATA",
    GET_USER_INFOMATION: "GET_USER_INFOMATION",
    UPDATE_USER_INFOMATION: "UPDATE_USER_INFOMATION",
    GET_USER_SKILL: "GET_USER_SKILL",
    GET_USER_CERTIFICATION: "GET_USER_CERTIFICATION",
};

const userData = {
    infomation: {
        id: 'V0005',
        fullName: 'Nguyen Thi Ngoc Bich',
        img: './user.png',
        birthDay: '1999-09-09',
        email: 'Acb@gmail.com',
        workEmail: 'bich.nguyenthingoc@vti.com.vn',
        phoneNumber: '0123456789',
        address: '78 - Duy Tan - Cau Giay - Ha Noi',
        joinDate: '2019-07-01',
        company: 'VTI',
        branch: 'Ha Noi',
        division: 'D5',
        role: 'Developer',
        position: 'Front-end Developer',
        idCode: '01234567891011',
        idDate: '2010-09-10',
        experience: '3 year',
        contract: 'HDLD'
    },

    skill: {
        skillList: [
            {
                skillType: 'Programing languages',
                skillName: 'Java',
                skillNote: '',
                experiences: '3 month',
                noteExperiences: '',
                level: '3'
            },
            {
                skillType: 'Framework',
                skillName: 'VueJs',
                skillNote: '',
                experiences: '3 month',
                noteExperiences: '',
                level: '3'
            },
        ],
        skillLastUpdate : '2020-01-01 09:00:00'
    },
    

    certification: [
        {
            stt: '1',
            Certificate: 'AWS Professtional',
            Filename: 'AWS Professtional',
            Date: '2020-01-01',
            Duration: '2 years',
        },
        {
            stt: '2',
            Certificate: 'JLPT N1',
            Filename: 'JLPT N1',
            Date: '2020-01-01',
            Duration: '2 years',
        },
    ]
};



let initState = {
    userData: userData
};

export default function profileReducer(state = initState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_USER_DATA: {
            return { ...state, userData: userData };
        }
        case ACTION_TYPES.GET_USER_INFOMATION: {
            return { ...state, userInfomation: userData.infomation };
        }
        case ACTION_TYPES.GET_USER_SKILL: {
            return { ...state, userSkill: userData.skill };
        }
        case ACTION_TYPES.GET_USER_CERTIFICATION: {
            return { ...state, userCertification: userData.certification };
        }

        default: {
            return { ...state };
        }
    }
}

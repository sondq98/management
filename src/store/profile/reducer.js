export const ACTION_TYPES = {
    GET_USER_DATA : "GET_USER_DATA"
};

const demoData = {
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
    skill: [
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
    certification : [
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
    userData: demoData
};

export default function profileReducer(state = initState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_USER_DATA: {
            return { ...state, userData: demoData };
        }
        
        default: {
            return { ...state };
        }
    }
}

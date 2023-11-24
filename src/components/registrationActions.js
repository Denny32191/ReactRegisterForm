export const saveRegistrationInfo = (name , phone, password) => {
    return { type: 'SAVE_REGISTRATION_INFO',
    payload: {
        name,
        phone,
        password,
    },
};
};
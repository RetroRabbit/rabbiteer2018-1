export const editUserName = (user) => {
    return {
        type: "EDIT_USER_NAME",
        payload: user
    }
}

export const editUserEmail = (user) => {
    return {
        type: "EDIT_USER_EMAIL",
        payload: user
    }
}

export const editProfilePicture = (user) => {
    return {
        type: "EDIT_PROFILE_PICTURE",
        payload: user
    }
}

export const saveChanges = (user) => {
    return {
        type: "SAVE_CHANGES_USER_DETAILS",
        payload: user
    }
}

export const updateUserName = (e, user) => {
    return {
        type: "UPDATE_USER_NAME",
        payload: {
            name: e.target.value,
            email: user.email,
            profilePic: user.profilePic
        }
    }
}
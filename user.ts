

export const createMockUser
    = (nameVal) => {
    return {
        screenName: nameVal,
        avatar: "Avatar",
        followers: 100,
        followedByMe: false
    };
};

export const followButton
=(user) =>{
    return user.followedByMe === false;


};
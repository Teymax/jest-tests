import {createMockUser, followButton} from '../user';


test('follow button', () => {
    const user = createMockUser('Test');
    const req = {
        body: {
            user
        }
    };
    let success;
    try {
        req.body.user.followedByMe = followButton(user);
        success = true
    } catch (e) {
        success = false;
    }
    const res = {
        body: {
            success,
            followedByMe: req.body.user.followedByMe
        }
    };
    expect(res.body.followedByMe).toBe(true);
});
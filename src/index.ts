import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";
import {UserCollection} from "./views/UserCollection";

const userPanelEl = document.getElementById('user-panel');
const userListEl = document.getElementById('user-list');

const users = User.buildUserCollection();
const user = User.buildUser({name: 'Mikhail', age: 26})

if (userPanelEl && userListEl) {
    const userPanel = new UserEdit(userPanelEl, user);
    const userList = new UserCollection(userListEl, users);

    users.fetch()
    userPanel.render();

    user.on('saved', () => {
        users.fetch();
    });
} else {
    throw new Error('root element not found')
}

/*
** APP querys
*/

// prevent SQL injection
function check_input(input) {
    let regex = /https:\/\/intra\.epitech\.eu\/auth-([a-zA-Z]+([0-9]+[a-zA-Z]+)+)\//i;
    return regex.test(input);
}

const create_admin = 'INSERT INTO users (login, password, email, name, firstname, is_admin) VALUES (?, ?, ?, ?, ?, 1)'
const create_user = 'INSERT INTO users (login, password, email, name, firstname) VALUES (?, ?, ?, ?, ?)'
const get_user = 'SELECT * FROM users WHERE login = ? OR email = ?'
const update_is_delete = 'UPDATE users SET is_delete = ? WHERE email = ? OR login = ?'
const delete_user = 'DELETE FROM users WHERE email = ? OR login = ?'
const get_all_active_users = 'SELECT * FROM users WHERE is_delete = 0'
const get_all_users = 'SELECT * FROM users'


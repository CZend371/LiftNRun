export function AuthHeaders() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authData) {
        return { 'Authorization': 'Basic' + user.authData };
    } else {
        return {};
    }
}
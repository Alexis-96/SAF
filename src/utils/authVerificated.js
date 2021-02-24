import Cookies from 'js-cookie';


function authVerificated() {
    Cookies.set('CiDi', 'SD5F4S5D4FSDF4');
    const cokies = Cookies.get('CiDi');
    if( cokies === null || cokies === undefined || cokies ===''){
        return false;
    }
    return true
}

export default authVerificated

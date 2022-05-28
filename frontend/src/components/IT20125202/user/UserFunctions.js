import axios from "axios";

export const userRegister = newUser => {
    return axios.post('http://localhost:5000/user/registration', {
            idNumber: newUser.idNumber,
            name: newUser.name,
            email: newUser.email,
            type: newUser.type,
            password: newUser.password,
        })
        .then(res => {
            if (res.data.success) {
                // window.alert('Registered successfully!');
            }
        })
        .catch(err => {
            return err
        })
} 

export const userLogin = user => {
    return axios.post('http://localhost:5000/user/login', {
        idNumber: user.idNumber,
        password: user.password
    })
    .then(res => {
            localStorage.setItem('userToken', res.data)
            // window.alert('Login successful!');
            return res.data
    })
    .catch(err => {
        console.log(err);
    })
}
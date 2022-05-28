import { useState } from 'react'
import swal from 'sweetalert';

function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function loginAdmin(e) {
        e.preventDefault()

        const res = await fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })

        const data = await res.json()

        if (data.admin) {
            swal("Login successful!", "", "success")
                .then((value) => {
                    if (value) {
                        localStorage.setItem('token', data.admin)
                        window.location.href = '/admin/home'
                    }

                });
        } else {
            swal({
                title: "",
                text: "Please check your ID number and password",
                icon: "warning",
            });
        }
    }

    return (
        <div className="jumbotron" style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', backgroundSize: 'cover', height: '700px' }}>

            <div className="container" style={{ marginTop: '50px', marginBottom: '50px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
                <h1 style={{ textAlign: 'center', paddingBottom: '100px' }}>RPMS - Admin</h1>
                <div className="col-md-8 mt-4 mx-auto">
                    <br />
                    <h3 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}>Admin Login</h3>

                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Please enter the username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />

                        </div>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Please enter the password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                        </div>


                        <div class="d-grid gap-2">
                            <button className="btn btn-outline-success" type="submit" style={{ marginTop: '15px', width: 'cover' }} onClick={loginAdmin}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AdminLogin
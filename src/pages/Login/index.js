import React, { useState, useEffect } from 'react'
import "./login.css"
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Login() {
    const [getUsersName, setUsersName] = useState('');
    const [getPassword, setPassword] = useState('');
    const history = useHistory();
    useEffect(()=>{
        localStorage.clear();
    },[]);
    const onClickLogin = () => {
        console.log(getUsersName);
        console.log(getPassword);

        var formdata = new FormData();
        formdata.append("Username", getUsersName);
        formdata.append("Password", getPassword);
        fetch('http://localhost/Leavewebservice/API/Login.php', {
            method: 'POST', // or 'PUT'
            body: formdata
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.length>0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'ไปใช่ชีวิตสะ',
                        showConfirmButton: false,
                        timer: 1500
                      }).then(()=>{
                        console.log('Success:', data);
                        localStorage.setItem("sessionLoginDetail", data[0]);
                        localStorage.setItem("sessionLogin", true);
                        history.push("/home");
                      })
               
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'รหัสผ่านไม่ถูกต้องน่ะคร๊าบ',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                      })
                      
                }
            })

    }
    return (

        <div class="container h-100">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user" onChange={(param) => setUsersName(param.target.value)} placeholder="username" />
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" class="form-control input_pass" onChange={(param) => setPassword(param.target.value)} placeholder="password" />
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customControlInline" />
                                    <label class="custom-control-label" for="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center mt-3 login_container">
                                <button type="button" name="button" class="btn login_btn" onClick={onClickLogin}>Login</button>
                            </div>
                        </form>
                    </div>

                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
                        </div>
                        <div class="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
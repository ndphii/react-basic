import React from "react";
import logo from '../../assets/images/logo.svg';
import icons8gg from '../../assets/images/icons8-google.svg';
import icons8twitter from '../../assets/images/icons8-twitter.svg';
import MyComponent from "./MyComponents";
import '../../styles/button.scss';
import '../../styles/text.scss';
import '../../styles/App.scss';
//tên class phải viết hoa chữ cái đầu
class DeSignForm extends React.Component {
    handleSubmit = () => {
        //alert("Email : " + Object.values(this.state.textEmail).join('') + " --- Password: " + Object.values(this.state.textPass).join(''))
        this.setState({ stt: !this.state.stt })
        //console.log(this.state.stt)
    }
    state = {
        stt: false, textEmail: "", textPass: "", inforLogin: [{ id: '234', name: 'Thanh Liên', age: '20', Email: "tttlien.20it10@vku.udn.vn", Pass: "" }, { id: '234', name: 'Đức Phi', age: '20', Email: "nguyenducphi002@gmail.com", Pass: "" }]
    }

    handleOnchangeEmail = (eventEmail) => {
        this.setState({ textEmail: eventEmail.target.value })
    }
    handleOnchangePassword = (eventPass) => {
        this.setState({ textPass: eventPass.target.value })
    }
    handleOnClickIconPassword = () => {
        var pass = document.getElementById("text-pass");
        var icon = document.getElementById("icon-visible").value;
        if (icon === "visibility_off" && pass.type === "password") {
            document.getElementById("text-pass").type = "text";
            document.getElementById("icon-visible").innerHTML = "visibility";
            document.getElementById("icon-visible").value = "visibility";

        } else {
            document.getElementById("icon-visible").value = "visibility_off";
            document.getElementById("icon-visible").innerHTML = "visibility_off";
            document.getElementById("text-pass").type = "password";
        }
    }


    render() {
        return (
            <div className="container-form-login">
                <img src={logo} className="App-logo" alt="logo" />
                <label className="label-signup">Sign Up</label><br />
                <label className="label-description-signup">Get started today by entering just a few details</label><br />
                <button className="google-signup-button">
                    <img src={icons8gg} className="google-signup-icon" alt="google" />
                    <p className="google-signup-text">Sign in with google</p>
                </button><br />
                <button className="twitter-signup-button">
                    <img src={icons8twitter} className="twitter-signup-icon" alt="google" />
                    <p className="twitter-signup-text">Sign in with twitter</p>
                </button><br />
                <hr className="hr-text" data-content="OR" />
                <label className="labe-email-text">Email</label><br />
                <input className="input-email" value={this.state.textEmail} onChange={(eventEmail) => this.handleOnchangeEmail(eventEmail)} type="email" id="email" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$" required /> <br />
                <label className="labe-password-text">Password</label><br />
                <div className="group-password">
                    <input className="input-password" value={this.state.textPass} onChange={(eventPass) => this.handleOnchangePassword(eventPass)} pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/" type="password" id="text-pass" />
                    <button className="icon-visible" value="visibility_off" onClick={() => this.handleOnClickIconPassword()}>
                        <span className="material-symbols-outlined" id="icon-visible">
                            visibility_off
                        </span>
                    </button>
                </div><br />
                <button className="signup-submit-button" type="submit" value="Submit" onClick={(envent) => (this.handleSubmit(envent))}> Sign in</button><br />
                <MyComponent dataLogin={this.state.inforLogin}
                    textEmail={this.state.textEmail}
                    textPass={this.state.textPass}
                    stt={this.state.stt}
                />
            </div >
        );
    }
}


export default DeSignForm;
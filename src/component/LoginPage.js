import React from 'react';
import '../style/styles.css';
import Header from './Header';

const LoginPage = () => {

  return (
    <div id="login">
      {/* <Header /> */}
      <div class="content">
        <h2 class="banner-tt"><a href="/">DayPrint</a> 로그인</h2>
        <form autoComplete="off" class="login_form">
          <div className="field">
            <label for="userName" class="hidden">Name</label>
            <i className="fas fa-user" />
            <input type="text" id="userName" name="username" placeholder="  아이디  or  이메일" />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="userPass" name="userpw" placeholder="  비밀번호" />
          </div>
          <input type="submit" className="field" value="로그인" />
        </form>
        <div>
          <div>
            <a href="/signup" class="link">회원가입</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


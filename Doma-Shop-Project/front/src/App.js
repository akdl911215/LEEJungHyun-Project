import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollIntoView from "./webapp/common/helpers/ScrollIntoView";
import ScrollToTop from "./webapp/common/helpers/ScrollToTop";
import { Signup, Signin, MyPage, UserWithdrawal } from "webapp/user/index";
import {
  NoticeList,
  NoticeModify,
  NoticeRead,
  NoticeRegister,
} from "webapp/notice/index";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home } from "webapp/home/index";
import { HomeVideoBg } from "webapp/common/index";
import UserPageList from "webapp/user/component/UserPageList";

const App = () => {
  return (
    <>
      <Router basename="/">
        <ScrollIntoView>
          <ScrollToTop>
            <Switch>
              <Route exact path={`/`} component={HomeVideoBg} />
              <Route exact path="/users/users_signup" component={Signup} />
              <Route exact path="/users/users_signin" component={Signin} />
              <Route exact path="/users/users_list" component={UserPageList} />
              <Route exact path="/users/users_mypage" component={MyPage} />
              <Route
                exact
                path="/users/users_withdrawal"
                component={UserWithdrawal}
              />

              <Route exact path="/notice/notice_list" component={NoticeList} />
              <Route
                exact
                path="/notice/notice_register"
                component={NoticeRegister}
              />
              <Route exact path="/notice/notice_read" component={NoticeRead} />
              <Route
                exact
                path="/notice/notice_modify"
                component={NoticeModify}
              />
            </Switch>
          </ScrollToTop>
        </ScrollIntoView>
      </Router>
    </>
  );
};

export default App;

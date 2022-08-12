import React, { useEffect } from "react";
import UserBtnReset from "./UserButtonReset";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import UserDeleteButton from "./UserDeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { UserCurrentPageLocation } from "webapp/reducers/user.reducer";
import ShowPageNation from "webapp/user/component/UserPagenationButton";
import { useNavigate } from "react-router-dom";
import styles from "../style/UserPageList.module.css";
import UserPageSearch from "./UserPageSearch";

const UserPageList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(UserCurrentPageLocation(1));
  }, []);

  const { totalList, end, next, page, pageList, prev, start } = useSelector(
    ({ UserReducer }) => ({
      page: UserReducer?.UserPageListInitial?.pageResult?.paging?.page,
      totalList: UserReducer?.UserPageListInitial?.pageResult?.result?.result,
      //
      // end: UserReducer?.UserPageListInitial?.pageResult?.end,
      // next: UserReducer?.UserPageListInitial?.pageResult?.next,
      // pageList: UserReducer?.UserPageListInitial?.pageResult?.pageList,
      // prev: UserReducer?.UserPageListInitial?.pageResult?.prev,
      // start: UserReducer?.UserPageListInitial?.pageResult?.start,
    })
  );

  console.log("page :: ", page);
  console.log("totalList :: ", totalList);

  const colors = ["blue"];

  return (
    <>
      <Container>
        <div>
          {colors.map((color) => (
            <Table color={color} key={color}>
              {totalList?.map((element, index) => {
                return (
                  <>
                    <div key={index}>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>회원번호</Table.HeaderCell>
                          <Table.HeaderCell>아이디</Table.HeaderCell>

                          <Table.HeaderCell>이름</Table.HeaderCell>
                          <Table.HeaderCell>주소</Table.HeaderCell>
                          <Table.HeaderCell>이메일</Table.HeaderCell>
                          <Table.HeaderCell>핸드폰번호</Table.HeaderCell>
                          <Table.HeaderCell>권한</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>{element.id}</Table.Cell>
                          <Table.Cell>{element.username}</Table.Cell>
                          <Table.Cell>{element.name}</Table.Cell>
                          <Table.Cell>{element.address}</Table.Cell>
                          <Table.Cell>{element.email}</Table.Cell>
                          <Table.Cell>{element.phone_number}</Table.Cell>
                          <Table.Cell>{element.roles}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </div>
                  </>
                );
              })}
            </Table>
          ))}
        </div>
        <UserPageSearch />
        <div className={styles.UserPageListButtonStyle}>
          <Button primary onClick={() => navigate("/admin_main")}>
            뒤로가기
          </Button>
          <UserBtnReset />
          <UserDeleteButton />
        </div>
        <div className={styles.PaginationStyle}>
          {/* <ShowPageNation
            end={end}
            next={next}
            page={page}
            pageList={pageList}
            prev={prev}
            start={start}
          /> */}
        </div>
      </Container>
    </>
  );
};
export default UserPageList;

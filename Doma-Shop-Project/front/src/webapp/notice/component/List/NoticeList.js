import React from 'react';
import 'webapp/notice/style/NoticeList.css';

const NoticeList = () => {
    return (
        <>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>첫번째 게시글입니다</td>
                    <td>2020-10-25</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>두번째 게시글입니다</td>
                    <td>2020-10-25</td>
                    <td>ㅅ6</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>세번째 게시글입니다</td>
                    <td>2020-10-25</td>
                    <td>ㅅ6</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>네번째 게시글입니다</td>
                    <td>2020-10-25</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>다섯번째 게시글입니다</td>
                    <td>2020-10-25</td>
                    <td>2</td>
                </tr>
            </tbody>
        </>
    );
};
export default NoticeList;
// https://antdev.tistory.com/78

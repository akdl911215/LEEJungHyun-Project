import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NoticeRegister = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const clickFileChange = (event) => {
    console.log("event : ", event);
    console.log("event.target.files : ", event.target.files);
    setSelectedFile(event.target.files);
    console.log("setSelectedFile : ", setSelectedFile);
  };
  const handleFileUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("myfile", selectedFile[i], selectedFile[i].name);
    }
    console.log("formData : ", formData);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("api/uploadfile", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <Link to="/">홈</Link> */}
      <form action="submit" method="post">
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input
                type="text"
                name="title"
                style={{ width: "200px" }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>
              <input type="text" name="writer" style={{ width: "200px" }} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea rows="20" name="text" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="pass" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="확인"></input>
              <input type="reset" value="취소"></input>
              <div>
                <input type="file" onChange={clickFileChange} />
                <button onClick={{ handleFileUpload }}>업로드</button>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};
export default NoticeRegister;

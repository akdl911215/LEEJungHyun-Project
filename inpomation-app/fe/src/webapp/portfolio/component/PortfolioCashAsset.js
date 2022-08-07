import React, { useEffect, useState } from "react";
import { RadialChart } from "react-vis";
import { Form, Button } from "semantic-ui-react";
import styles from "../style/PortfolioCashAsset.module.css";
import {
  CashAssetDataAPI,
  FortfolioInquiryDataAPI,
} from "webapp/api/portfolioApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { useNavigate } from "react-router-dom";

const PortfolioCashAsset = () => {
  const navigate = useNavigate();
  // 포트폴리오 비율 현금 vs 자산
  const [cashAsset, setCashAsset] = useState({
    cash: 0,
    asset: 0,
    cashRatio: 0,
    assetRatio: 0,
  });
  const [options, setOptions] = useState("cash");
  const cashVsAssetRatio = [
    {
      angle: Number(cashAsset.cash),
      label: cashAsset.cash === 0 ? "" : "현금",
      subLabel: cashAsset.cash === 0 ? "" : String(cashAsset.cash),
    },
    {
      angle: Number(cashAsset.asset),
      label: cashAsset.asset === 0 ? "" : "자산",
      subLabel: cashAsset.asset === 0 ? "" : String(cashAsset.asset),
    },
  ];
  const handleChange = (e) => {
    const { value } = e.target;
    setCashAsset({
      ...cashAsset,
      [options]: value,
    });
  };

  useEffect(() => {
    UserAuthDataAPI(
      sessionStorage.getItem("jwtToken"),
      sessionStorage.getItem("roles")
    )
      .then((res) => {
        if (res?.data?.message === "토큰이 정상입니다.") {
          FortfolioInquiryDataAPI({
            username: sessionStorage.getItem("username"),
          })
            .then((res) => setCashAsset(res?.data))
            .catch((err) => console.error("cashAssetData error : ", err));
        } else {
          alert("다시 로그인을 시도하세요.");
          sessionRemove();
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  }, []);

  const cashAssetSubmit = () => {
    UserAuthDataAPI(
      sessionStorage.getItem("jwtToken"),
      sessionStorage.getItem("roles")
    )
      .then((res) => {
        if (res?.data?.message === "토큰이 정상입니다.") {
          console.log("토큰 정상");

          CashAssetDataAPI({
            cash: cashAsset.cash,
            asset: cashAsset.asset,
            username: sessionStorage.getItem("username"),
          })
            .then((res) => setCashAsset(res?.data))
            .catch((err) => console.error("cashAssetData error : ", err));
        } else {
          alert("다시 로그인을 시도하세요.");
          sessionRemove();
        }
      })
      .catch((err) => console.error("portfolio cash vs asset error : ", err));
  };

  const sessionRemove = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("roles");
    navigate("/users_signin");
  };

  return (
    <>
      <div className={styles.box}>
        {/* 차트 */}
        <RadialChart
          data={cashVsAssetRatio}
          showLabels={true}
          width={400}
          height={400}
          radius={130}
        />

        {/* 디스플레이 인풋 */}
        <div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value="현금"
                className={styles.displayInputBoxName}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value={cashAsset.cash}
                className={styles.displayInputBoxValue}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value={`자산 비중 ${cashAsset.cashRatio}%`}
                className={styles.displayInputBoxRatio}
                readOnly
              />
            </Form>
          </div>
        </div>

        <div></div>

        <div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value="자산"
                className={styles.displayInputBoxName}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value={cashAsset.asset}
                className={styles.displayInputBoxValue}
                readOnly
              />
            </Form>
          </div>
          <div className={styles.displayBox}>
            <Form size="small">
              <Form.Input
                fluid
                value={`자산 비중 ${cashAsset.assetRatio}%`}
                className={styles.displayInputBoxRatio}
                readOnly
              />
            </Form>
          </div>
        </div>

        {/* 셀렉트 인풋 서브밋 */}
        <div className={styles.cashAssetBox}>
          <div className={styles.floatBox}>
            <select
              name="cashAsset"
              onChange={(e) => setOptions(e.target.value)}
            >
              <option value="cash">현금</option>
              <option value="asset">자산</option>
            </select>
          </div>
          <div className={styles.inputBox}>
            <Form size="small">
              <Form.Input fluid name="cash" onChange={handleChange} />
            </Form>
          </div>
          <div className={styles.floatBox}>
            <Button type="submit" onClick={cashAssetSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PortfolioCashAsset;
import React from "react";
import { useDispatch } from "react-redux";
import { CityAndProvineceImportExportCodeChoice } from "webapp/reducers/sidoAndProvince.reduce";

const NatureSelect = (props) => {
  const dispatch = useDispatch();
  const style = {
    selectBox: {
      width: "10rem",
    },
  };

  const importExportBool = props.importExport === "1" ? true : false;
  return (
    <>
      {importExportBool ? (
        <select
          name="itemCode"
          id="itemCode"
          onChange={(e) =>
            dispatch(CityAndProvineceImportExportCodeChoice(e.target.value))
          }
          style={style.selectBox}
        >
          <option value="">선택하세요</option>
          <option value="10000">1. 식료 및 직접소비재(10000)</option>
          <option value="11101">- 돼지고기(11101)</option>
          <option value="11201">- 기타 육류 및 조제품(11201)</option>
          <option value="11300">- 어패류와 조제품(11300)</option>
          <option value="11301">(참 치)(11301)</option>
          <option value="11302">(기타 어패류)(11302)</option>
          <option value="11303">(생 선 묵)(11303)</option>
          <option value="11304">(기타 어패류 조제품)(11304)</option>
          <option value="11401">- 김(11401)</option>
          <option value="11501">- 채소류(11501)</option>
          <option value="11601">- 설 탕(11601)</option>
          <option value="11701">- 엽연초(11701)</option>
          <option value="11800">- 음료 및 주류(11800)</option>
          <option value="11801">(음 료)(11801)</option>
          <option value="11802">(주 류)(11802)</option>
          <option value="11Z01">- 기 타(11Z01)</option>
          <option value="20000">2. 원료 및 연료(20000)</option>
          <option value="21101">- 조광물(21101)</option>
          <option value="21201">- 금속광(21201)</option>
          <option value="21301">- 인 삼(21301)</option>
          <option value="21400">- 가 죽(21400)</option>
          <option value="21401">(소와 마속가죽)(21401)</option>
          <option value="21402">(기타 가죽)(21402)</option>
          <option value="21501">- 기타 동식물성 원재료(21501)</option>
          <option value="21600">- 석유제품(21600)</option>
          <option value="21601">(경 유)(21601)</option>
          <option value="21602">(나프타)(21602)</option>
          <option value="21603">(방카 C유)(21603)</option>
          <option value="21604">(기타 석유제품)(21604)</option>
          <option value="21Z01">- 기 타(21Z01)</option>
          <option value="30000">3. 경공업품(30000)</option>
          <option value="31000">가. 섬유원료(31000)</option>
          <option value="31101">- 설 견(31101)</option>
          <option value="31201">- 면웨이스트(31201)</option>
          <option value="31301">- 화학섬유(31301)</option>
          <option value="31Z01">- 기 타(31Z01)</option>
          <option value="32000">나. 섬유사(32000)</option>
          <option value="32101">- 견사류(32101)</option>
          <option value="32201">- 모 사(32201)</option>
          <option value="32301">- 생면사(32301)</option>
          <option value="32401">- 표백 기타 가공면사(32401)</option>
          <option value="32501">- 합성섬유사(32501)</option>
          <option value="32601">- 재생섬유사(32601)</option>
          <option value="32Z01">- 기 타(32Z01)</option>
          <option value="33000">다. 직 물(33000)</option>
          <option value="33101">- 생면직물(33101)</option>
          <option value="33201">- 표백 기타 가공한 면직물(33201)</option>
          <option value="33301">- 견직물(33301)</option>
          <option value="33401">- 모직물(33401)</option>
          <option value="33501">- 합성섬유직물(33501)</option>
          <option value="33601">- 재생섬유직물(33601)</option>
          <option value="33701">- 화학섬유 편직물(33701)</option>
          <option value="33Z01">- 기 타(33Z01)</option>
          <option value="34000">라. 기타 섬유제품(34000)</option>
          <option value="34101">- 튤·레이스 등(34101)</option>
          <option value="34201">- 끈과 망(34201)</option>
          <option value="34301">- 부물류(34301)</option>
          <option value="34401">- 부직포(34401)</option>
          <option value="34Z01">- 기 타(34Z01)</option>
          <option value="35000">마. 의 류(35000)</option>
          <option value="35101">- 직물제 의류(35101)</option>
          <option value="35201">- 편물제 의류(35201)</option>
          <option value="35301">- 가죽의류(35301)</option>
          <option value="35401">- 기타 의류(35401)</option>
          <option value="35501">- 양말 및 장갑 등(35501)</option>
          <option value="35601">- 기타 의류 부속품(35601)</option>
          <option value="36000">바. 목제품(36000)</option>
          <option value="36101">- 합 판(36101)</option>
          <option value="36201">- 목제품(36201)</option>
          <option value="36301">- 가 구(36301)</option>
          <option value="37000">사. 가죽, 고무 및 신발류(37000)</option>
          <option value="37101">- 가죽제품(37101)</option>
          <option value="37201">- 고무타이어 및 튜브(37201)</option>
          <option value="37301">- 기타 고무제품(37301)</option>
          <option value="37401">- 신발류(37401)</option>
          <option value="38000">아. 귀금속 및 보석류(38000)</option>
          <option value="38101">- 금(38101)</option>
          <option value="38201">- 은(38201)</option>
          <option value="38301">- 다이아몬드(38301)</option>
          <option value="38401">- 기타 보석류(38401)</option>
          <option value="39000">자. 기타 비금속 광물제품(39000)</option>
          <option value="39101">- 시멘트(39101)</option>
          <option value="39201">- 유 리(39201)</option>
          <option value="39301">- 도자기(39301)</option>
          <option value="3A000">차. 완구, 운동용구 및 악기(3A000)</option>
          <option value="3A101">- 완 구(3A101)</option>
          <option value="3A201">- 운동용구(3A201)</option>
          <option value="3A301">- 피아노 및 기타 악기(3A301)</option>
          <option value="3Z000">카. 기 타(3Z000)</option>
          <option value="3Z101">- 종이류(3Z101)</option>
          <option value="3Z201">- 프라스틱 제품(3Z201)</option>
          <option value="3Z301">- 여행용구(3Z301)</option>
          <option value="3Z401">- 장식용 세공품(3Z401)</option>
          <option value="3Z501">- 양초, 성냥, 라이터 등(3Z501)</option>
          <option value="3Z601">- 우산과 파라솔(3Z601)</option>
          <option value="3Z701">- 가발과 가눈썹(3Z701)</option>
          <option value="3Z801">- 안경테와 장착구(3Z801)</option>
          <option value="3Z901">- 낚시대(3Z901)</option>
          <option value="3ZA01">- 전구류(3ZA01)</option>
          <option value="3ZB01">- 칼·훠어크(3ZB01)</option>
          <option value="3ZZ01">- 기 타(3ZZ01)</option>
          <option value="40000">4. 중화학 공업품(40000)</option>
          <option value="41000">가. 화공품(41000)</option>
          <option value="41101">- 스티렌(41101)</option>
          <option value="41201">- 테레프탈산(41201)</option>
          <option value="41301">- 기타 유기 및 무기화합물(41301)</option>
          <option value="41401">- 의약품(41401)</option>
          <option value="41501">- 화학비료(41501)</option>
          <option value="41601">- 폴리에틸렌(41601)</option>
          <option value="41701">- 폴리프로필렌(41701)</option>
          <option value="41801">- 폴리에스테르(41801)</option>
          <option value="41901">- 기타 인조프라스틱 및 동 제품(41901)</option>
          <option value="41A01">- 염료와 색소(41A01)</option>
          <option value="41B01">- 기타 화학제품(41B01)</option>
          <option value="42000">나. 철강제품(42000)</option>
          <option value="42101">- 철강의 괴(42101)</option>
          <option value="42201">- 철강의 봉 및 형강(42201)</option>
          <option value="42301">- 철강의 판(42301)</option>
          <option value="42401">- 합금강의 판(42401)</option>
          <option value="42501">- 아연도 강판(42501)</option>
          <option value="42601">- 철강관(42601)</option>
          <option value="42701">- 철강의 주물과 단조물(42701)</option>
          <option value="42801">- 비철금속(42801)</option>
          <option value="42901">- 연선·망(42901)</option>
          <option value="42A01">- 못·스크류·볼트·너트등(42A01)</option>
          <option value="42B01">- 기타의 금속제품(42B01)</option>
          <option value="43000">다. 기계류와 정밀기기(43000)</option>
          <option value="43101">- 사무용기기(43101)</option>
          <option value="43201">- 섬유·피혁기계(43201)</option>
          <option value="43301">- 기타 일반 기계류(43301)</option>
          <option value="43401">- 전기동력기계(43401)</option>
          <option value="43501">- 정밀기기(43501)</option>
          <option value="43601">- 시 계(43601)</option>
          <option value="43A00">- 반도체 제조용 장비(43A00)</option>
          <option value="43A01">(제조용 장비)(43A01)</option>
          <option value="43A02">(장비부품)(43A02)</option>
          <option value="43B01">- 디스플레이패널 제조용장비(43B01)</option>
          <option value="44000">라. 전기, 전자제품(44000)</option>
          <option value="44100">- 가전제품(44100)</option>
          <option value="44101">(TV)(44101)</option>
          <option value="44102">(VTR)(44102)</option>
          <option value="44103">(냉장고)(44103)</option>
          <option value="44104">(세탁기)(44104)</option>
          <option value="44105">(전자레인지)(44105)</option>
          <option value="44106">(에어콘)(44106)</option>
          <option value="44107">(음향기기)(44107)</option>
          <option value="44108">(기타 가전제품)(44108)</option>
          <option value="44200">- 정보통신기기(44200)</option>
          <option value="44201">(컴퓨터)(44201)</option>
          <option value="44202">(컴퓨터 주변기기)(44202)</option>
          <option value="44203">(방송기기)(44203)</option>
          <option value="44204">(유선통신기기)(44204)</option>
          <option value="44205">(무선통신기기)(44205)</option>
          <option value="44300">- 반도체(44300)</option>
          <option value="44301">(메모리 반도체)(44301)</option>
          <option value="44302">(프로세스와 콘트롤러)(44302)</option>
          <option value="44303">(증폭기)(44303)</option>
          <option value="44304">(기타 집적회로 반도체 및 부품)(44304)</option>
          <option value="44305">(트랜지스터)(44305)</option>
          <option value="44306">(다이오드)(44306)</option>
          <option value="44307">(기타 개별소자 반도체 및 부품)(44307)</option>
          <option value="44308">(실리콘 웨이퍼)(44308)</option>
          <option value="44400">- 기타 전기 전자제품(44400)</option>
          <option value="44401">(회로보호접속기)(44401)</option>
          <option value="44402">(전자관류)(44402)</option>
          <option value="44403">(축전기 및 전지)(44403)</option>
          <option value="44404">(인쇄회로)(44404)</option>
          <option value="44A00">- 디스플레이 패널(44A00)</option>
          <option value="44A01">(액정디바이스)(44A01)</option>
          <option value="44A02">(기타 디스플레이 패널)(44A02)</option>
          <option value="44Z01">(기타)(44Z01)</option>
          <option value="45000">마. 수송장비(45000)</option>
          <option value="45101">- 승용자동차(45101)</option>
          <option value="45201">- 화물 자동차(45201)</option>
          <option value="45301">- 자동차 부품(45301)</option>
          <option value="45401">- 철도차량(45401)</option>
          <option value="45501">- 선 박(45501)</option>
          <option value="45600">- 기타 수송기기(45600)</option>
          <option value="45601">(콘테이너)(45601)</option>
          <option value="45602">(자전거)(45602)</option>
          <option value="45699">(기 타)(45699)</option>
          <option value="4Z000">바. 기 타(4Z000)</option>
          <option value="4Z001">- 기 타(4Z001)</option>
        </select>
      ) : (
        <select
          name="itemCode"
          id="itemCode"
          onChange={(e) =>
            dispatch(CityAndProvineceImportExportCodeChoice(e.target.value))
          }
          style={style.selectBox}
        >
          <option value="">선택하세요</option>
          <option value="10000">1. 소비재(10000)</option>
          <option value="11000">가. 곡물(11000)</option>
          <option value="11101">- 소맥(11101)</option>
          <option value="11201">- 쌀(11201)</option>
          <option value="11301">- 대두(11301)</option>
          <option value="11400">- 옥수수와 사료(11400)</option>
          <option value="11401">(옥수수)(11401)</option>
          <option value="11402">(사 료)(11402)</option>
          <option value="11501">- 기타 곡물(11501)</option>
          <option value="12000">나. 직접소비재(12000)</option>
          <option value="12101">- 담배(12101)</option>
          <option value="12200">- 음료 및 주류(12200)</option>
          <option value="12201">(음 료)(12201)</option>
          <option value="12202">(주 류)(12202)</option>
          <option value="12300">- 기타 직접소비재(12300)</option>
          <option value="12301">(소고기)(12301)</option>
          <option value="12302">(돼지고기)(12302)</option>
          <option value="12303">(양고기)(12303)</option>
          <option value="12304">(어 류)(12304)</option>
          <option value="12305">(고 추)(12305)</option>
          <option value="12306">(마 늘)(12306)</option>
          <option value="12307">(양 파)(12307)</option>
          <option value="12308">(참 깨)(12308)</option>
          <option value="12309">(후 추)(12309)</option>
          <option value="12310">(바나나)(12310)</option>
          <option value="12311">(커피두)(12311)</option>
          <option value="12312">(코코아)(12312)</option>
          <option value="12313">(조제식품)(12313)</option>
          <option value="12399">(기 타)(12399)</option>
          <option value="13000">다. 내구소비재(13000)</option>
          <option value="13100">- 가전제품(13100)</option>
          <option value="13101">(TV)(13101)</option>
          <option value="13102">(VTR)(13102)</option>
          <option value="13103">(냉장고)(13103)</option>
          <option value="13104">(세탁기)(13104)</option>
          <option value="13105">(에어콘)(13105)</option>
          <option value="13106">(음향기기)(13106)</option>
          <option value="13107">(기타 가전제품)(13107)</option>
          <option value="13201">- 가사용구(13201)</option>
          <option value="13300">- 승용차·2륜차 및 자전거(13300)</option>
          <option value="13301">(승용차)(13301)</option>
          <option value="13302">(2륜차)(13302)</option>
          <option value="13303">(자전거 등)(13303)</option>
          <option value="13401">- 시 계(13401)</option>
          <option value="13500">- 악기류 및 완구류(13500)</option>
          <option value="13501">(악 기)(13501)</option>
          <option value="13502">(완 구)(13502)</option>
          <option value="13600">- 귀금속 및 보석류(13600)</option>
          <option value="13601">(금)(13601)</option>
          <option value="13602">(은)(13602)</option>
          <option value="13603">(다이아몬드)(13603)</option>
          <option value="13604">(기타 보석류)(13604)</option>
          <option value="13701">- 골프용품(13701)</option>
          <option value="13801">- 프라스틱 제품(13801)</option>
          <option value="13901">- 잡제품(13901)</option>
          <option value="14000">라. 비내구 소비재(14000)</option>
          <option value="14101">- 인쇄물(14101)</option>
          <option value="14200">- 의 류(14200)</option>
          <option value="14201">(섬유의류)(14201)</option>
          <option value="14202">(가죽의류)(14202)</option>
          <option value="14203">(모피의류)(14203)</option>
          <option value="14Z01">- 기 타(14Z01)</option>
          <option value="15000">마. 간이세율 적용분(15000)</option>
          <option value="15101">- 간이세율 적용물품(15101)</option>
          <option value="20000">2. 원자재(20000)</option>
          <option value="21000">가. 연 료(21000)</option>
          <option value="21100">- 에너지류(21100)</option>
          <option value="21101">(원 유)(21101)</option>
          <option value="21102">(석 탄)(21102)</option>
          <option value="21103">(가 스)(21103)</option>
          <option value="21200">- 석유제품(21200)</option>
          <option value="21201">(나프타)(21201)</option>
          <option value="21202">(방카C유)(21202)</option>
          <option value="21203">(등 유)(21203)</option>
          <option value="21299">(기 타)(21299)</option>
          <option value="22000">나. 광 물(22000)</option>
          <option value="22101">- 조광물(22101)</option>
          <option value="22201">- 철 광(22201)</option>
          <option value="22301">- 고 철(22301)</option>
          <option value="22401">- 비철금속광(22401)</option>
          <option value="22501">- 비철금속의 설(22501)</option>
          <option value="23000">다. 경공업 원료(23000)</option>
          <option value="23101">- 원 당(23101)</option>
          <option value="23201">- 당 밀(23201)</option>
          <option value="23301">- 엽연초(23301)</option>
          <option value="23401">- 원 피(23401)</option>
          <option value="23500">- 고 무(23500)</option>
          <option value="23501">(천연고무)(23501)</option>
          <option value="23502">(합성고무)(23502)</option>
          <option value="23600">- 목 재(23600)</option>
          <option value="23601">(원 목)(23601)</option>
          <option value="23602">(목 제)(23602)</option>
          <option value="23700">- 펄 프 및 고지(23700)</option>
          <option value="23701">(펄 프)(23701)</option>
          <option value="23702">(고 지)(23702)</option>
          <option value="23801">- 원 모(23801)</option>
          <option value="23901">- 원 면(23901)</option>
          <option value="24000">라. 유 지(24000)</option>
          <option value="24101">- 우 지(24101)</option>
          <option value="24201">- 식물성 유지(24201)</option>
          <option value="24301">- 기타의 유지(24301)</option>
          <option value="25000">마. 섬유류(25000)</option>
          <option value="25101">- 섬유사(25101)</option>
          <option value="25201">- 면직물(25201)</option>
          <option value="25301">- 견직물(25301)</option>
          <option value="25401">- 합성섬유(25401)</option>
          <option value="25501">- 면직포(25501)</option>
          <option value="25601">- 기타 섬유류(25601)</option>
          <option value="26000">바. 화공품(26000)</option>
          <option value="26101">- 스티렌(26101)</option>
          <option value="26201">- 프로필렌(26201)</option>
          <option value="26301">- 2-염화에틸렌(26301)</option>
          <option value="26401">- 에칠렌 그리콜(26401)</option>
          <option value="26501">- 초산에스텔(26501)</option>
          <option value="26601">- 프탈산류(26601)</option>
          <option value="26701">- 아미노 화합물(26701)</option>
          <option value="26801">- 카프로락탐(26801)</option>
          <option value="26901">- 기타 유기화합물(26901)</option>
          <option value="26A01">- 가성소다(26A01)</option>
          <option value="26B01">- 알루미나(26B01)</option>
          <option value="26C01">- 기타 무기화합물(26C01)</option>
          <option value="26D01">- 분산성 염료(26D01)</option>
          <option value="26E01">- 기타의 염료와 색소(26E01)</option>
          <option value="26F01">- 의약품(26F01)</option>
          <option value="26G01">- 화학비료(26G01)</option>
          <option value="26H01">- 폴리에틸렌(26H01)</option>
          <option value="26I01">- 기타의 수지(26I01)</option>
          <option value="26J01">- 기타 화학제품(26J01)</option>
          <option value="27000">사. 철강재(27000)</option>
          <option value="27101">- 무 쇠(27101)</option>
          <option value="27201">- 재압연용 코일(27201)</option>
          <option value="27301">- 철강의 괴(27301)</option>
          <option value="27401">- 봉강 및 형강(27401)</option>
          <option value="27501">- 강 판(27501)</option>
          <option value="27601">- 강 관(27601)</option>
          <option value="27701">- 기타의 철강재(27701)</option>
          <option value="28000">아. 비철금속(28000)</option>
          <option value="28101">- 동(28101)</option>
          <option value="28201">- 알루미늄(28201)</option>
          <option value="28301">- 연(28301)</option>
          <option value="28401">- 아연(28401)</option>
          <option value="28501">- 주석(28501)</option>
          <option value="28601">- 니켈(28601)</option>
          <option value="28701">- 기타의 비철금속(28701)</option>
          <option value="2Z000">자. 기 타(2Z000)</option>
          <option value="2Z101">- 시멘트(2Z101)</option>
          <option value="2Z201">- 유기계면활성제(2Z201)</option>
          <option value="2Z301">- 내화벽돌류(2Z301)</option>
          <option value="2Z401">- 고무제품(2Z401)</option>
          <option value="2Z501">- 종이류(2Z501)</option>
          <option value="2Z601">- 유리 및 유리제품(2Z601)</option>
          <option value="2ZZ01">- 기 타(2ZZ01)</option>
          <option value="30000">3. 자본재(30000)</option>
          <option value="31000">가. 기계류와 정밀기기(31000)</option>
          <option value="31100">- 기계류(31100)</option>
          <option value="31101">(원동기)(31101)</option>
          <option value="31102">(사무기기)(31102)</option>
          <option value="31103">(금속공작기계)(31103)</option>
          <option value="31104">(섬유기계)(31104)</option>
          <option value="31105">(중 기)(31105)</option>
          <option value="31106">(제분 및 제품기계)(31106)</option>
          <option value="31107">(펄프가공기계)(31107)</option>
          <option value="31108">(활자 및 인쇄기계)(31108)</option>
          <option value="31109">(냉장·냉동기계)(31109)</option>
          <option value="31110">(가열 및 건조기)(31110)</option>
          <option value="31111">(펌 프)(31111)</option>
          <option value="31112">(분리기와 청정기)(31112)</option>
          <option value="31113">(운반 하역기계)(31113)</option>
          <option value="31114">(목재등 가공기계)(31114)</option>
          <option value="31115">(기타의 기계)(31115)</option>
          <option value="31116">(베어링)(31116)</option>
          <option value="31117">(코크와 밸브)(31117)</option>
          <option value="31118">(기아와 전동축)(31118)</option>
          <option value="31119">(기타의 기계부분품)(31119)</option>
          <option value="31200">- 정밀기기(31200)</option>
          <option value="31201">(측정시험기)(31201)</option>
          <option value="31202">(광학기기)(31202)</option>
          <option value="31203">(의료용 기기)(31203)</option>
          <option value="31299">(기 타)(31299)</option>
          <option value="31A00">- 반도체 제조용 장비(31A00)</option>
          <option value="31A01">(제조용 장비)(31A01)</option>
          <option value="31A02">(장비부품)(31A02)</option>
          <option value="31B01">- 디스플레이패널 제조용장비(31B01)</option>
          <option value="32000">나. 전기·전자기기(32000)</option>
          <option value="32101">- 발전기(32101)</option>
          <option value="32201">- 전동기(32201)</option>
          <option value="32301">- 변류기와 변압기(32301)</option>
          <option value="32401">- 회로보호접속기(32401)</option>
          <option value="32501">- 전기계측 및 조정기기(32501)</option>
          <option value="32601">- 전기용접기기(32601)</option>
          <option value="32701">- 축전기 및 전지(32701)</option>
          <option value="32801">- 인쇄회로(32801)</option>
          <option value="32901">- 기타의 전기기기(32901)</option>
          <option value="32A00">- 정보통신기기(32A00)</option>
          <option value="32A01">(컴퓨터)(32A01)</option>
          <option value="32A02">(컴퓨터 주변기기)(32A02)</option>
          <option value="32A03">(방송기기)(32A03)</option>
          <option value="32A04">(유선통신기기)(32A04)</option>
          <option value="32A05">(무선통신기기)(32A05)</option>
          <option value="32B00">- 반도체(32B00)</option>
          <option value="32B01">(메모리 반도체)(32B01)</option>
          <option value="32B02">(프로세스와 콘트롤러)(32B02)</option>
          <option value="32B03">(증폭기)(32B03)</option>
          <option value="32B04">(기타 집적회로 반도체 및 부품)(32B04)</option>
          <option value="32B05">(트랜지스터)(32B05)</option>
          <option value="32B06">(다이오드)(32B06)</option>
          <option value="32B07">(기타 개별소자 반도체및 부품)(32B07)</option>
          <option value="32B08">(실리콘 웨이퍼)(32B08)</option>
          <option value="32C00">- 디스플레이 패널(32C00)</option>
          <option value="32C01">(액정디바이스)(32C01)</option>
          <option value="32C02">(기타 디스플레이 패널)(32C02)</option>
          <option value="32D01">- 전자관류(32D01)</option>
          <option value="33000">다. 수송장비(33000)</option>
          <option value="33101">- 화물 자동차(33101)</option>
          <option value="33201">- 자동차 부품(33201)</option>
          <option value="33301">- 철도차량(33301)</option>
          <option value="33401">- 항공기(33401)</option>
          <option value="33501">- 선 박(33501)</option>
          <option value="33601">- 기타 수송기기(33601)</option>
          <option value="3Z000">라. 기 타(3Z000)</option>
          <option value="3Z001">- 기 타(3Z001)</option>
        </select>
      )}
    </>
  );
};

export default NatureSelect;

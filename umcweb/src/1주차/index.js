import { useState } from "react";

export default function Index(){

    const [yongmin, setYongmin] = useState('초기값');

    const set = () =>{
        setYongmin("하이")
    } 

    const myName = {
        seo : "서",
        jung : "정",
        ho : "호",
    }

    const {seo, ...hoya} = myName;

    const numbers = [10, 20, 30, 40, 50];

    // result의 초기값은 0이라고 생각하면 쉽다.
    const sum = numbers.reduce((result, number) => {
        return result + number;
    }, 10);

    return (
        <>
            <div>
                {yongmin} {/* 현재 상태 값 출력 */}
                <button onClick={set}>값 변경</button> {/* 버튼 클릭 시 set 함수 호출 */}
                {yongmin} {/* 변경된 상태 값 출력 */}
                {seo}
                {JSON.stringify(hoya)} {/* jung과 ho가 포함된 객체를 문자열로 변환하여 출력 */}
                {hoya.jung}
                {hoya.ho}
                {sum}
            </div>
        </>
    );
}
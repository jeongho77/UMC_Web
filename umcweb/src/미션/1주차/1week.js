import s from './1week.module.css';
import React from 'react';

export default function Index() {

    let newWorkDiv, newP;

    const newDiv = (value) => {

        newWorkDiv = document.createElement('div');
        newWorkDiv.className = s.toDoContent; // CSS Modules 사용

        newP = document.createElement('p');
        newP.textContent = value;

        
    }
    
    const toDoAdd = (event) => {
        let value;

        if (event.key === 'Enter' && event.target.value.trim()) {
            value = event.target.value.trim(); // 공백 제거
            event.target.value = ''; // 초기화

            newDiv(value)

            const todoList = document.getElementById("todoList");

            let button = document.createElement('button');
            button.textContent = "완료"; // 버튼 텍스트 설정
            button.setAttribute('data-value', value);
            button.onclick = (event) => {
                const finishList = document.getElementById("finishList");
                // 완료 버튼 클릭 시 동작 (예: 완료 목록으로 이동)
                console.log(`"${value}" 완료됨!`);
                const completedValue = event.target.getAttribute('data-value');
                newDiv(completedValue)
                
                //버튼 만들기
                let button = document.createElement('button');
                button.textContent = "삭제"; // 버튼 텍스트 설정
                button.onclick = (event) => {
                    const finishBtn = event.target
                    finishBtn.parentNode.remove();
                }
                newWorkDiv.appendChild(newP);
                newWorkDiv.appendChild(button);

                if(finishList.firstChild) {
                    finishList.insertBefore(newWorkDiv, finishList.firstChild);
                } else {
                    finishList.appendChild(newWorkDiv);
                }

                const btn = event.target //버튼
                const parentElement = btn.parentNode; //버튼의 부모
                parentElement.remove(); //부모 삭제 

                

            };

            newWorkDiv.appendChild(newP);
            newWorkDiv.appendChild(button);

            if (todoList.firstChild) {
                todoList.insertBefore(newWorkDiv, todoList.firstChild); // 첫 번째 자식 앞에 삽입
            } else {
                todoList.appendChild(newWorkDiv); // 만약 자식이 없으면 appendChild로 추가
            }
        }
    }



    return (
        <>
            <main className={s.container}>
                <header className={s.title}>UMC Study Plan</header>
                <article className={s.todoListContainer}>
                    <input className={s.inputText} onKeyUp={toDoAdd} type="text" name="" id="inputText" />

                    <div className={s.list}>
                        <div className={s.toDo}>
                            <p className={s.toDoTitle}>해야 할 일</p>
                            <div className={s.toDoList} id='todoList'>
                                {/* a */}
                            </div>
                        </div>
                        <div className={s.finish}>
                            <p className={s.finishTitle}>해낸 일</p>
                            <div className={s.finishList} id='finishList'>
                                {/* <div className={s.toDoContent}>
                                    <p>HTML</p>
                                    <button>삭제</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </article>
            </main>

        </>
    )
}
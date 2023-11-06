// 할일 등록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";

const TodoInfo = async function () {
    // URLSearchParams : URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드
    const params = new URLSearchParams(location.search);
    const _id = params.get("_id");

    const page = document.createElement("div");
    page.setAttribute("id", "page");

    const content = document.createElement("div");
    // const text = document.createTextNode(`_id=${_id} 상세 조회 화면`);
    // content.appendChild(text);

    // api 통신
    try {
        const getUrl = await axios(
            `http://localhost:33088/api/todolist/${_id}`
        );
        const data = getUrl.data.item;
        console.log(data);

        // title
        const todoTitle = document.createElement("h2");
        const titleTxt = document.createTextNode(data.title);
        todoTitle.appendChild(titleTxt);
        content.appendChild(todoTitle);

        // 수정 btn
        const editBtn = document.createElement("a");
        const editBtnTxt = document.createTextNode("수정하기");
        editBtn.setAttribute("herf", `update?_id=${_id}`);
        // editBtn.href = `update?_id=${_id}`;
        editBtn.appendChild(editBtnTxt);
        content.appendChild(editBtn);
    } catch (error) {
        console.error(err);
    }

    page.appendChild(Header("할일 상세 내용"));
    page.appendChild(content);
    page.appendChild(Footer());

    return page;
};

export default TodoInfo;

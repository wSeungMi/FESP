// 제네릭 사용하기
(() => {
    // <select>의 <option> => name, value, selected
    interface DropDown<T> {
        value: T;
        selected: boolean;
    }

    // zipcode를 위한 함수를 이름만 바꿔서 또 만들어줘야 함.
    // function createDropdown(list: CityDropdown[] | ZipcodeDropdown[]): string {
    function createDropdown<T>(list: DropDown<T>[]): string {
        let result = "<select>\n";
        list.forEach((item) => {
            result += `<option ${item.selected ? "selected" : ""}>${
                item.value
            }</option>\n`;
        });
        result += "</select>";
        return result;
    }

    var cityList: DropDown<string>[] = [
        { value: "서울시", selected: false },
        { value: "인천시", selected: true },
        { value: "광주시", selected: false },
    ];

    // cityList는 string으로 지정한 DropDown 배열
    const cityTag = createDropdown<string>(cityList);
    console.log(cityTag);

    var zipcodeList: DropDown<number>[] = [
        { value: 12345, selected: false },
        { value: 34567, selected: false },
        { value: 56789, selected: true },
    ];
    const zipcodeTag = createDropdown<number>(zipcodeList);
    console.log(zipcodeTag);
})();

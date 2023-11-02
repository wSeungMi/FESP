(() => {
    // <select>의 <option> => name, value, selected
    interface CityDropdown {
        value: string;
        selected: boolean;
    }

    interface ZipcodeDropdown {
        value: number;
        selected: boolean;
    }

    // zipcode를 위한 함수를 이름만 바꿔서 또 만들어줘야 함.
    // function createDropdown(list: CityDropdown[] | ZipcodeDropdown[]): string {
    function createDropdown(list: CityDropdown[]): string {
        /**
         * <select>
         * <option>서울시</option>
         * <option selected>인천시</option>
         * <option>광주시</option>
         * </select>
         * */
        let result = "<select>\n";
        list.forEach((item) => {
            // if (item.selected === true) {
            //     result += `<option selected>${item.value}</option>\n`;
            // } else {
            //     result += `<option>${item.value}</option>\n`;
            // }
            result += `<option ${item.selected ? "selected" : ""}>${
                item.value
            }</option>\n`;
        });
        result += "</select>";
        return result;
    }

    function createDropdown2(list: ZipcodeDropdown[]): string {
        let result = "<select>\n";
        list.forEach((item) => {
            result += `<option ${item.selected ? "selected" : ""}>${
                item.value
            }</option>\n`;
        });
        result += "</select>";
        return result;
    }

    var cityList: CityDropdown[] = [
        { value: "서울시", selected: false },
        { value: "인천시", selected: true },
        { value: "광주시", selected: false },
    ];

    const cityTag = createDropdown(cityList);
    console.log(cityTag);

    var zipcodeList: ZipcodeDropdown[] = [
        { value: 12345, selected: false },
        { value: 34567, selected: false },
        { value: 56789, selected: true },
    ];
    const zipcodeTag = createDropdown2(zipcodeList);
    console.log(zipcodeTag);
})();

let userProfile = document.querySelector(".profile");
if (localStorage.length === 0) {
    userProfile.innerHTML = "<h2> Bạn chưa làm bất cứ 1 bài test nào cả!</h2>"
} else {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    ["STT", "Số câu đúng", "Số câu sai", "Số câu không làm", "Điểm"].forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 1; i <= localStorage.length; i++) {
        let row = document.createElement("tr");
        let res = JSON.parse(localStorage.getItem(i.toString()));
        ["stt", "t", "f", "n", "d"].forEach((text, index) => {
            let td = document.createElement("td");
            td.textContent = res[text];
            td.setAttribute("data-label", ["STT", "Số câu đúng", "Số câu sai", "Số câu không làm", "Điểm"][index]);
            row.appendChild(td);
        });
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    userProfile.appendChild(table);
}
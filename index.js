let dateEl = document.querySelector("#date");
console.log('I am connected.')
let today = new Date().toLocaleString().slice(0, 10);
let todayDay = new Date().toString().slice(0,3);

enToJpDate = {
    'Fri':'金曜日',
    'Sat': '土曜日'
}

const enDates = Object.keys(enToJpDate)
console.log(enDates[0])
console.log(enToJpDate['Fri'])
dateEl.innerHTML = `<p>${today}</p>`;
dateEl.innerHTML += `<p>${todayDay}</p>`
console.log(dateEl.innerHTML)

for (let i = 0; i < enDates.length;i++) {
    let date = enDates[i]
    console.log(date)
    if (dateEl.innerHTML.includes(date)) {
        dateEl.innerHTML = `<p>${today}</p><p>${enToJpDate[date]}</p>`
    }
}
    


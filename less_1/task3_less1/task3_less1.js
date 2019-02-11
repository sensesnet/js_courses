//  Реализовать функцию drawCalendar , которая принимает три аргумента - год, месяц,
// htmlElement и выводит в этот элемент календарь на месяц (дни недели начинаются с понедельника ).
function drawCalendar() {
    let methods;

    function clear() {
        return "";
    }

    function show(date, element) {
        // var equal = require('deep-equal');
        var year = date.substring(0, 4);
        var month = date.substring(5) - 1;
        var calendar = ['week', 'week', 'week', 'week', 'week', 'week'];
        var day = 1;

        for (var i = 1; i <= calendar.length; i++) {
            var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            do {
                var d = new Date(year, month, day);
                if (!(d.getMonth() === month)) break;
                console.log(d.toDateString());
                for (var wd = 1; wd <= week.length; wd++) {
                    if (d.toString().substring(0, 3) === week[wd - 1]) {
                        week[wd - 1] = day;
                        break;
                    }
                }
                day++;
            } while (!(d.toString().substring(0, 3) === 'Sun'));
            calendar[i - 1] = week;
        }
        return `<${element}>${calendar.join('<br>')}</${element}>`;
    }

    methods = {
        clear,
        show
    }
    return methods;
}
;

const calendar = new drawCalendar();

(() => {
    // actions
    const clearAction = document.querySelector('#clear');
    const showAction = document.querySelector('#show');
    const input = document.querySelector('#input');
    const result = document.querySelector('#calendar');

    showAction.addEventListener('click', () => {
        result.innerHTML = calendar.show(input.value, 'span');
    });

    clearAction.addEventListener('click', () => {
        input.value = calendar.clear();
        result.innerHTML = '';
    });
})()
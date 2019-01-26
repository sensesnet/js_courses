function show(date, element) {
    var equal = require('deep-equal');
    var year = date.substring(0, 4);
    var month = date.substring(5) - 1;
    var calendar = ['week', 'week', 'week', 'week', 'week', 'week'];
    var day = 1;

    for (var i = 1; i <= calendar.length; i++) {
        var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        do {
            var d = new Date(year, month, day);
            if (!equal(d.getMonth(),month)) break;
            console.log(d.toDateString());
            for (var wd = 1; wd <= week.length; wd++) {
                if (equal(d.toString().substring(0, 3), week[wd - 1])) {
                    week[wd - 1] = day;
                    break;
                }
            }
            day++;
        } while (!equal(d.toString().substring(0, 3), 'Sun'));
        calendar[i - 1] = week;
    }

    return `<${element}>${calendar.join('\n')}</${element}>`;
}

console.log(show("2018/12", "span"));
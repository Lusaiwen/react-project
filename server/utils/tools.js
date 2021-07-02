exports.getDateNow = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = format(date.getMonth() + 1);
    const day = format(date.getDate());
    const hour = format(date.getHours());
    const min = format(date.getMinutes());

    return `${year}-${month}-${day} ${hour}:${min}`;
};

function format(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

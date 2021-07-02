export const throttle = (func, delay = 200) => {
    let prev = Date.now();
    return (...args) => {
        const newTime = Date.now();
        const context = this;
        if (newTime - prev > delay) {
            func.apply(context, args);
            prev = newTime;
        }
    };
};

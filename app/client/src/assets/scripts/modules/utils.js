const ThisModule = {};

ThisModule.debounce = (fn, delay) => {
    let timer = null;

    return function ret() {
        const self = this;
        const args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args);
        }, delay);
    };
};

export default ThisModule;

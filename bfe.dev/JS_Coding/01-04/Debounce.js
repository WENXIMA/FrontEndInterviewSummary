const myDebounce = (fn, wait = 1000) => {
    let timeOut = null;
    return function() {
        clearTimeout(timeOut); // every time, user input. It will clear the setTimeOut.
        timeOut = setTimeout(() => { //create a new timeout, it will avoid execute fn function after still have more input during the interval.
            fn.apply(this, arguments);
        }, 500);
    }
}
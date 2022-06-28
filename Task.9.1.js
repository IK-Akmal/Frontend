// Перепишите класс
// важность: 5
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.


class Clock {
    constructor() { }

    setZero(time) {
        if (time < 10)
            return "0" + time;
        return time
    };

    render() {
        let date = new Date();

        let hours = date.getHours();
        hours = this.setZero(hours);

        let min = date.getMinutes();
        min = this.setZero(min);

        let seconds = date.getSeconds();
        seconds = this.setZero(seconds);


        console.log(`${hours}:${min}:${seconds}`);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
        setInterval(()=>this.stop(), 5000);
    }

    stop() {
        clearInterval(this.timer);
    }

}

let clock = new Clock();

clock.start();
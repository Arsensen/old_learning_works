module.exports = {

    subscribers: [],

    on: function (event, subscriber, handler) {
        if(this.subscribers.indexOf(subscriber) === -1) {
            this.subscribers.push(subscriber);
        }

        var keys = Object.keys(subscriber);
        if(keys.indexOf(event) === -1) {
            subscriber[event] = [];
        }
        subscriber[event].push(handler);

        return this;
    },

    
    off: function (event, subscriber) {
        if(this.subscribers.indexOf(subscriber) !== -1 && subscriber[event]) {
            //var i = this.subscribers.indexOf(subscriber);
            //this.subscribers.splice(i, 1);
            delete subscriber[event];
        }
        return this;
    },

    
    emit: function (event) {
        this.subscribers.map(function (subscriber) {
            if(subscriber[event]) {
                var handlers = subscriber[event];
                for (let i = 0; i < handlers.length; i++) {
                    handlers[i].apply(subscriber);
                }
            }
        });
        return this;
    }
}

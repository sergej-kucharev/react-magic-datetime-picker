export class Service {
    constructor({
        value,        
    }) {
        Object.defineProperties(this, {
            value: { get: () => value, },
        });
    }
};

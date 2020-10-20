export class Service {
    constructor({
        format,
        locale,
        value,
    }) {
        Object.defineProperties(this, {
            format: { get: () => format, },
            locale: { get: () => locale, },
            value: { get: () => value, },
        });
    }
};

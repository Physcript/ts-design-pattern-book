"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
exports.default = () => {
    // singleton
    // allow only 1 instance
    var _AirlineTrip_airlineOptions;
    class Singleton {
        constructor(_data) {
            this.data = _data;
        }
        static getInstance(d) {
            if (!Singleton._instance) {
                this._instance = new Singleton(d);
            }
            return this._instance;
        }
    }
    const theOne = Singleton.getInstance('Neo');
    const theTwo = Singleton.getInstance('Teo');
    class AirlineTrip {
        constructor(options) {
            _AirlineTrip_airlineOptions.set(this, void 0);
            __classPrivateFieldSet(this, _AirlineTrip_airlineOptions, options, "f");
        }
        updateFromDate(newDate) {
            __classPrivateFieldGet(this, _AirlineTrip_airlineOptions, "f").fromDate = newDate;
            return this;
        }
        updateToDate(newDate) {
            __classPrivateFieldGet(this, _AirlineTrip_airlineOptions, "f").toDate = newDate;
            return this;
        }
        updateTo(newTo) {
            __classPrivateFieldGet(this, _AirlineTrip_airlineOptions, "f").to = newTo;
            return this;
        }
        updateFrom(newFrom) {
            __classPrivateFieldGet(this, _AirlineTrip_airlineOptions, "f").from = newFrom;
            return this;
        }
        updateClass(newClass) {
            __classPrivateFieldGet(this, _AirlineTrip_airlineOptions, "f").class = newClass;
            return this;
        }
        getData() {
            console.log(__classPrivateFieldGet(this, _AirlineTrip_airlineOptions, "f"));
        }
    }
    _AirlineTrip_airlineOptions = new WeakMap();
    const summerTrip = new AirlineTrip({
        from: 'LAX',
        to: 'MIA',
        fromDate: new Date(),
        toDate: new Date('06/28/2022'),
        class: 'Economy'
    });
    summerTrip.updateClass('First');
    // 
    //
    //
    //
    // Factory abstrat
};
class DevelopmentLogger {
    info(message) {
        console.warn(message);
    }
    warn(message) {
        console.warn(message);
    }
    debug(message) {
        console.debug(message);
    }
    error(message) {
        console.error(message);
    }
}
class ProductionLogger {
    info(message) { }
    warn(message) {
        console.warn(message);
    }
    debug(message) { }
    error(message) {
        console.error(message);
    }
}
class LoggerFactory {
    static createLogger() {
        if (process.env.NODE_ENV === 'production') {
            return new ProductionLogger();
        }
        else {
            return new DevelopmentLogger();
        }
    }
}
exports.LoggerFactory = LoggerFactory;

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
exports.default = () => {
    var __User_name;
    const serviceConfig = {
        port: 3000,
        basePath: "http://localhost",
        enableStripePayments: false,
    };
    const serviceConfigCheked = {
        port: 3000,
        basePath: 'http://localhost',
        enableStripePayments: false
    };
    let PRIORITY;
    (function (PRIORITY) {
        PRIORITY[PRIORITY["DEFAULT"] = 0] = "DEFAULT";
        PRIORITY[PRIORITY["LOW"] = 1] = "LOW";
        PRIORITY[PRIORITY["HIGH"] = 2] = "HIGH";
    })(PRIORITY || (PRIORITY = {}));
    class TodoItem {
        constructor(todoItemProps = {}) {
            this.title = 'Default item title';
            this.priority = PRIORITY.DEFAULT;
            Object.assign(this, todoItemProps);
        }
    }
    const update1 = {
        key: 'email',
        value: 'j'
    };
    function distance1(first, second) {
        return;
        {
            Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
        }
    }
    distance1({ x: 1, y: 2 }, { x: 3, y: 4 });
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    function printUsername(o) {
        console.log(o.name);
    }
    const loginInfo = {
        number: '123'
    };
    class SitesApiClient {
        getAll() {
            const res = [{ name: 'website' }];
            return Promise.resolve(res);
        }
        getOne(id) {
            return Promise.resolve({ name: 'website' });
        }
    }
    // inheritance
    class EventAction {
        trigger(delay = 0) {
            console.log(`Event triggered in ${delay}s.`);
        }
    }
    class NotificationEvent extends EventAction {
        sendEmail() {
            console.log('Sending email');
        }
    }
    const ev = new NotificationEvent();
    // ev.trigger()
    // ev.sendEmail()
    // ev.trigger(12)
    class A {
        constructor() {
            this.subClassCheck();
        }
        subClassCheck() {
            if (Object.getPrototypeOf(this) !== A.prototype) {
                throw new Error('Cannot extends this class');
            }
        }
    }
    let a = new A();
    class B extends A {
    }
    // let b = new B ()
    // error 
    // ecapsulation
    //
    class _User {
        constructor(name) {
            __User_name.set(this, void 0);
            __classPrivateFieldSet(this, __User_name, name, "f");
        }
        greet() {
            console.log(`User: ${__classPrivateFieldGet(this, __User_name, "f")}`);
        }
    }
    __User_name = new WeakMap();
    const theo = new _User('theo');
    // theo.greet()
    class Component {
        onInit() {
            console.log('called from component');
        }
    }
    class ReactComponent extends Component {
        onInit() {
            console.log('called in reactComponent');
            super.onInit();
        }
    }
    const c = new ReactComponent();
    c.onInit();
};

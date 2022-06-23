"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    //adapter
    //
    class ActionCreator {
        sendAction(action) {
            return new Promise((resolve, reject) => {
                console.log('Event created', action);
                resolve();
            });
        }
    }
    class Client {
        constructor() {
            this.actionCreator = new ActionCreator();
        }
        call() {
            this.actionCreator = new ActionCreator();
            this.actionCreator.sendAction('Hello');
            this.actionCreator = new EventAdapter();
            this.actionCreator.sendAction('Another Event');
        }
    }
    class EventAdapter {
        constructor(eventSender = new EventCreator()) {
            this.eventSender = eventSender;
        }
        sendAction(action) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.eventSender.sendEvent(action);
            });
        }
    }
    class EventCreator {
        sendEvent(action) {
            console.log('Event created', action);
        }
    }
    class Employee {
        constructor(metaData) {
            this.yearsWorked = metaData.yearsWorked;
        }
        getYearsWorked() {
            return this.yearsWorked;
        }
    }
    class Contructor {
        constructor(metaData) {
            this.hoursWorked = metaData.hoursWorked;
        }
        getHoursWorked() {
            return this.hoursWorked;
        }
    }
    class ContructorAdapter extends Employee {
        constructor(_constructor) {
            super({ yearsWorked: Math.round(_constructor.getHoursWorked() / 8760) });
        }
    }
    const employee1 = new Employee({ yearsWorked: 5 });
    const employee2 = new Employee({ yearsWorked: 6 });
    const constructor1 = new Contructor({ hoursWorked: 2080 });
    const employe3 = new ContructorAdapter(constructor1);
    const listEmployee = [employee1, employee2, employe3];
    class SendEmailEvent {
        send(message) {
            console.log('Currently sending event message');
        }
    }
    class LogEventDecorator {
        constructor(event) {
            this.event = event;
            this.event = event;
        }
        send(message) {
            console.log('Before sending event message', message);
            this.event.send(message); // forward to event
            console.log('after sending event message', message);
        }
    }
    const sendEmail = new SendEmailEvent();
    const logSendEmail = new LogEventDecorator(sendEmail);
    // logSendEmail.send('Hi')
    //
    class Car {
        drive() {
            return 'Driving';
        }
        reverse() {
            return 'Reversing';
        }
    }
    class Toyota extends Car {
        constructor(car) {
            super();
            this.car = car;
        }
        reverse() {
            return 'Reversing with backup camera';
        }
    }
    const car = new Toyota(new Car());
    class ServiceImplementationA {
        action() {
            console.log('Performing action Service A');
        }
    }
    class ServiceImplementationB {
        action() {
            console.log('Performing action Service B');
        }
    }
    class Facade {
        constructor(serviceA, serviceB) {
            this.serviceA = serviceA;
            this.serviceB = serviceB;
        }
        perform() {
            this.serviceA.action();
            this.serviceB.action();
        }
    }
    new Facade(new ServiceImplementationA(), new ServiceImplementationB);
    class WindowComposite {
        constructor() {
            this.children = [];
        }
        render() {
            let result = '<html>';
            for (let i = 0; i < this.children.length; i += 1) {
                result += this.children[i].render();
            }
            result += '</html>';
            return result;
        }
        addComponent(c) {
            this.children.push(c);
        }
        removeComponent(idx) {
            if (this.children.length <= idx) {
                throw new Error('index out of bound');
            }
            this.children.splice(idx, 1);
        }
    }
    class Button {
        constructor(text) {
            this.text = text;
        }
        render() {
            return `<button>${this.text}</button>`;
        }
    }
    const wc = new WindowComposite();
    wc.addComponent(new Button('Click me'));
    wc.addComponent(new Button('No Click'));
    class BoxContainer {
        constructor(items = [], boxArranger) {
            this.items = items;
            this.boxArranger = boxArranger;
        }
        arrangeItem(item) {
        }
    }
    class StraigthBoxContainer extends BoxContainer {
        arrangeItem(item) {
            this.items = this.boxArranger.arrangeItem(item, this.items);
        }
    }
    class ReversingBoxContainer extends BoxContainer {
        arrangeItem(item) {
            this.items = this.boxArranger.arrangeItem(item, this.items).reverse();
        }
    }
    class PutLastBoxArranger {
        arrangeItem(item, items) {
            items = items.concat(item);
            return items;
        }
    }
    class PutFirstBoxArranger {
        arrangeItem(item, items) {
            let result = items.slice();
            result.unshift(item);
            return result;
        }
    }
    const items = [{ id: '1', value: 'abc' }];
    const pfa = new PutFirstBoxArranger();
    const pla = new PutLastBoxArranger();
    const rv = new StraigthBoxContainer(items, pla);
    rv.arrangeItem({
        id: "3",
        "value": "dfa"
    });
    // console.log( rv.items )
    const sc = new StraigthBoxContainer(items, pfa);
    sc.arrangeItem({
        id: "3",
        value: "dfa"
    });
    // console.log(sc.items)
    //
    //
    // brige example
    class TraPaymentProcessor {
        processPayment(payment) {
            console.log('Processing payment');
            console.log(payment);
            console.log('Paymend processed');
        }
    }
    class Company1 {
        constructor(paymentProcessor) {
            this.name = 'Company1';
            this.paymentProcessor = paymentProcessor;
        }
        processPayment() {
            console.log('company1 prcoessing payment');
            this.paymentProcessor.processPayment('my first Payment');
        }
    }
    const company1 = new Company1(new TraPaymentProcessor());
    company1.processPayment();
};

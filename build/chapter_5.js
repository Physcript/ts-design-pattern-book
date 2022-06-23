"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// behavioral strategy
//
//
//
//
exports.default = () => {
    class ConcreteBillingStrategyA {
        calculate() {
            console.log('Calculating bill using first strategy');
        }
    }
    class ConcreteBillingStrategyB {
        calculate() {
            console.log('Calculating bill using second strategy');
        }
    }
    class BillContext {
        constructor(strategy) {
            this.strategy = strategy;
        }
        setStrategy(strategy) {
            this.strategy = strategy;
        }
        calculateBill() {
            this.strategy.calculate();
        }
    }
    class HTTPRequest {
        constructor(origin, params) {
            this.origin = origin;
            this.params = params;
        }
        getOrigin() {
            return this.origin;
        }
        getParams() {
            return this.params;
        }
    }
    class RequestHandler {
        constructor(next) {
            this.next = next;
        }
        handleRequest(request) {
            if (this.next !== null) {
                this.handleRequest(request);
            }
        }
    }
    class LogRequestHandler extends RequestHandler {
        handleRequest(request) {
            console.log(`Request with origin ${request.getOrigin()} handled by LogRequestHandler`);
            if (this.next !== null) {
                this.next.handleRequest(request);
            }
        }
    }
    class EmailRequestHandler extends RequestHandler {
        handlerRequest(request) {
            console.log(`Request with origin ${request.getOrigin()} handled by EmailRequestHandler`);
            if (this.next !== null) {
                this.next.handleRequest(request);
            }
        }
    }
    const req = new HTTPRequest('localhost', new Map().set('q', 'searchTerm'));
    class ConcreteCommandA {
        constructor(receiver) {
            this.receiver = receiver;
        }
        execute() {
            this.receiver.methodA();
        }
    }
    class ConcreteCommandB {
        constructor(receiver) {
            this.receiver = receiver;
        }
        execute() {
            this.receiver.methodB();
        }
    }
    class ConcreteCommandHandler {
        constructor() {
            this.commands = [];
        }
        handle(command) {
            command.execute();
            this.commands.push(command);
        }
    }
    class ConcreteReceiver {
        methodA() {
            console.log('Called methodA');
        }
        methodB() {
            console.log('Called methodB');
        }
    }
    const handler = new ConcreteCommandHandler();
    const receiver = new ConcreteReceiver();
    class Subject {
        constructor() {
            this.subscriber = [];
        }
        addSubscriber(s) {
            this.subscriber.push(s);
        }
        removeSubscriber(s) {
            var n = this.subscriber.indexOf(s);
            this.subscriber.splice(n, 1);
        }
        notify() {
            console.log('notify all the subscriber one by one');
            for (let s of this.subscriber) {
                s.notify();
            }
        }
    }
    class ConcreteSubject extends Subject {
        getState() {
            return this.state;
        }
        setState(state) {
            this.state = state;
        }
    }
    class ConcreteSubscriber {
        constructor(subject) {
            this.subject = subject;
        }
        notify() {
            this.state = this.subject.getState();
            console.log('ConcreteSubscriber: Received notify method from subject state', this.state);
        }
        getSubject() {
            return this.subject;
        }
        setSubject(subject) {
            this.subject = subject;
        }
    }
    const subject = new ConcreteSubject();
    const subA = new ConcreteSubscriber(subject);
    const subB = new ConcreteSubscriber(subject);
    subject.addSubscriber(subA);
    subject.addSubscriber(subB);
    subject.setState(19);
    // subject.notify()
    // 
    class Observer {
        constructor(name) {
            this.name = name;
        }
        notify(value) {
            console.log(`${this.name} was notified by ${value}`);
        }
    }
    class Observed {
        constructor() {
            this.value = 0;
            this.observers = [];
        }
        doSomething() {
            this.value++;
            this.notifyObserver();
        }
        subscribe(obj) {
            this.observers.push(obj);
        }
        unsubscribe(obj) {
            let i = this.observers.indexOf(obj);
            this.observers.splice(i, 1);
        }
        notifyObserver() {
            for (let ob of this.observers) {
                ob.notify(this.value);
            }
        }
    }
    let a = new Observed();
    let b = new Observer('B');
    let c = new Observer('C');
    a.subscribe(b);
    a.subscribe(c);
    a.doSomething();
    a.doSomething();
};

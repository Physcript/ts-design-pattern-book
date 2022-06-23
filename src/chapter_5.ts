


// behavioral strategy
//
//
//
//
export default () => {
  
  interface BillingStrategy {
    calculate(): void
  }

  class ConcreteBillingStrategyA implements BillingStrategy {

    calculate(): void
      {
        console.log('Calculating bill using first strategy')
      }
  }
  class ConcreteBillingStrategyB implements BillingStrategy {
    calculate(): void
      {
        console.log('Calculating bill using second strategy')
      }
  }


  class BillContext {
    constructor(private strategy: BillingStrategy)
      {

      }
    setStrategy(strategy: BillingStrategy)
      {
        this.strategy = strategy
      }
    calculateBill(): void
      {
        this.strategy.calculate()
      }
  }

  

  // chain pattern
  interface IRequest {
    getOrigin(): string
    getParams(): Map<string,string>
  }

  class HTTPRequest implements IRequest {
    constructor(private origin: string, private params: Map<string,string>) {}
    getOrigin(): string
      {
        return this.origin
      }
    getParams(): Map<string,string>
      {
        return this.params
      }
  }

  abstract class RequestHandler {
    constructor(protected next: RequestHandler | null)
      {

      }

    handleRequest(request: IRequest)
      {
        if(this.next !== null)
          {
            this.handleRequest(request)
          }
      }

  }
  

  class LogRequestHandler extends RequestHandler {
    handleRequest(request: IRequest)
      {
        console.log(`Request with origin ${request.getOrigin()} handled by LogRequestHandler`)
        if(this.next !== null)
          {
            this.next.handleRequest(request)
          }
      }
  }

  class EmailRequestHandler extends RequestHandler {
    handlerRequest(request: IRequest)
      {
        console.log(`Request with origin ${request.getOrigin()} handled by EmailRequestHandler`)
        if(this.next !== null)
          {
            this.next.handleRequest(request)
          }
      }
  }
  

  const req = new HTTPRequest('localhost', new Map().set('q','searchTerm'))
  // new LogRequestHandler(new EmailRequestHandler(null)).handleRequest(req)


  // command pattern
  //
  //
  //
  interface Command {
    execute(): void
  }

  interface Receiver {
    methodA(): void
    methodB(): void
  }

  class ConcreteCommandA implements Command {
    constructor(private receiver: Receiver) {}
    execute() 
      {
        this.receiver.methodA()
      }
  }
  class ConcreteCommandB implements Command {
    constructor(private receiver: Receiver) {}
    execute()
      {
        this.receiver.methodB()
      }
  }
  

  interface CommandHandler {
    handle(command: Command): void
  }

  class ConcreteCommandHandler implements CommandHandler {
    private commands: Command[] = []
    handle(command: Command)
      {
        command.execute()
        this.commands.push(command)
      }
  }
  class ConcreteReceiver implements Receiver {
    methodA()
      {
        console.log('Called methodA')
      }

    methodB()
      {
        console.log('Called methodB') 
      }
  }


  const handler = new ConcreteCommandHandler()
  const receiver = new ConcreteReceiver()
  

  // handler.handle(new ConcreteCommandA(receiver))
  // handler.handle(new ConcreteCommandB(receiver))


  // observer pattern
  //
  interface Subscriber {
    notify(): void
  }

  abstract class Subject {
    private subscriber: Subscriber[] = []
    public addSubscriber(s: Subscriber): void 
      {
        this.subscriber.push(s)
      }
    public removeSubscriber(s: Subscriber): void 
      {
        var n: number = this.subscriber.indexOf(s)
        this.subscriber.splice(n,1)
      }
    public notify(): void 
      {
        console.log('notify all the subscriber one by one')
        for(let s of this.subscriber)
          {
            s.notify()
          }
      }
  }

  class ConcreteSubject extends Subject {
    private state: any
    getState(): any 
      {
        return this.state
      }
    setState(state: any): any 
      {
        this.state = state
      }
  }
  class ConcreteSubscriber implements Subscriber {
    private state: any
    constructor(private subject: ConcreteSubject) {}
    public notify(): void
      {
        this.state = this.subject.getState() 
        console.log('ConcreteSubscriber: Received notify method from subject state', this.state)
      }
    getSubject()
      {
        return this.subject
      }
    setSubject(subject: ConcreteSubject)
      {
        this.subject = subject
      }
  }



  const subject = new ConcreteSubject()
  const subA = new ConcreteSubscriber(subject)
  const subB = new ConcreteSubscriber(subject)
  subject.addSubscriber(subA)
  subject.addSubscriber(subB)

  subject.setState(19)
  // subject.notify()
  

  // 
  class Observer {
    constructor(public name: string) {}

    public notify(value: number)
      {
        console.log(`${this.name} was notified by ${value}`)
      }
  }

  class Observed {
    public value: number = 0
    private observers: Observer[] = []

    public doSomething()
      {
        this.value++
        this.notifyObserver()
      }
    public subscribe(obj: Observer)
      {
        this.observers.push(obj)
      }
    public unsubscribe(obj: Observer)
      {
        let i: number = this.observers.indexOf(obj)
        this.observers.splice(i,1)
      }

    private notifyObserver()
      {
        for(let ob of this.observers) 
          {
            ob.notify(this.value)
          }
      }
  }


  let a = new Observed()
  let b = new Observer('B')
  let c = new Observer('C')


  a.subscribe(b)
  a.subscribe(c)
  a.doSomething()
  a.doSomething()
}



export default () => {


  //adapter
  //

  interface ActionSender {
    sendAction(action: string): Promise<void>
  }

  class ActionCreator implements ActionSender {
    
    sendAction(action: string): Promise<void>
      {
        return new Promise((resolve,reject) => {
          console.log('Event created', action)
          resolve()
        })
      }
  }


  class Client {
    actionCreator: ActionSender;
    
    constructor()
      {
        this.actionCreator = new ActionCreator()
      }

    call() 
      {
        this.actionCreator = new ActionCreator()
        this.actionCreator.sendAction('Hello')
        this.actionCreator = new EventAdapter()
        this.actionCreator.sendAction('Another Event')
      }
  }


  interface EventSender {
    sendEvent(eventName: string): void
  }

  class EventAdapter implements ActionSender {

    eventSender: EventSender
    constructor(eventSender: EventSender = new EventCreator())
      {
        this.eventSender = eventSender
      }
    public async sendAction(action: string): Promise<void>
      {
        await this.eventSender.sendEvent(action)
      }
  }
  

  class EventCreator implements EventSender {
    sendEvent(action: string): void
      {
        console.log('Event created', action)
      }
  }








  // 
  //
  

  interface IEmployee {
    getYearsWorked(): number
  }
  interface IContractor {
    getHoursWorked(): number
    
  }

  class Employee implements IEmployee {
    private yearsWorked: number
    getYearsWorked(): number 
      {
        return this.yearsWorked
      }

    constructor(metaData: Required<{ yearsWorked: number }> )
      {
        this.yearsWorked = metaData.yearsWorked
      }
  }

  class Contructor implements IContractor {
    private hoursWorked: number 
    getHoursWorked(): number 
      {
        return this.hoursWorked
      }

    constructor(metaData: Required<{ hoursWorked: number }>)
      {
        this.hoursWorked = metaData.hoursWorked
      }
  }
  
  class ContructorAdapter extends Employee {
    constructor( _constructor: Contructor )
      {
        super({ yearsWorked: Math.round(_constructor.getHoursWorked() / 8760) })
      }

      
  }

  const employee1 = new Employee({ yearsWorked: 5 })
  const employee2 = new Employee({ yearsWorked: 6 })
  const constructor1 = new Contructor({ hoursWorked: 2080 })
  const employe3 = new ContructorAdapter(constructor1)
  const listEmployee: Employee[] = [employee1,employee2, employe3 ]
  
  
  //
  //
  //Decorator
  //
  interface Event {
    send(message: string): void
  }

  class SendEmailEvent implements Event {
    send(message: string): void
      {
        console.log('Currently sending event message')
      }
  }

  class LogEventDecorator implements Event {
    constructor(private event: Event)
      {
        this.event = event
      }
    send(message: string): void
      {
        console.log('Before sending event message', message)
        this.event.send(message) // forward to event
        console.log('after sending event message', message)
      }
  }
  const sendEmail: Event = new SendEmailEvent()
  const logSendEmail = new LogEventDecorator(sendEmail)

  // logSendEmail.send('Hi')
  //
  class Car {
    drive()
      {
        return 'Driving'
      }
    reverse() 
      {
        return 'Reversing'
      }
  }
  
  class Toyota extends Car {
    car: Car
    constructor(car: Car)
      {
        super()
        this.car = car
      }
    
    

    reverse()
      {
        return 'Reversing with backup camera'
      }
  }
  
  const car = new Toyota(new Car())
  // console.log(car.reverse())
  

  interface ServiceA {
    action(): void
  }
  interface ServiceB {
    action(): void
  }

  class ServiceImplementationA implements ServiceA {
    action(): void 
      {
        console.log('Performing action Service A')
      }
  } 
  class ServiceImplementationB implements ServiceB {
    action(): void
      {
        console.log('Performing action Service B')
      }
  }

  class Facade {
    
    serviceA: ServiceA
    serviceB: ServiceB

    constructor( serviceA: ServiceA , serviceB: ServiceB)
      {
        this.serviceA = serviceA
        this.serviceB = serviceB
      }

    perform()
      {
        this.serviceA.action()
        this.serviceB.action()
      }

  }
  
  new Facade(new ServiceImplementationA(), new ServiceImplementationB)
  ///
  //
  //
  //
  //
  // Composit pattern
  //
  interface UIElement {
    render(): string
  }

  class WindowComposite implements UIElement {
    private children: UIElement[]
    constructor()
      {
        this.children = []
      }
    
    render(): string
      {
        let result = '<html>'
        for(let i = 0; i < this.children.length; i += 1)
          {
            result += this.children[i].render()
          }
        result += '</html>'
        return result
      }
    addComponent(c: UIElement): void
      {
        this.children.push(c)
      }
    removeComponent(idx: number): void
      {
        if(this.children.length <= idx)
          {
            throw new Error('index out of bound')
          }
        this.children.splice(idx, 1)
      }
  }

  class Button implements UIElement {
    constructor(private text: string) {}
    render(): string
      {
        return `<button>${this.text}</button>`
      }
  }


  const wc: WindowComposite = new WindowComposite()
  wc.addComponent(new Button('Click me'))
  wc.addComponent(new Button('No Click'))
  


  // bridge
  //
  //
  //
  interface Box {
    id: string
    value: string
  }

  interface BoxArranger {
    arrangeItem(item: Box, items: Box[]): Box[]
  }

  abstract class BoxContainer {
    
    constructor(public items: Box[] = [], public boxArranger: BoxArranger)
      {
       
      }

    arrangeItem(item: Box)
      {

      }

  }

  class StraigthBoxContainer extends BoxContainer {
    arrangeItem(item: Box)
      {
        this.items = this.boxArranger.arrangeItem(item, this.items)
      }
  }

  class ReversingBoxContainer extends BoxContainer {
    arrangeItem(item: Box)
      {
        this.items = this.boxArranger.arrangeItem(item, this.items).reverse()
      }
  }

  class PutLastBoxArranger implements BoxArranger {
    arrangeItem(item: Box, items: Box[]): Box[] 
      {
        items = items.concat(item)
        return items
      }
  }

  class PutFirstBoxArranger implements BoxArranger {
    arrangeItem(item: Box, items: Box[]): Box[]
      {
        let result = items.slice()
        result.unshift(item)
        return result
      }
  }

  const items: Box[] = [{ id: '1', value: 'abc' }]
  const pfa = new PutFirstBoxArranger()
  const pla = new PutLastBoxArranger()
  const rv = new StraigthBoxContainer(items, pla)

  rv.arrangeItem({
    id: "3",
    "value": "dfa"
  })

  // console.log( rv.items )
  
  const sc = new StraigthBoxContainer(items, pfa)
  sc.arrangeItem({
    id: "3",
    value: "dfa"
  })

  // console.log(sc.items)
  //
  //


  // brige example

  class TraPaymentProcessor {
    processPayment(payment: string)
      {
        console.log('Processing payment')
        console.log(payment)
        console.log('Paymend processed')
      }
  }

  class Company1 {
    name = 'Company1'
    private paymentProcessor: TraPaymentProcessor

    constructor(paymentProcessor: TraPaymentProcessor)
      {
        this.paymentProcessor = paymentProcessor 
      }

    processPayment()
      {
        console.log('company1 prcoessing payment')
        this.paymentProcessor.processPayment('my first Payment')
      }

  }
  class Company2 {
    name = 'Company2'
  }

  const company1 = new Company1(new TraPaymentProcessor())
  // const company2 = new Company2(new TraPaymentProcessor())
  company1.processPayment()
}



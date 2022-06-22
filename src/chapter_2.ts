
export default () => {


  const serviceConfig: Record<string, string | number | boolean> = {
    port: 3000,
    basePath: "http://localhost",
    enableStripePayments: false,
  }
  
  

  type ServiceConfigParams = 'port' | 'basePath' | 'enableStripePayments'
  const serviceConfigCheked: Record<ServiceConfigParams, string | number | boolean> = 
    {
      port: 3000,
      basePath: 'http://localhost',
      enableStripePayments: false
    }

  

  enum PRIORITY {
    DEFAULT,
    LOW,
    HIGH
  }

  interface TodoItemProps {
    title: string,
    description: string,
    priority: PRIORITY
  }

  class TodoItem {
    description?: string
    title = 'Default item title'
    priority = PRIORITY.DEFAULT

    constructor( todoItemProps: Partial<TodoItemProps> = {} )
      {
        Object.assign(this, todoItemProps)
      }
  }


  type OriginalTodoItemProps = Required<Partial<TodoItemProps>>
  // type ButtonProps = Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' , 'onSubmit', 'className', 'onFocus'>

  // omit
  type OriginalThemeProps = {
    colors: string[],
    elevations: string[],
    margins: string[],
    defaultTypography: string
  }

  type CustomeThemeProps = {
    color: Set<string>
  }

  interface SignupFormState {
    email: string,
    name: string
  }

  interface ActionPayload {
    key: keyof SignupFormState,
    value: string
  }
  
  const update1: ActionPayload = {
    key: 'email', 
    value: 'j'
  }
  type actionPayloadKeys = keyof typeof update1
  

  type Point2d= { x: number, y: number }
  function distance1 (first: Point2d, second: Point2d)
    {
      return 
        {
          Math.sqrt(
            Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y,2)
          )
        }
    }
  distance1({x:1,y:2},{x:3,y:4})
  
  class User {
    name: string
    

    constructor(name: string)
      {
        this.name = name
      }

  }

  type Account = {
    name: string
  }

  function printUsername(o: User) {
    console.log(o.name)
  }

  // printUsername(new User('theo'))


  type PPSNumber = {    
    number: string
  }
  
  type NameOrPPSNumber<T extends string | number> = T extends number ? PPSNumber : number
  const loginInfo: NameOrPPSNumber<1> = {
    number: '123'
  }
  // console.log(loginInfo)
  



  // 
  //
  interface Box<T> 
    {
      value: T
    }
  type UnpackBox<A> = A extends Box<infer E> ? E : A
  
  type intStach = UnpackBox<{ value: 10}>
  type stringStach = UnpackBox<{ value: '123' }>
  type booleanStach = UnpackBox<{ value: false }>
  



  // abstraction
  //
  //
  interface RestApiClient<T>
    {
      getAll(): Promise<T[]>
      getOne(id: string): Promise<T>
    }
  interface Site {
    name: string
  }

  class SitesApiClient implements RestApiClient<Site>
    {
      getAll()
        {
          const res: Site[]  = [{ name: 'website' }]
          return Promise.resolve(res)
        }

      getOne(id: string)
        {
          return Promise.resolve({ name: 'website' })
        }
    }



  // inheritance
  
  class EventAction {
    trigger(delay: number = 0)
      {
        console.log(`Event triggered in ${delay}s.`)
      }
  }

  class NotificationEvent extends EventAction {
    sendEmail()
      {
        console.log('Sending email')
      }
  }


  const ev = new NotificationEvent()
  
  // ev.trigger()
  // ev.sendEmail()
  // ev.trigger(12)



  class A {
    constructor()
      {
        this.subClassCheck()
      }

    private subClassCheck() 
      {
        if(Object.getPrototypeOf(this) !== A.prototype)
          {
            throw new Error('Cannot extends this class')
          }
      }

  }
  
  let a = new A ()
  
  class B extends A {}
  // let b = new B ()
  // error 


  // ecapsulation
  //
  

  class _User {
    #name: string
    constructor(name: string)
      {
        this.#name = name
      }
    greet() 
      {
        console.log(`User: ${this.#name}`)
      }
  }

  const theo = new _User('theo')
  // theo.greet()



  class Component {
    onInit(): void 
      {
        console.log('called from component')
      }
  }

  class ReactComponent extends Component {
    onInit(): void
      {
        console.log('called in reactComponent')
        super.onInit()
      }
  }


  const c = new ReactComponent()
  c.onInit()
}

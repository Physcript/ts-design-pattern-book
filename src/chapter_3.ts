


export default () => {

  // singleton


  class Singleton {
    private static instance: Singleton
    private constructor() {}
  
  static getInstance() 
    {
      if(!Singleton.instance)
        {
          Singleton.instance = new Singleton()
        }
      return Singleton.instance
    }   
  }
  
  class UsersAPISingleton {
    private static instance: UsersAPISingleton
    private constructor() {}

    static getInstance()
      {
        if(!UsersAPISingleton.instance)
          {
            UsersAPISingleton.instance = new UsersAPISingleton()
          }
        return UsersAPISingleton.instance
      }

    getUsers(): Promise<any> 
      {
        return Promise.resolve(['Alex', 'John', 'Sarah'])
      }
  }
  
  const userPromise = UsersAPISingleton.getInstance().getUsers()
  userPromise.then((res) => {
    // console.log(res)
  })



  class Container {
    
    public loggers: any 
    public options: any

    constructor( options = {})
      {
        this.loggers = new Map()
        this.options = options
      }

    add(id: any, options: any)
      {
        if(!this.loggers.has(id))
          {
            // options = Object.assign({} , options || this.options)
            // const existing = options.transports || this.options.transpots
            // options.transports = existing ? existing.slice() : [];
            // const logger = createLogger(options)
            // logger.on('close', () => this._delete(id))
            // this.loggers.set(id,logger)
          }
        return this.loggers.get(id)
      }
    get(id: any, options:any)
      {
        return this.add(id, options)
      }
  }


  // prototype 
  // you have a bunch of object and want to clone them in runtime 
  // you want to avoid using new operator directly
  

  interface HeroPrototype
    {
      clone(): HeroPrototype
    }

  interface Spell {
    name: string
  }

  class Wizard implements HeroPrototype
    {
      private spell: Spell[]
      private health: number
      
      constructor(private name: string)
        {
          this.spell = []
          this.health = 100
        }


      clone(): Wizard{
       const cloned = Object.create(Wizard.prototype || null)
       

       Object.getOwnPropertyNames(this).map((key: string) => {
          if(key === 'name')
            {
              cloned[key] = 'Unknown'
            }
          else
            {
              cloned[key] =  ''
            }
        })
        return cloned
      }

    }
  
  class Warrior implements HeroPrototype {
    private weapon: string
    private health: number

    constructor(private name: string)
      {
        this.weapon = 'dagger'
        this.health = 150
      }


    clone(): Warrior {
      const cloned = Object.create(Warrior.prototype || null)
      Object.getOwnPropertyNames(this).map((key: string) => {
        if( key === 'weapon' )
          {
            cloned[key] = 'Bare Hands'
          }
        else
          {
            cloned[key] = 'error'
          }
      })
      return cloned
    }
  }
  
  let wiz: HeroPrototype = new Wizard('Magnus')
  let war: HeroPrototype = new Warrior('Lora')
  // console.log(wiz.clone())
  // console.log(war.clone())
  //
  //
  //
  //

  // builder
  //
  
  class Website {
    constructor(
      public name?: string,
      public host?: string,
      public port?: number,
      public isPremium?: boolean
    )
      {
        
      }
  }
  
  interface WebsiteBuilder {
    setName(name: string): WebsiteBuilder
    setHost(host: string): WebsiteBuilder
    setPort(port: number): WebsiteBuilder
    setPremium(isPremium: boolean): WebsiteBuilder
    build(): Website
  }

  class PremiumWebsiteBuilder implements WebsiteBuilder {
    constructor(private website: Website)
      {
        this.clear()
      }

    setName(name: string): WebsiteBuilder
      {
        this.website.name = name
        return this
      }
    
    setHost(host: string): WebsiteBuilder
      {
        this.website.host = host
        return this
      }

    setPort(port: number): WebsiteBuilder
      {
        this.website.port = port
        return this
      }

    setPremium(isPremium: boolean): WebsiteBuilder
      {
        this.website.isPremium = isPremium
        return this
      }

    build(): Website 
      {
        const website = this.website
        this.clear()
        return website
      }


    clear()
      {
        this.website = new Website()
        this.website.isPremium = true
      }


  }

  const wb = new PremiumWebsiteBuilder(new Website)
  wb.setName('Example').setHost('localhost').setPort(3000)
  const website_1 = wb.build()
  wb.setName('Example_2').setHost('github').setPort(1337)
  const website_2 = wb.build()

  // console.log(website_1)
  // console.log(website_2)
  //
  //
  //
  
  type Builder<T> = {
    [k in keyof T] - ?: (arg: T[k]) => Builder<T>
  } & {
    build() : T
  }



  // FACTORY
  //
  //


  interface Weapon {
    getName(): string
    getDamage(): number
    getRange(): number
  }
  

  class LongSword implements Weapon {
    getName(): string 
      {
        return 'LongSword'
      }
    getDamage(): number 
      {
        return 10
      }
    getRange(): number
      {
        return 2
      }
  }

  class LongBow implements Weapon {
    getName(): string 
      {
        return 'LongBow'
      }
    getDamage(): number
      {
        return 8
      }
    getRange(): number
      {
        return 16
      }
  }

  interface WeaponFactory {
    create(): Weapon
  }
  
  class LongSwordFactory implements WeaponFactory {
    create(): Weapon
      {
        return new LongSword()
      }
  }
  class LongBowFactory implements WeaponFactory {
    create(): Weapon
      {
        return new LongBow()
      }
  }


  const lsf = new LongSwordFactory()
  const lbf = new LongBowFactory()
  
  let mySword = lsf.create()
  //
  //mySword.getDmage() // 10 
  
  
  // abstract factory
  //
  //
  interface Header {
    content: string
  }
  interface Content {
    content: string
  }
  interface Footer {
    content: string
  }

  interface WebsitePageFactory {
    createHeader(): Header
    createContent(): Content
    createFooter(): Footer
  }

  // class HTMLWesitePageFactory implements WebsitePageFactory {
  //   createHeader(text: string)
  //     {
  //       return new HTMLHeader(text)
  //     }
  //   createContent(text: string) 
  //     {
  //       return new HTMLContent(text)
  //     }
  //   createFooter(text: string)
  //     {
  //       return new HTMLFooter(text)
  //     }
  // }
  //
  // class HTMLHeader implements Header {
  //   content: string
  //   constructor(text: string)
  //     {
  //       this.content = `<head>${text}</head>`
  //       
  //     }
  // }
  //
  // class HTMLContent implements Content {
  //   content: string
  //   constructor(text: string)
  //     {
  //       this.content = `<main>${text}</main>`
  //     }
  // }
  //
  // class HTMLFooter implements Footer {
  //   content: string
  //   constructor(text: string)
  //     {
  //       this.content = `<foooter>${text}</footer>`
  //     }
  // }
  //
}

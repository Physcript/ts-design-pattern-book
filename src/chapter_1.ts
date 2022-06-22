

export default () => {

  // primative types 
  const one: string = 'one'
  const two: boolean = false
  const three: number = 3
  const four: null = null
  const five: unknown = 5 
  const six: any = 6
  const seven: unique symbol = Symbol("seven")
  
  let eight: never
  
  

  enum Keys {
    UP,
    DOWN,
    LEFT,
    RIGHT
  }

  let up: Keys = Keys.UP


  const enum Bool {
    true,
    false
  }

  let truth: Bool = Bool.true


  // array
            // number array any size 
  const arr: number[] = [ 1, 2, 3 ]
            // number array only 1 
  const tup: [number] = [1]
  


  class User {
    private name: string
    
    constructor(name: string)
      {
        this.name = name
      }

    public getName(): string 
      {
        return this.name
      }
  }


  const user = new User('John')

  // console.log(user.getName())


  // interface
  interface Comperable<T> {
    compareTo(o: T): number
  }

  interface IAppConfig {
   paths: {
     base: string
   },
   maxRetryCount?: number
  }

  const appConfig: IAppConfig = {
    paths: {
      base: '/'
    }
  }


  // input output.ts
  const stream = process.stdin

  

  function triggerNotification(emailClient: any, logger: any) {
    if(logger && typeof logger.log === 'function')
      {
        logger.log('sending email')
      }
    if(emailClient && typeof emailClient.send === 'function')
      {
        emailClient.send('message sent')
      }
  }

  
  // triggerNotification({ send: (msg: string) => console.log(msg) } , { log: (log: string) => console.log('loggerCall') })

  interface Logger {
    log: (msg: string) => void
  }

  let logger: Logger
  let cat = { log: (msg: string) => console.log(msg) }
  logger = cat
  



  //
  //
  //
  
  function computeFrequently(input: string) {
    const freqTable = new Map()
    for (let ch of input)
      {
        if(!freqTable.has(ch))
          {
            freqTable.set(ch,1)
          }
        else
          {
            freqTable.set(ch, freqTable.get(ch) + 1)
          }
      }
    return freqTable
  }

  const _result = computeFrequently('ffirst')

  for( let res of _result.entries())
    {
      // 
      // console.log(res)
    }

  type Predicate<T> = (item: T) => boolean

  function find<T> ( arr: T[] , predicate: Predicate<T> ) {
    
    for ( let item of arr )
      {
        if(predicate(item))
          {
            return item
          }
      }
    return undefined
  }

  
  interface Identifiable<T extends string | number>  
    { 
      id : T
    }

  class Product implements Identifiable<string> {
    id: string 
    constructor(id: string) {
      this.id = id
    }
  }


  class Blog implements Identifiable<string> {
    id: string
    authorId: string

    constructor( id: string, authorId: string ) 
      {
        this.id = id
        this.authorId = authorId
      }
  }

  class Author {}



  class QueryBuilder {}
  class EmptyQueryBuilder extends QueryBuilder {}

  interface SearchParams 
    {
      qb?: QueryBuilder
      path: string
    }

  class SearchService 
    {
      QueryBuilder?: QueryBuilder
      path: string

      constructor( { qb = EmptyQueryBuilder, path } : SearchParams ) 
        {
          this.QueryBuilder = qb
          this.path = path
        }

    }


    class Directory 
      {
        files: File[]
        directories: Directory[]

        constructor(files: File[], directories: Directory[] )
          {
            this.files = files
            this.directories = directories
          }

        addFile(file: File): void 
          {
            this.files.push(file)
          }
        addDir(directories: Directory): void 
          {
            this.directories.push(directories)
          }

      }

      
      class SSHUser {

        private privateKey: string
        public publicKey:  string

        constructor( prvKey: string, pubKey: string) 
          {
            this.privateKey = prvKey
            this.publicKey = pubKey
          }

        public getBase64(): string 
          {
            return Buffer.from(this.publicKey).toString("base64")
          }

      }

      
}

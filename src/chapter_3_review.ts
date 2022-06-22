
export default () => {
  

  // singleton
  // allow only 1 instance
  
  class Singleton {
    private static _instance: Singleton
    
    data: string

    constructor(_data: string)
      {
        this.data = _data
      }
    
    static getInstance(d: string)
      {
        if(!Singleton._instance)
          {
            this._instance = new Singleton(d)
          }
        return this._instance
      }
  

  }
  

  const theOne = Singleton.getInstance('Neo')
  const theTwo = Singleton.getInstance('Teo')

  // console.log(theOne.data)
  // console.log(theTwo.data)

  

  // builder
  //
  //
  
  type IAirlineFareClass = 'Economy' | 'Premium' | 'First'
  interface IAirlineTripOptions 
    {
      fromDate: Date
      toDate: Date
      from: string
      to: string
      class: IAirlineFareClass
    }

  class AirlineTrip {
    #airlineOptions: IAirlineTripOptions
    constructor(options: IAirlineTripOptions)
      {
        this.#airlineOptions = options
      }
    
    updateFromDate(newDate: IAirlineTripOptions['fromDate'])
      {
        this.#airlineOptions.fromDate = newDate
        return this
      }

    updateToDate(newDate: IAirlineTripOptions['toDate'])
      {
        this.#airlineOptions.toDate = newDate
        return this
      }

    updateTo(newTo: IAirlineTripOptions['to'])
      {
        this.#airlineOptions.to = newTo
        return this
      }

    updateFrom(newFrom: IAirlineTripOptions['from'])
      {
        this.#airlineOptions.from = newFrom
        return this
      }

    updateClass(newClass: IAirlineTripOptions['class'])
      {
        this.#airlineOptions.class = newClass
        return this
      }
    

    getData() 
      {
        console.log(this.#airlineOptions)
      }
  }

  const summerTrip = new AirlineTrip({
    from: 'LAX',
    to: 'MIA',
    fromDate: new Date(),
    toDate: new Date('06/28/2022'),
    class: 'Economy'
  })

  summerTrip.updateClass('First')
  
  // 
  //
  //
  //
  // Factory abstrat

 }


 interface ILogger {
    info(message: string): void
    warn(message: string): void
    debug(message: string): void
    error(message: string): void
  }

  class DevelopmentLogger implements ILogger {
    info(message: string): void 
      {
        console.warn(message)
      }
    warn(message: string): void 
      {
        console.warn(message)
      }
    debug(message: string): void 
      {
        console.debug(message)
      }
    error(message: string): void 
      {
        console.error(message)
      }
  }

  class ProductionLogger implements ILogger {
    info(message: string): void {}
    warn(message: string): void {
      console.warn(message)
    }
    debug(message: string): void {}
    error(message: string): void {
      console.error(message)
    }
  }

  export class LoggerFactory {
    public static createLogger(): ILogger 
      {
        if (process.env.NODE_ENV === 'production')
          {
            return new ProductionLogger()
          }
        else
          {
            return new DevelopmentLogger()
          }
      }
  }



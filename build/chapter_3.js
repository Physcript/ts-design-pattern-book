"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    // singleton
    class Singleton {
        constructor() { }
        static getInstance() {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
    }
    class UsersAPISingleton {
        constructor() { }
        static getInstance() {
            if (!UsersAPISingleton.instance) {
                UsersAPISingleton.instance = new UsersAPISingleton();
            }
            return UsersAPISingleton.instance;
        }
        getUsers() {
            return Promise.resolve(['Alex', 'John', 'Sarah']);
        }
    }
    const userPromise = UsersAPISingleton.getInstance().getUsers();
    userPromise.then((res) => {
        // console.log(res)
    });
    class Container {
        constructor(options = {}) {
            this.loggers = new Map();
            this.options = options;
        }
        add(id, options) {
            if (!this.loggers.has(id)) {
                // options = Object.assign({} , options || this.options)
                // const existing = options.transports || this.options.transpots
                // options.transports = existing ? existing.slice() : [];
                // const logger = createLogger(options)
                // logger.on('close', () => this._delete(id))
                // this.loggers.set(id,logger)
            }
            return this.loggers.get(id);
        }
        get(id, options) {
            return this.add(id, options);
        }
    }
    class Wizard {
        constructor(name) {
            this.name = name;
            this.spell = [];
            this.health = 100;
        }
        clone() {
            const cloned = Object.create(Wizard.prototype || null);
            Object.getOwnPropertyNames(this).map((key) => {
                if (key === 'name') {
                    cloned[key] = 'Unknown';
                }
                else {
                    cloned[key] = '';
                }
            });
            return cloned;
        }
    }
    class Warrior {
        constructor(name) {
            this.name = name;
            this.weapon = 'dagger';
            this.health = 150;
        }
        clone() {
            const cloned = Object.create(Warrior.prototype || null);
            Object.getOwnPropertyNames(this).map((key) => {
                if (key === 'weapon') {
                    cloned[key] = 'Bare Hands';
                }
                else {
                    cloned[key] = 'error';
                }
            });
            return cloned;
        }
    }
    let wiz = new Wizard('Magnus');
    let war = new Warrior('Lora');
    // console.log(wiz.clone())
    // console.log(war.clone())
    //
    //
    //
    //
    // builder
    //
    class Website {
        constructor(name, host, port, isPremium) {
            this.name = name;
            this.host = host;
            this.port = port;
            this.isPremium = isPremium;
        }
    }
    class PremiumWebsiteBuilder {
        constructor(website) {
            this.website = website;
            this.clear();
        }
        setName(name) {
            this.website.name = name;
            return this;
        }
        setHost(host) {
            this.website.host = host;
            return this;
        }
        setPort(port) {
            this.website.port = port;
            return this;
        }
        setPremium(isPremium) {
            this.website.isPremium = isPremium;
            return this;
        }
        build() {
            const website = this.website;
            this.clear();
            return website;
        }
        clear() {
            this.website = new Website();
            this.website.isPremium = true;
        }
    }
    const wb = new PremiumWebsiteBuilder(new Website);
    wb.setName('Example').setHost('localhost').setPort(3000);
    const website_1 = wb.build();
    wb.setName('Example_2').setHost('github').setPort(1337);
    const website_2 = wb.build();
    class LongSword {
        getName() {
            return 'LongSword';
        }
        getDamage() {
            return 10;
        }
        getRange() {
            return 2;
        }
    }
    class LongBow {
        getName() {
            return 'LongBow';
        }
        getDamage() {
            return 8;
        }
        getRange() {
            return 16;
        }
    }
    class LongSwordFactory {
        create() {
            return new LongSword();
        }
    }
    class LongBowFactory {
        create() {
            return new LongBow();
        }
    }
    const lsf = new LongSwordFactory();
    const lbf = new LongBowFactory();
    let mySword = lsf.create();
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
};

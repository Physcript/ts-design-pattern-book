"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    // primative types 
    const one = 'one';
    const two = false;
    const three = 3;
    const four = null;
    const five = 5;
    const six = 6;
    const seven = Symbol("seven");
    let eight;
    let Keys;
    (function (Keys) {
        Keys[Keys["UP"] = 0] = "UP";
        Keys[Keys["DOWN"] = 1] = "DOWN";
        Keys[Keys["LEFT"] = 2] = "LEFT";
        Keys[Keys["RIGHT"] = 3] = "RIGHT";
    })(Keys || (Keys = {}));
    let up = Keys.UP;
    let truth = 0 /* Bool.true */;
    // array
    // number array any size 
    const arr = [1, 2, 3];
    // number array only 1 
    const tup = [1];
    class User {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    const user = new User('John');
    const appConfig = {
        paths: {
            base: '/'
        }
    };
    // input output.ts
    const stream = process.stdin;
    function triggerNotification(emailClient, logger) {
        if (logger && typeof logger.log === 'function') {
            logger.log('sending email');
        }
        if (emailClient && typeof emailClient.send === 'function') {
            emailClient.send('message sent');
        }
    }
    let logger;
    let cat = { log: (msg) => console.log(msg) };
    logger = cat;
    //
    //
    //
    function computeFrequently(input) {
        const freqTable = new Map();
        for (let ch of input) {
            if (!freqTable.has(ch)) {
                freqTable.set(ch, 1);
            }
            else {
                freqTable.set(ch, freqTable.get(ch) + 1);
            }
        }
        return freqTable;
    }
    const _result = computeFrequently('ffirst');
    for (let res of _result.entries()) {
        // 
        // console.log(res)
    }
    function find(arr, predicate) {
        for (let item of arr) {
            if (predicate(item)) {
                return item;
            }
        }
        return undefined;
    }
    class Product {
        constructor(id) {
            this.id = id;
        }
    }
    class Blog {
        constructor(id, authorId) {
            this.id = id;
            this.authorId = authorId;
        }
    }
    class Author {
    }
    class QueryBuilder {
    }
    class EmptyQueryBuilder extends QueryBuilder {
    }
    class SearchService {
        constructor({ qb = EmptyQueryBuilder, path }) {
            this.QueryBuilder = qb;
            this.path = path;
        }
    }
    class Directory {
        constructor(files, directories) {
            this.files = files;
            this.directories = directories;
        }
        addFile(file) {
            this.files.push(file);
        }
        addDir(directories) {
            this.directories.push(directories);
        }
    }
    class SSHUser {
        constructor(prvKey, pubKey) {
            this.privateKey = prvKey;
            this.publicKey = pubKey;
        }
        getBase64() {
            return Buffer.from(this.publicKey).toString("base64");
        }
    }
};

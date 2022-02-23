export class BaseLogger{
    log(data){
        console.log(data + " loglandı")
    }
}

export class ElasticLogger extends BaseLogger{
    log(user){
        console.log("elastice search loglandı")
    }
}

export class MongoLogger extends BaseLogger{
    log(user){
        console.log("Mongoya loglandı")
    }
}
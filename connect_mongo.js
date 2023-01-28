const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://root:example@127.0.0.1:27017', (err, client) => {
    const db = client.db('myDB')
    if (err) throw err
    console.log("Connected")
    insertDocuments(db, () => {
        getDocuments(db, () => {
            client.close()
        })
    })
})

const insertDocuments = (db, callback) => {
    const documents = [
        { name: 'Bob', age: 24 },
        { name: 'john', age: 30 }
    ]
    // myDBデータベースのdocumentsコレクションに対して
    // ドキュメントを3つ追加します
    db.collection('documents').insertMany(documents, (err, result) => {

        console.log("Inserted 2 documents into the collection")
        callback(result)
    })
}

const getDocuments = (db, callback) => {
    db.collection('documents').find().toArray((error, documents) => {
        for (var document of documents) {
            console.log(document.name);
        }
    });
}
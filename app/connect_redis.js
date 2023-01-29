var redis = require('redis')

const config = {
    url: 'redis://db_repository-redis-1:6379'
}

const client = redis.createClient(config)

client.connect().then(async (res) => {
    console.log('Connected')
    var value = await client.get('sample_key_1')
    console.log(value)
    value = await client.set('sample_key_2', "apple")
    console.log(value)
    value = await client.get('sample_key_2')
    console.log(value)
    client.quit();
  })
  .catch((err) => {
    console.log('err happened' + err)
});
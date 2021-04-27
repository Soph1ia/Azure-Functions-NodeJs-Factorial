const myFunction = require('./factorial');
const Benchmark = require('benchmark');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const number = (req.query.number || (req.body && req.body.number));
    let responseMessage = benchmarking(number,context);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

function benchmarking(message,context) {
    let number = parseInt(message);
    
    let suite = new Benchmark.Suite();
    suite.add(`factorial ${number}`, function() {
      myFunction.factorial(number)
    })
    .on('cycle', function(event){
      context.log(String(event.target))
  })
  .on('complete', function() {
      context.log('Fastest is' + this.filter('fastest').map('name'))
  })
  .run({ 'async': false}); 
  
  return `Factorial Finished Successfully for ${number} !`
  }
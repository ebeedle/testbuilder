
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {


  it('Throws an error so it fails', function() {
  });  


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }})

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901230') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!(isTrue)) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {

 var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});



describe('Discover', function() {
    var should = chai.should();
 
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
    it(('has a prefix of ' + prefix + ' and a length of 16'), function() {
      detectNetwork('' + prefix + '0000000000000').should.equal('Discover')
    })
    it(('has a prefix of ' + prefix + ' and a length of 19'), function() {
      detectNetwork('' + prefix + '0000000000000000').should.equal('Discover')
    })
    })(prefix)
  }

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal('Discover');
  })
  it(('has a prefix of 6011 and a length of 19'), function() {
    detectNetwork('6011345678901234325').should.equal('Discover')
  });
  
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511345678901234').should.equal('Discover');
  })
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511345678901234346').should.equal('Discover');
  })
});  
  
  
  //Functions to use for Maestro, China Union, and Switch
  
  var getRandomInt = function() {
    return Math.floor(Math.random() * 10)
  }
  var getSuffix = function(i, p) {
    var zeroLength = i - p.toString().length;
    var suffix = '';
    for (var q = 0; q < zeroLength; q++) {
       suffix = suffix + getRandomInt().toString();
      }
    return suffix;
  }
  
  //End of Functions
  
  
describe('Maestro', function() {
  var should = chai.should();
  var prefixes = [5018, 5020, 5038, 6304];
  for (var i = 12; i <=19; i++) {
    for (var q =0; q < prefixes.length; q++) {
      var p = prefixes[q]
      var suffix = getSuffix(i, p);
  	  (function(suffix, i, p) {
     
        it(('has a prefix of ' + p + ' and a length of' + i), function() {
          detectNetwork(p.toString() + suffix).should.equal('Maestro')
        })
     })(suffix, i, p)
   }
  }
})


describe('should support China UnionPay', function() {
    var should = chai.should();
    for(var i = 16; i < 20; i++) {
      for (var p = 622126; p <= 622925; p++) {
        var suffix = getSuffix(i, p);
        
        (function(i, p, suffix) {
          it(('has a prefix of '+ p + ' and a length of' + i), function() {
            detectNetwork(p.toString() + suffix).should.equal('China UnionPay')
          })
        })(i,p, suffix)
      }
      
      for (var a = 624; a <= 626; a++) {
        var suffix = getSuffix(i, a);
        
        (function(i, a, suffix) {
          it(('has a prefix of ' + a + ' and a length of' + i), function() {
            detectNetwork(a.toString() + suffix).should.equal('China UnionPay')
          })
          })(i,a, suffix)
      }
      for (var b = 6282; b <= 6288; b++) {
        var suffix = getSuffix(i, b);
        
        (function(i, b, suffix) {
          it(('has a prefix of ' + b + ' and a length of ' + i), function() {
            detectNetwork(b.toString() + suffix).should.equal('China UnionPay')
          })  
        })(i,b, suffix)
      }
    }
})


describe('should support Switch', function() {
  var should = chai.should();
  var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]
  for (var i = 16; i <=19; i++) {
     if (i !== 17) {
       for (var q =0; q < prefixes.length; q++) {
         var p = prefixes[q]
         var suffix = getSuffix(i, p);
       
         (function(suffix, i, p) {
     
           it(('has a prefix of ' + p + ' and a length of ' + i), function() {
             detectNetwork(p.toString() + suffix).should.equal('Switch')
         })
         })(suffix, i, p)
      }
    }
  }
})
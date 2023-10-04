function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function spy(){}
}

function returnsAnAnonymousFunction(){
  return function(){}
}
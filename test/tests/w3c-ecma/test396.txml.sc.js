//Generated on 2017-9-20 12:40:20 by the SCION SCXML compiler
function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
function $raise_l4_c5(_event){
this.raise({ name:"foo", data : null});
};
$raise_l4_c5.tagname='raise';
$raise_l4_c5.line=4;
$raise_l4_c5.column=5;
function $cond_l8_c32(_event){
return _event.name == 'foo';
};
$cond_l8_c32.tagname='undefined';
$cond_l8_c32.line=8;
$cond_l8_c32.column=32;
function $expr_l13_c53(_event){
return 'pass';
};
$expr_l13_c53.tagname='undefined';
$expr_l13_c53.line=13;
$expr_l13_c53.column=53;
function $log_l13_c27(_event){
this.log("Outcome",$expr_l13_c53.apply(this, arguments));
};
$log_l13_c27.tagname='log';
$log_l13_c27.line=13;
$log_l13_c27.column=27;
function $expr_l14_c53(_event){
return 'fail';
};
$expr_l14_c53.tagname='undefined';
$expr_l14_c53.line=14;
$expr_l14_c53.column=53;
function $log_l14_c27(_event){
this.log("Outcome",$expr_l14_c53.apply(this, arguments));
};
$log_l14_c27.tagname='log';
$log_l14_c27.line=14;
$log_l14_c27.column=27;
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "{http://www.w3.org/2000/xmlns/}conf": "http://www.w3.org/2005/scxml-conformance",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "s0",
   "$type": "state",
   "onEntry": [
    $raise_l4_c5
   ],
   "transitions": [
    {
     "event": "foo",
     "cond": $cond_l8_c32,
     "target": "pass"
    },
    {
     "event": "foo",
     "target": "fail"
    }
   ]
  },
  {
   "id": "pass",
   "$type": "final",
   "onEntry": [
    $log_l13_c27
   ]
  },
  {
   "id": "fail",
   "$type": "final",
   "onEntry": [
    $log_l14_c27
   ]
  }
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/w3c-ecma/test396.txml.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3dvcmtzcGFjZS9zY3htbC10ZXN0LWZyYW1ld29yay90ZXN0L3czYy1lY21hL3Rlc3QzOTYudHhtbC5zY3htbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJSyx1Qzs7Ozs7O0FBSTJCLGFBQU0sQ0FBQyxJLENBQUssRSxDQUFHLEs7Ozs7OztBQUtNLGE7Ozs7OztBQUExQix5RDs7Ozs7O0FBQzBCLGE7Ozs7OztBQUExQix5RCJ9
//Generated on 2017-9-20 12:41:58 by the SCION SCXML compiler
function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "p",
   "$type": "parallel",
   "states": [
    {
     "id": "a",
     "$type": "state",
     "transitions": [
      {
       "event": "t",
       "target": "a"
      }
     ],
     "states": [
      {
       "id": "a1",
       "$type": "state"
      },
      {
       "id": "a2",
       "$type": "state"
      }
     ]
    },
    {
     "id": "b",
     "$type": "state",
     "transitions": [
      {
       "event": "t",
       "target": "b"
      }
     ],
     "states": [
      {
       "id": "b1",
       "$type": "state"
      },
      {
       "id": "b2",
       "$type": "state"
      }
     ]
    }
   ]
  }
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/more-parallel/test4.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
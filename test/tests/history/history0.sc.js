//Generated on 2017-9-20 12:42:10 by the SCION SCXML compiler
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
 "initial": "a",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "a",
   "$type": "state",
   "transitions": [
    {
     "target": "h",
     "event": "t1"
    }
   ]
  },
  {
   "id": "b",
   "initial": "b1",
   "$type": "state",
   "states": [
    {
     "id": "h",
     "$type": "history",
     "transitions": [
      {
       "target": "b2"
      }
     ]
    },
    {
     "id": "b1",
     "$type": "state"
    },
    {
     "id": "b2",
     "$type": "state",
     "transitions": [
      {
       "event": "t2",
       "target": "b3"
      }
     ]
    },
    {
     "id": "b3",
     "$type": "state",
     "transitions": [
      {
       "event": "t3",
       "target": "a"
      }
     ]
    }
   ]
  }
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/history/history0.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
//Generated on 2017-9-20 12:41:35 by the SCION SCXML compiler
function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
var Var1, Var2, Var3;
function $deserializeDatamodel($serializedDatamodel){
  Var1 = $serializedDatamodel["Var1"];
  Var2 = $serializedDatamodel["Var2"];
  Var3 = $serializedDatamodel["Var3"];
}
function $serializeDatamodel(){
   return {
  "Var1" : Var1,
  "Var2" : Var2,
  "Var3" : Var3
   };
}
function $raise_l10_c5(_event){
this.raise({ name:"foo", data : null});
};
$raise_l10_c5.tagname='raise';
$raise_l10_c5.line=10;
$raise_l10_c5.column=5;
function $raise_l11_c5(_event){
this.raise({ name:"bar", data : null});
};
$raise_l11_c5.tagname='raise';
$raise_l11_c5.line=11;
$raise_l11_c5.column=5;
function $expr_l18_c34(_event){
return Var1 + 1;
};
$expr_l18_c34.tagname='undefined';
$expr_l18_c34.line=18;
$expr_l18_c34.column=34;
function $assign_l18_c5(_event){
Var1 = $expr_l18_c34.apply(this, arguments);
};
$assign_l18_c5.tagname='assign';
$assign_l18_c5.line=18;
$assign_l18_c5.column=5;
function $expr_l21_c35(_event){
return Var3 + 1;
};
$expr_l21_c35.tagname='undefined';
$expr_l21_c35.line=21;
$expr_l21_c35.column=35;
function $assign_l21_c6(_event){
Var3 = $expr_l21_c35.apply(this, arguments);
};
$assign_l21_c6.tagname='assign';
$assign_l21_c6.line=21;
$assign_l21_c6.column=6;
function $cond_l25_c32(_event){
return Var3==1;
};
$cond_l25_c32.tagname='undefined';
$cond_l25_c32.line=25;
$cond_l25_c32.column=32;
function $expr_l30_c33(_event){
return Var2 + 1;
};
$expr_l30_c33.tagname='undefined';
$expr_l30_c33.line=30;
$expr_l30_c33.column=33;
function $assign_l30_c4(_event){
Var2 = $expr_l30_c33.apply(this, arguments);
};
$assign_l30_c4.tagname='assign';
$assign_l30_c4.line=30;
$assign_l30_c4.column=4;
function $cond_l38_c22(_event){
return Var1==2;
};
$cond_l38_c22.tagname='undefined';
$cond_l38_c22.line=38;
$cond_l38_c22.column=22;
function $cond_l44_c22(_event){
return Var2==2;
};
$cond_l44_c22.tagname='undefined';
$cond_l44_c22.line=44;
$cond_l44_c22.column=22;
function $expr_l49_c53(_event){
return 'pass';
};
$expr_l49_c53.tagname='undefined';
$expr_l49_c53.line=49;
$expr_l49_c53.column=53;
function $log_l49_c27(_event){
this.log("Outcome",$expr_l49_c53.apply(this, arguments));
};
$log_l49_c27.tagname='log';
$log_l49_c27.line=49;
$log_l49_c27.column=27;
function $expr_l50_c53(_event){
return 'fail';
};
$expr_l50_c53.tagname='undefined';
$expr_l50_c53.line=50;
$expr_l50_c53.column=53;
function $log_l50_c27(_event){
this.log("Outcome",$expr_l50_c53.apply(this, arguments));
};
$log_l50_c27.tagname='log';
$log_l50_c27.line=50;
$log_l50_c27.column=27;
function $data_l3_c24(_event){
return 0;
};
$data_l3_c24.tagname='undefined';
$data_l3_c24.line=3;
$data_l3_c24.column=24;
function $data_l4_c24(_event){
return 0;
};
$data_l4_c24.tagname='undefined';
$data_l4_c24.line=4;
$data_l4_c24.column=24;
function $data_l5_c24(_event){
return 0;
};
$data_l5_c24.tagname='undefined';
$data_l5_c24.line=5;
$data_l5_c24.column=24;
function $datamodel_l2_c1(_event){
if(typeof Var1 === "undefined")  Var1 = $data_l3_c24.apply(this, arguments);
if(typeof Var2 === "undefined")  Var2 = $data_l4_c24.apply(this, arguments);
if(typeof Var3 === "undefined")  Var3 = $data_l5_c24.apply(this, arguments);
};
$datamodel_l2_c1.tagname='datamodel';
$datamodel_l2_c1.line=2;
$datamodel_l2_c1.column=1;
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "{http://www.w3.org/2000/xmlns/}conf": "http://www.w3.org/2005/scxml-conformance",
 "initial": "s1",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "s1",
   "$type": "state",
   "onEntry": [
    $raise_l10_c5,
    $raise_l11_c5
   ],
   "transitions": [
    {
     "target": "s2"
    }
   ]
  },
  {
   "id": "s2",
   "initial": "s21",
   "$type": "state",
   "onExit": [
    $assign_l18_c5
   ],
   "transitions": [
    {
     "event": "foo",
     "type": "internal",
     "target": "s2",
     "onTransition": $assign_l21_c6
    },
    {
     "event": "bar",
     "cond": $cond_l25_c32,
     "target": "s3"
    },
    {
     "event": "bar",
     "target": "fail"
    }
   ],
   "states": [
    {
     "id": "s21",
     "$type": "state",
     "onExit": [
      $assign_l30_c4
     ]
    }
   ]
  },
  {
   "id": "s3",
   "$type": "state",
   "transitions": [
    {
     "cond": $cond_l38_c22,
     "target": "s4"
    },
    {
     "target": "fail"
    }
   ]
  },
  {
   "id": "s4",
   "$type": "state",
   "transitions": [
    {
     "cond": $cond_l44_c22,
     "target": "pass"
    },
    {
     "target": "fail"
    }
   ]
  },
  {
   "id": "pass",
   "$type": "final",
   "onEntry": [
    $log_l49_c27
   ]
  },
  {
   "id": "fail",
   "$type": "final",
   "onEntry": [
    $log_l50_c27
   ]
  }
 ],
 "onEntry": [
  $datamodel_l2_c1
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "/home/jacob/workspace/scxml-test-framework/test/w3c-ecma/test506.txml.scxml"
};
}
module.exports = rootConstructor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3dvcmtzcGFjZS9zY3htbC10ZXN0LWZyYW1ld29yay90ZXN0L3czYy1lY21hL3Rlc3Q1MDYudHhtbC5zY3htbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVLLHVDOzs7Ozs7QUFDQSx1Qzs7Ozs7O0FBTzZCLFcsQ0FBSyxDLENBQUUsQzs7Ozs7O0FBQXBDLDRDOzs7Ozs7QUFHOEIsVyxDQUFLLEMsQ0FBRSxDOzs7Ozs7QUFBcEMsNEM7Ozs7OztBQUkwQixXQUFJLEVBQUUsQzs7Ozs7O0FBS0wsVyxDQUFLLEMsQ0FBRSxDOzs7Ozs7QUFBcEMsNEM7Ozs7OztBQVFrQixXQUFJLEVBQUUsQzs7Ozs7O0FBTU4sV0FBSSxFQUFFLEM7Ozs7OztBQUt5QixhOzs7Ozs7QUFBMUIseUQ7Ozs7OztBQUMwQixhOzs7Ozs7QUFBMUIseUQ7Ozs7OztBQS9DSCxROzs7Ozs7QUFDQSxROzs7Ozs7QUFDQSxROzs7Ozs7QUFIdkI7QUFBQTtBQUFBLDRFIn0=
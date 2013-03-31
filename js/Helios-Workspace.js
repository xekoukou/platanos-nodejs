smalltalk.addPackage('Helios-Workspace');
smalltalk.addClass('HLCodeModel', smalltalk.Object, ['announcer', 'environment', 'receiver'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLCodeModel)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultReceiver",
category: 'defaults',
fn: function (){
var self=this;
function $DoIt(){return smalltalk.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($DoIt())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultReceiver",{},smalltalk.HLCodeModel)})},
args: [],
source: "defaultReceiver\x0a\x09^ DoIt new",
messageSends: ["new"],
referencedClasses: ["DoIt"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt:",
category: 'actions',
fn: function (someCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._environment())._eval_on_(someCode,_st(self)._receiver());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{someCode:someCode},smalltalk.HLCodeModel)})},
args: ["someCode"],
source: "doIt: someCode\x0a\x0a\x09^ self environment eval: someCode on: self receiver",
messageSends: ["eval:on:", "receiver", "environment"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st($HLManager())._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{},smalltalk.HLCodeModel)})},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment},smalltalk.HLCodeModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@receiver"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@receiver"]=_st(self)._defaultReceiver();
$1=self["@receiver"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.HLCodeModel)})},
args: [],
source: "receiver\x0a\x09^ receiver ifNil: [ receiver := self defaultReceiver ]",
messageSends: ["ifNil:", "defaultReceiver"],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@receiver"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.HLCodeModel)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeModel);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribe:",
category: 'actions',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aWidget)._subscribeTo_(_st(self)._announcer());
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget},smalltalk.HLCodeModel)})},
args: ["aWidget"],
source: "subscribe: aWidget\x0a\x09aWidget subscribeTo: self announcer",
messageSends: ["subscribeTo:", "announcer"],
referencedClasses: []
}),
smalltalk.HLCodeModel);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment},smalltalk.HLCodeModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLCodeModel.klass);


smalltalk.addClass('HLCodeWidget', smalltalk.HLWidget, ['model', 'wrapper', 'code', 'editor'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.HLCodeWidget)})},
args: [],
source: "announcer\x0a\x09^ self model announcer",
messageSends: ["announcer", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLCodeWidget)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._contents_("");
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.HLCodeWidget)})},
args: [],
source: "clear\x0a      self contents: ''",
messageSends: ["contents:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "configureEditor",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._editor())._at_put_("amberCodeWidget",self);
return self}, function($ctx1) {$ctx1.fill(self,"configureEditor",{},smalltalk.HLCodeWidget)})},
args: [],
source: "configureEditor\x0a\x09self editor at: 'amberCodeWidget' put: self",
messageSends: ["at:put:", "editor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.HLCodeWidget)})},
args: [],
source: "contents\x0a\x09^ editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.HLCodeWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09editor setValue: aString",
messageSends: ["setValue:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLine",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getLine_(_st(_st(self["@editor"])._getCursor())._line());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLine",{},smalltalk.HLCodeWidget)})},
args: [],
source: "currentLine\x0a    ^editor getLine: (editor getCursor line)",
messageSends: ["getLine:", "line", "getCursor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "currentLineOrSelection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@editor"])._somethingSelected();
if(smalltalk.assert($2)){
$1=_st(self)._selection();
} else {
$1=_st(self)._currentLine();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLineOrSelection",{},smalltalk.HLCodeWidget)})},
args: [],
source: "currentLineOrSelection\x0a    ^editor somethingSelected\x0a\x09\x09ifFalse: [ self currentLine ]\x0a\x09\x09ifTrue: [ self selection ]",
messageSends: ["ifFalse:ifTrue:", "currentLine", "selection", "somethingSelected"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
category: 'actions',
fn: function (){
var self=this;
var result;
function $HLDoItRequested(){return smalltalk.HLDoItRequested||(typeof HLDoItRequested=="undefined"?nil:HLDoItRequested)}
function $HLDoItExecuted(){return smalltalk.HLDoItExecuted||(typeof HLDoItExecuted=="undefined"?nil:HLDoItExecuted)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._announcer())._announce_(_st($HLDoItRequested())._on_(self["@model"]));
result=_st(self["@model"])._doIt_(_st(self)._currentLineOrSelection());
_st(_st(self)._announcer())._announce_(_st($HLDoItExecuted())._on_(self["@model"]));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt",{result:result},smalltalk.HLCodeWidget)})},
args: [],
source: "doIt\x0a\x09| result |\x0a\x0a\x09self announcer announce: (HLDoItRequested on: model).\x0a\x0a\x09result:=  model doIt: self currentLineOrSelection.\x0a\x0a\x09self announcer announce: (HLDoItExecuted on: model).\x0a\x0a\x09^ result        ",
messageSends: ["announce:", "on:", "announcer", "doIt:", "currentLineOrSelection"],
referencedClasses: ["HLDoItRequested", "HLDoItExecuted"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editor",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@editor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"editor",{},smalltalk.HLCodeWidget)})},
args: [],
source: "editor\x0a\x09^editor",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@editor"])._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLCodeWidget)})},
args: [],
source: "focus\x0a\x09editor focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._asJQuery())._is_(":active");
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{},smalltalk.HLCodeWidget)})},
args: [],
source: "hasFocus\x0a\x09^ code asJQuery is: ':active'",
messageSends: ["is:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectIt",
category: 'actions',
fn: function (){
var self=this;
var newInspector;
function $HLInspectItRequested(){return smalltalk.HLInspectItRequested||(typeof HLInspectItRequested=="undefined"?nil:HLInspectItRequested)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st($HLInspectItRequested())._on_(self["@model"]));
newInspector=_st(self)._makeInspectorOn_(_st(self)._doIt());
_st(newInspector)._open();
return self}, function($ctx1) {$ctx1.fill(self,"inspectIt",{newInspector:newInspector},smalltalk.HLCodeWidget)})},
args: [],
source: "inspectIt\x0a\x09| newInspector |\x0a       \x0a\x09self announcer announce: (HLInspectItRequested on: model).\x0a\x09newInspector := self makeInspectorOn: self doIt.\x0a\x09newInspector open",
messageSends: ["announce:", "on:", "announcer", "makeInspectorOn:", "doIt", "open"],
referencedClasses: ["HLInspectItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "makeInspectorOn:",
category: 'actions',
fn: function (anObject){
var self=this;
function $HLInspector(){return smalltalk.HLInspector||(typeof HLInspector=="undefined"?nil:HLInspector)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($HLInspector())._new();
_st($2)._inspect_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeInspectorOn:",{anObject:anObject},smalltalk.HLCodeWidget)})},
args: ["anObject"],
source: "makeInspectorOn: anObject\x0a\x0a\x09^ HLInspector new \x0a\x09\x09inspect: anObject;\x0a\x09\x09yourself",
messageSends: ["inspect:", "new", "yourself"],
referencedClasses: ["HLInspector"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(_st($Smalltalk())._current())._at_("allSelectors"))._value())._asSet())._asArray())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._includesSubString_(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget)})},
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ ((Smalltalk current at: 'allSelectors') value asSet asArray \x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
messageSends: ["reject:", "=", "string", "select:", "includesSubString:", "asArray", "asSet", "value", "at:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
function $HLCodeModel(){return smalltalk.HLCodeModel||(typeof HLCodeModel=="undefined"?nil:HLCodeModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st($HLCodeModel())._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.HLCodeWidget)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLCodeModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeModel"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},smalltalk.HLCodeWidget)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onDoIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"onDoIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onDoIt\x0a\x09\x0a    self doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInspectIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._inspectIt();
return self}, function($ctx1) {$ctx1.fill(self,"onInspectIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onInspectIt\x0a\x0a\x09self inspectIt",
messageSends: ["inspectIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onPrintIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._printIt();
return self}, function($ctx1) {$ctx1.fill(self,"onPrintIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onPrintIt\x0a\x0a\x09self printIt",
messageSends: ["printIt"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "onSaveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "print:",
category: 'actions',
fn: function (aString){
var self=this;
var start,stop,currentLine;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
currentLine=_st(_st(self["@editor"])._getCursor_(false))._line();
start=_st($HashedCollection())._new();
_st(start)._at_put_("line",currentLine);
_st(start)._at_put_("ch",_st(_st(self["@editor"])._getCursor_(false))._ch());
_st(_st(self["@editor"])._getSelection())._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st(start)._at_put_("ch",_st(_st(self["@editor"])._getLine_(currentLine))._size());
return _st(self["@editor"])._setSelection_end_(smalltalk.HashedCollection._fromPairs_([_st("line").__minus_gt(currentLine),_st("ch").__minus_gt((0))]),start);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
stop=_st($HashedCollection())._new();
_st(stop)._at_put_("line",currentLine);
_st(stop)._at_put_("ch",_st(_st(_st(start)._at_("ch")).__plus(_st(aString)._size())).__plus((2)));
_st(self["@editor"])._replaceSelection_(_st(_st(_st(_st(self["@editor"])._getSelection()).__comma(" ")).__comma(aString)).__comma(" "));
_st(self["@editor"])._setCursor_(_st(self["@editor"])._getCursor_(true));
_st(self["@editor"])._setSelection_end_(stop,start);
return self}, function($ctx1) {$ctx1.fill(self,"print:",{aString:aString,start:start,stop:stop,currentLine:currentLine},smalltalk.HLCodeWidget)})},
args: ["aString"],
source: "print: aString\x0a\x09| start stop currentLine |\x0a    currentLine := (editor getCursor: false) line.\x0a\x09start := HashedCollection new.\x0a\x09start at: 'line' put: currentLine.\x0a\x09start at: 'ch' put: (editor getCursor: false) ch.\x0a    (editor getSelection) ifEmpty: [\x0a    \x09\x22select current line if selection is empty\x22\x0a    \x09start at: 'ch' put: (editor getLine: currentLine) size.\x0a        editor setSelection: #{'line' -> currentLine. 'ch' -> 0} end: start.\x0a    ].\x0a\x09stop := HashedCollection new.\x0a\x09stop at: 'line' put: currentLine.\x0a\x09stop at: 'ch' put: ((start at: 'ch') + aString size + 2).\x0a\x0a\x09editor replaceSelection: (editor getSelection, ' ', aString, ' ').\x0a\x09editor setCursor: (editor getCursor: true).\x0a\x09editor setSelection: stop end: start",
messageSends: ["line", "getCursor:", "new", "at:put:", "ch", "ifEmpty:", "size", "getLine:", "setSelection:end:", "->", "getSelection", "+", "at:", "replaceSelection:", ",", "setCursor:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "printIt",
category: 'actions',
fn: function (){
var self=this;
var result;
function $HLPrintItRequested(){return smalltalk.HLPrintItRequested||(typeof HLPrintItRequested=="undefined"?nil:HLPrintItRequested)}
return smalltalk.withContext(function($ctx1) { 
result=_st(self)._doIt();
_st(_st(self)._announcer())._announce_(_st($HLPrintItRequested())._on_(self["@model"]));
_st(self)._print_(_st(result)._printString());
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"printIt",{result:result},smalltalk.HLCodeWidget)})},
args: [],
source: "printIt\x0a\x09| result |\x0a\x0a\x09result:=  self doIt.\x0a       \x0a\x09self announcer announce: (HLPrintItRequested on: model).\x0a\x0a    self print: result printString.\x0a\x09self focus.",
messageSends: ["doIt", "announce:", "on:", "announcer", "print:", "printString", "focus"],
referencedClasses: ["HLPrintItRequested"]
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},smalltalk.HLCodeWidget)})},
args: [],
source: "receiver\x0a\x09^ self model receiver",
messageSends: ["receiver", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._receiver_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},smalltalk.HLCodeWidget)})},
args: ["anObject"],
source: "receiver: anObject\x0a\x09self model receiver: anObject",
messageSends: ["receiver:", "model"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@code"]=_st(html)._textarea();
_st(self)._setEditorOn_(_st(self["@code"])._element());
_st(self)._configureEditor();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLCodeWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a    code := html textarea.\x0a    self setEditorOn: code element.\x0a    self configureEditor",
messageSends: ["textarea", "setEditorOn:", "element", "configureEditor"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},smalltalk.HLCodeWidget)})},
args: [],
source: "saveIt\x0a\x09\x22I do not do anything\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getSelection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{},smalltalk.HLCodeWidget)})},
args: [],
source: "selection\x0a\x09^editor getSelection",
messageSends: ["getSelection"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionEnd();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionEnd",{},smalltalk.HLCodeWidget)})},
args: [],
source: "selectionEnd\x0a   ^code element selectionEnd",
messageSends: ["selectionEnd", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionEnd:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionEnd_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionEnd:",{anInteger:anInteger},smalltalk.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionEnd: anInteger\x0a   code element selectionEnd: anInteger",
messageSends: ["selectionEnd:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@code"])._element())._selectionStart();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionStart",{},smalltalk.HLCodeWidget)})},
args: [],
source: "selectionStart\x0a   ^code element selectionStart",
messageSends: ["selectionStart", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionStart:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@code"])._element())._selectionStart_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"selectionStart:",{anInteger:anInteger},smalltalk.HLCodeWidget)})},
args: ["anInteger"],
source: "selectionStart: anInteger\x0a   code element selectionStart: anInteger",
messageSends: ["selectionStart:", "element"],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setEditorOn:",
category: 'actions',
fn: function (aTextarea){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'amber',
                lineNumbers: true,
                enterMode: 'flat',
                indentWithTabs: true,
				indentUnit: 4,
                matchBrackets: true,
                electricChars: false,
				keyMap: 'Amber',
				extraKeys: {"Shift-Space": "autocomplete"}
	});
return self}, function($ctx1) {$ctx1.fill(self,"setEditorOn:",{aTextarea:aTextarea},smalltalk.HLCodeWidget)})},
args: ["aTextarea"],
source: "setEditorOn: aTextarea\x0a\x09<self['@editor'] = CodeMirror.fromTextArea(aTextarea, {\x0a\x09\x09theme: 'amber',\x0a                lineNumbers: true,\x0a                enterMode: 'flat',\x0a                indentWithTabs: true,\x0a\x09\x09\x09\x09indentUnit: 4,\x0a                matchBrackets: true,\x0a                electricChars: false,\x0a\x09\x09\x09\x09keyMap: 'Amber',\x0a\x09\x09\x09\x09extraKeys: {\x22Shift-Space\x22: \x22autocomplete\x22}\x0a\x09})>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
var variables,classNames,pseudoVariables;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st(_st(_st(_st(window)._jQuery_(_st(_st(anEditor)._display())._wrapper()))._find_("span.cm-variable"))._get())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(window)._jQuery_(each))._html();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
classNames=_st(_st(_st($Smalltalk())._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
pseudoVariables=_st(_st($Smalltalk())._current())._pseudoVariableNames();
$1=_st(_st(_st(_st(_st(_st(variables).__comma(classNames)).__comma(pseudoVariables))._asSet())._asArray())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._includesSubString_(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__eq(_st(aToken)._string());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken,variables:variables,classNames:classNames,pseudoVariables:pseudoVariables},smalltalk.HLCodeWidget)})},
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09| variables classNames pseudoVariables |\x0a\x09\x0a\x09variables := ((window jQuery: anEditor display wrapper) find: 'span.cm-variable') get\x0a\x09\x09collect: [ :each | (window jQuery: each) html ].\x0a\x09\x0a\x09classNames := Smalltalk current classes collect: [ :each | each name ].\x0a\x09pseudoVariables := Smalltalk current pseudoVariableNames.\x0a\x09\x0a\x09^ ((variables, classNames, pseudoVariables) asSet asArray \x0a\x09\x09select: [ :each | each includesSubString: aToken string ])\x0a\x09\x09reject: [ :each | each = aToken string ]",
messageSends: ["collect:", "html", "jQuery:", "get", "find:", "wrapper", "display", "name", "classes", "current", "pseudoVariableNames", "reject:", "=", "string", "select:", "includesSubString:", "asArray", "asSet", ","],
referencedClasses: ["Smalltalk"]
}),
smalltalk.HLCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "hintFor:options:",
category: 'hints',
fn: function (anEditor,options){
var self=this;
var cursor,token,completions;
function $CodeMirror(){return smalltalk.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
cursor=_st(anEditor)._getCursor();
token=_st(anEditor)._getTokenAt_(cursor);
_st(token)._at_put_("state",_st(_st(_st($CodeMirror())._basicAt_("innerMode"))._value_value_(_st(anEditor)._getMode(),_st(token)._at_("state")))._state());
$1=_st(_st(token)._type()).__eq("variable");
if(smalltalk.assert($1)){
completions=_st($HLCodeWidget())._variableHintFor_token_(anEditor,token);
} else {
completions=_st($HLCodeWidget())._messageHintFor_token_(anEditor,token);
};
$2=smalltalk.HashedCollection._fromPairs_([_st("list").__minus_gt(completions),_st("from").__minus_gt(_st(_st($CodeMirror())._basicAt_("Pos"))._value_value_(_st(cursor)._line(),_st(token)._end())),_st("to").__minus_gt(_st(_st($CodeMirror())._basicAt_("Pos"))._value_value_(_st(cursor)._line(),_st(token)._start()))]);
return $2;
}, function($ctx1) {$ctx1.fill(self,"hintFor:options:",{anEditor:anEditor,options:options,cursor:cursor,token:token,completions:completions},smalltalk.HLCodeWidget.klass)})},
args: ["anEditor", "options"],
source: "hintFor: anEditor options: options\x0a\x09| cursor token completions |\x0a\x09\x0a\x09cursor := anEditor getCursor.\x0a\x09token := anEditor getTokenAt: cursor.\x0a\x09token at: 'state' put: ((CodeMirror basicAt: 'innerMode')\x0a\x09\x09value: anEditor getMode value: (token at: 'state')) state.\x0a\x09\x0a\x09completions := token type = 'variable' \x0a\x09\x09ifTrue: [ HLCodeWidget variableHintFor: anEditor token: token ]\x0a\x09\x09ifFalse: [ HLCodeWidget messageHintFor: anEditor token: token ].\x0a\x09\x0a\x09^ #{\x0a\x09\x09'list' -> completions.\x0a\x09\x09'from' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token end).\x0a\x09\x09'to' -> ((CodeMirror basicAt: 'Pos') value: cursor line value: token start)\x0a\x09}",
messageSends: ["getCursor", "getTokenAt:", "at:put:", "state", "value:value:", "getMode", "at:", "basicAt:", "ifTrue:ifFalse:", "variableHintFor:token:", "messageHintFor:token:", "=", "type", "->", "line", "end", "start"],
referencedClasses: ["CodeMirror", "HLCodeWidget"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
smalltalk.HLWidget.klass.fn.prototype._initialize.apply(_st(self), []);
$1=self;
_st($1)._setupCodeMirror();
_st($1)._setupCommands();
$2=_st($1)._setupKeyMaps();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self \x0a\x09\x09setupCodeMirror;\x0a\x09\x09setupCommands;\x0a\x09\x09setupKeyMaps.",
messageSends: ["initialize", "setupCodeMirror", "setupCommands", "setupKeyMaps"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "keyMap",
category: 'accessing',
fn: function (){
var self=this;
function $HLManager(){return smalltalk.HLManager||(typeof HLManager=="undefined"?nil:HLManager)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(_st($HLManager())._current())._keyBinder())._systemIsMac();
if(smalltalk.assert($2)){
$1=_st(self)._macKeyMap();
} else {
$1=_st(self)._pcKeyMap();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyMap",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "keyMap\x0a\x09^ HLManager current keyBinder systemIsMac\x0a\x09\x09ifTrue: [ self macKeyMap ]\x0a\x09\x09ifFalse: [ self pcKeyMap ]",
messageSends: ["ifTrue:ifFalse:", "macKeyMap", "pcKeyMap", "systemIsMac", "keyBinder", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "macKeyMap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("Alt-Backspace").__minus_gt("delWordBefore"),_st("Alt-Delete").__minus_gt("delWordAfter"),_st("Alt-Left").__minus_gt("goWordBoundaryLeft"),_st("Alt-Right").__minus_gt("goWordBoundaryRight"),_st("Cmd-A").__minus_gt("selectAll"),_st("Cmd-Alt-F").__minus_gt("replace"),_st("Cmd-D").__minus_gt("doIt"),_st("Cmd-Down").__minus_gt("goDocEnd"),_st("Cmd-End").__minus_gt("goDocEnd"),_st("Cmd-F").__minus_gt("find"),_st("Cmd-G").__minus_gt("findNext"),_st("Cmd-I").__minus_gt("inspectIt"),_st("Cmd-Left").__minus_gt("goLineStart"),_st("Cmd-P").__minus_gt("printIt"),_st("Cmd-Right").__minus_gt("goLineEnd"),_st("Cmd-S").__minus_gt("saveIt"),_st("Cmd-Up").__minus_gt("goDocStart"),_st("Cmd-Y").__minus_gt("redo"),_st("Cmd-Z").__minus_gt("undo"),_st("Cmd-[").__minus_gt("indentLess"),_st("Cmd-]").__minus_gt("indentMore"),_st("Ctrl-Alt-Backspace").__minus_gt("delWordAfter"),_st("Shift-Cmd-Alt-F").__minus_gt("replaceAll"),_st("Shift-Cmd-G").__minus_gt("findPrev"),_st("Shift-Cmd-Z").__minus_gt("redo"),_st("fallthrough").__minus_gt(["basic","emacsy"])]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"macKeyMap",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "macKeyMap\x0a\x09^ #{\x0a\x09\x09'Alt-Backspace'\x09\x09-> 'delWordBefore'.\x0a\x09\x09'Alt-Delete'\x09\x09-> 'delWordAfter'. \x0a\x09\x09'Alt-Left'\x09\x09-> 'goWordBoundaryLeft'.\x0a\x09\x09'Alt-Right'\x09\x09-> 'goWordBoundaryRight'. \x0a\x09\x09'Cmd-A'\x09\x09\x09-> 'selectAll'. \x0a\x09\x09'Cmd-Alt-F'\x09\x09-> 'replace'. \x0a\x09\x09'Cmd-D'\x09\x09\x09-> 'doIt'. \x0a\x09\x09'Cmd-Down'\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-End'\x09\x09-> 'goDocEnd'. \x0a\x09\x09'Cmd-F'\x09\x09\x09-> 'find'.\x0a\x09\x09'Cmd-G'\x09\x09\x09-> 'findNext'. \x0a\x09\x09'Cmd-I'\x09\x09\x09-> 'inspectIt'. \x0a\x09\x09'Cmd-Left'\x09\x09-> 'goLineStart'. \x0a\x09\x09'Cmd-P'\x09\x09\x09-> 'printIt'. \x0a\x09\x09'Cmd-Right'\x09\x09-> 'goLineEnd'. \x0a\x09\x09'Cmd-S'\x09\x09\x09-> 'saveIt'. \x0a\x09\x09'Cmd-Up'\x09\x09-> 'goDocStart'. \x0a\x09\x09'Cmd-Y'\x09\x09\x09-> 'redo'.\x0a\x09\x09'Cmd-Z'\x09\x09\x09-> 'undo'. \x0a\x09\x09'Cmd-['\x09\x09\x09-> 'indentLess'. \x0a\x09\x09'Cmd-]'\x09\x09\x09-> 'indentMore'.\x0a\x09\x09'Ctrl-Alt-Backspace'\x09-> 'delWordAfter'. \x0a\x09\x09'Shift-Cmd-Alt-F'\x09-> 'replaceAll'.\x0a\x09\x09'Shift-Cmd-G'\x09\x09-> 'findPrev'. \x0a\x09\x09'Shift-Cmd-Z'\x09\x09-> 'redo'. \x0a    \x09'fallthrough' \x09-> { 'basic'. 'emacsy' }\x0a  }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "messageHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._messageHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget.klass)})},
args: ["anEditor", "aToken"],
source: "messageHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09messageHintFor: anEditor token: aToken",
messageSends: ["messageHintFor:token:", "at:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pcKeyMap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st("Alt-Left").__minus_gt("goLineStart"),_st("Alt-Right").__minus_gt("goLineEnd"),_st("Alt-Up").__minus_gt("goDocStart"),_st("Ctrl-A").__minus_gt("selectAll"),_st("Ctrl-Backspace").__minus_gt("delWordBefore"),_st("Ctrl-D").__minus_gt("doIt"),_st("Ctrl-Delete").__minus_gt("delWordAfter"),_st("Ctrl-Down").__minus_gt("goDocEnd"),_st("Ctrl-End").__minus_gt("goDocEnd"),_st("Ctrl-F").__minus_gt("find"),_st("Ctrl-G").__minus_gt("findNext"),_st("Ctrl-I").__minus_gt("inspectIt"),_st("Ctrl-Home").__minus_gt("goDocStart"),_st("Ctrl-Left").__minus_gt("goWordBoundaryLeft"),_st("Ctrl-P").__minus_gt("printIt"),_st("Ctrl-Right").__minus_gt("goWordBoundaryRight"),_st("Ctrl-S").__minus_gt("saveIt"),_st("Ctrl-Y").__minus_gt("redo"),_st("Ctrl-Z").__minus_gt("undo"),_st("Ctrl-[").__minus_gt("indentLess"),_st("Ctrl-]").__minus_gt("indentMore"),_st("Shift-Ctrl-F").__minus_gt("replace"),_st("Shift-Ctrl-G").__minus_gt("findPrev"),_st("Shift-Ctrl-R").__minus_gt("replaceAll"),_st("Shift-Ctrl-Z").__minus_gt("redo"),_st("fallthrough").__minus_gt(["basic"])];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pcKeyMap",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "pcKeyMap\x0a\x09^ {\x0a\x09\x09'Alt-Left' -> 'goLineStart'. \x0a\x09\x09'Alt-Right' -> 'goLineEnd'.\x0a\x09\x09'Alt-Up' -> 'goDocStart'. \x0a\x09\x09'Ctrl-A' -> 'selectAll'. \x0a\x09\x09'Ctrl-Backspace' -> 'delWordBefore'. \x0a\x09\x09'Ctrl-D' -> 'doIt'. \x0a\x09\x09'Ctrl-Delete' -> 'delWordAfter'. \x0a\x09\x09'Ctrl-Down' -> 'goDocEnd'.\x0a\x09\x09'Ctrl-End' -> 'goDocEnd'. \x0a\x09\x09'Ctrl-F' -> 'find'.\x0a\x09\x09'Ctrl-G' -> 'findNext'. \x0a\x09\x09'Ctrl-I' -> 'inspectIt'.\x0a\x09\x09'Ctrl-Home' -> 'goDocStart'. \x0a\x09\x09'Ctrl-Left' -> 'goWordBoundaryLeft'. \x0a\x09\x09'Ctrl-P' -> 'printIt'.\x0a\x09\x09'Ctrl-Right' -> 'goWordBoundaryRight'. \x0a\x09\x09'Ctrl-S' -> 'saveIt'. \x0a\x09\x09'Ctrl-Y' -> 'redo'.\x0a\x09\x09'Ctrl-Z' -> 'undo'. \x0a\x09\x09'Ctrl-[' -> 'indentLess'. \x0a\x09\x09'Ctrl-]' -> 'indentMore'.\x0a\x09\x09'Shift-Ctrl-F' -> 'replace'. \x0a\x09\x09'Shift-Ctrl-G' -> 'findPrev'. \x0a\x09\x09'Shift-Ctrl-R' -> 'replaceAll'.\x0a\x09\x09'Shift-Ctrl-Z' -> 'redo'. \x0a\x09\x09'fallthrough' -> #('basic')\x0a}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCodeMirror",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 
		CodeMirror.keyMap.default.fallthrough = ["basic"];
		CodeMirror.commands.autocomplete = function(cm) {
        	CodeMirror.showHint(cm, self._hintFor_options_);
      	}
	;
return self}, function($ctx1) {$ctx1.fill(self,"setupCodeMirror",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupCodeMirror\x0a\x09< \x0a\x09\x09CodeMirror.keyMap.default.fallthrough = [\x22basic\x22];\x0a\x09\x09CodeMirror.commands.autocomplete = function(cm) {\x0a        \x09CodeMirror.showHint(cm, self._hintFor_options_);\x0a      \x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupCommands",
category: 'initialization',
fn: function (){
var self=this;
function $CodeMirror(){return smalltalk.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($CodeMirror())._basicAt_("commands");
_st($1)._at_put_("doIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._doIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
_st($1)._at_put_("inspectIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
_st($1)._at_put_("printIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._printIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
$2=_st($1)._at_put_("saveIt",(function(cm){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cm)._amberCodeWidget())._saveIt();
}, function($ctx2) {$ctx2.fillBlock({cm:cm},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupCommands",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupCommands\x0a\x09(CodeMirror basicAt: 'commands') \x0a\x09\x09at: 'doIt' put: [ :cm | cm amberCodeWidget doIt ];\x0a\x09\x09at: 'inspectIt' put: [ :cm | cm amberCodeWidget inspectIt ];\x0a\x09\x09at: 'printIt' put: [ :cm | cm amberCodeWidget printIt ];\x0a\x09\x09at: 'saveIt' put: [ :cm | cm amberCodeWidget saveIt ]",
messageSends: ["at:put:", "doIt", "amberCodeWidget", "basicAt:", "inspectIt", "printIt", "saveIt"],
referencedClasses: ["CodeMirror"]
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "setupKeyMaps",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
CodeMirror.keyMap['Amber'] = self._keyMap();
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyMaps",{},smalltalk.HLCodeWidget.klass)})},
args: [],
source: "setupKeyMaps\x0a\x09<CodeMirror.keyMap['Amber'] = self._keyMap()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "variableHintFor:token:",
category: 'hints',
fn: function (anEditor,aToken){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(anEditor)._at_("amberCodeWidget"))._variableHintFor_token_(anEditor,aToken);
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableHintFor:token:",{anEditor:anEditor,aToken:aToken},smalltalk.HLCodeWidget.klass)})},
args: ["anEditor", "aToken"],
source: "variableHintFor: anEditor token: aToken\x0a\x09^ (anEditor at: 'amberCodeWidget')\x0a\x09\x09variableHintFor: anEditor token: aToken",
messageSends: ["variableHintFor:token:", "at:"],
referencedClasses: []
}),
smalltalk.HLCodeWidget.klass);


smalltalk.addClass('HLSourceCodeWidget', smalltalk.HLCodeWidget, ['browserModel', 'methodContents'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "browserModel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@browserModel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"browserModel",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "browserModel\x0a\x09^ browserModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "browserModel:",
category: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@browserModel"]=aBrowserModel;
$1=self;
_st($1)._observeSystem();
$2=_st($1)._observeBrowserModel();
return self}, function($ctx1) {$ctx1.fill(self,"browserModel:",{aBrowserModel:aBrowserModel},smalltalk.HLSourceCodeWidget)})},
args: ["aBrowserModel"],
source: "browserModel: aBrowserModel\x0a\x09browserModel := aBrowserModel.\x0a\x09self \x0a\x09\x09observeSystem;\x0a\x09\x09observeBrowserModel",
messageSends: ["observeSystem", "observeBrowserModel"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModification",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._methodContents()).__eq(_st(self)._contents()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModification",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "hasModification\x0a\x09^ (self methodContents = self contents) not",
messageSends: ["not", "=", "contents", "methodContents"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@methodContents"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodContents",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "methodContents\x0a\x09^ methodContents",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "methodContents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@methodContents"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"methodContents:",{aString:aString},smalltalk.HLSourceCodeWidget)})},
args: ["aString"],
source: "methodContents: aString\x0a\x09methodContents := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeBrowserModel",
category: 'actions',
fn: function (){
var self=this;
function $HLSaveSourceCode(){return smalltalk.HLSaveSourceCode||(typeof HLSaveSourceCode=="undefined"?nil:HLSaveSourceCode)}
function $HLParseErrorRaised(){return smalltalk.HLParseErrorRaised||(typeof HLParseErrorRaised=="undefined"?nil:HLParseErrorRaised)}
function $HLCompileErrorRaised(){return smalltalk.HLCompileErrorRaised||(typeof HLCompileErrorRaised=="undefined"?nil:HLCompileErrorRaised)}
function $HLUnknownVariableErrorRaised(){return smalltalk.HLUnknownVariableErrorRaised||(typeof HLUnknownVariableErrorRaised=="undefined"?nil:HLUnknownVariableErrorRaised)}
function $HLInstVarAdded(){return smalltalk.HLInstVarAdded||(typeof HLInstVarAdded=="undefined"?nil:HLInstVarAdded)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._browserModel())._announcer();
_st($1)._on_do_($HLSaveSourceCode(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onSaveIt();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLParseErrorRaised(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onParseError_(ann);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLCompileErrorRaised(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onCompileError_(_st(ann)._error());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLUnknownVariableErrorRaised(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onUnknownVariableError_(_st(ann)._error());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLInstVarAdded(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onInstVarAdded();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLMethodSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLClassSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLProtocolSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLSourceCodeFocusRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onSourceCodeFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeBrowserModel",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "observeBrowserModel\x0a\x09self browserModel announcer\x0a\x09\x09on: HLSaveSourceCode\x0a\x09\x09do: [ :ann | self onSaveIt ];\x0a\x09\x09on: HLParseErrorRaised\x0a\x09\x09do: [ :ann | self onParseError: ann ];\x0a\x09\x09on: HLCompileErrorRaised\x0a\x09\x09do: [ :ann | self onCompileError: ann error ];\x0a\x09\x09on: HLUnknownVariableErrorRaised\x0a\x09\x09do: [ :ann | self onUnknownVariableError: ann error ];\x0a\x09\x09on: HLInstVarAdded \x0a\x09\x09do: [ :ann | self onInstVarAdded ];\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09do: [ :ann | self onMethodSelected: ann item ];\x0a    \x09on: HLClassSelected \x0a\x09\x09do: [ :ann | self onClassSelected: ann item ];\x0a    \x09on: HLProtocolSelected \x0a\x09\x09do: [ :ann | self onProtocolSelected: ann item ];\x0a\x09\x09on: HLSourceCodeFocusRequested \x0a\x09\x09do: [ :ann | self onSourceCodeFocusRequested ]",
messageSends: ["on:do:", "onSaveIt", "announcer", "browserModel", "onParseError:", "onCompileError:", "error", "onUnknownVariableError:", "onInstVarAdded", "onMethodSelected:", "item", "onClassSelected:", "onProtocolSelected:", "onSourceCodeFocusRequested"],
referencedClasses: ["HLSaveSourceCode", "HLParseErrorRaised", "HLCompileErrorRaised", "HLUnknownVariableErrorRaised", "HLInstVarAdded", "HLMethodSelected", "HLClassSelected", "HLProtocolSelected", "HLSourceCodeFocusRequested"]
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "observeSystem",
category: 'actions',
fn: function (){
var self=this;
function $MethodModified(){return smalltalk.MethodModified||(typeof MethodModified=="undefined"?nil:MethodModified)}
function $HLMethodSelected(){return smalltalk.HLMethodSelected||(typeof HLMethodSelected=="undefined"?nil:HLMethodSelected)}
function $HLClassSelected(){return smalltalk.HLClassSelected||(typeof HLClassSelected=="undefined"?nil:HLClassSelected)}
function $HLProtocolSelected(){return smalltalk.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $HLSourceCodeFocusRequested(){return smalltalk.HLSourceCodeFocusRequested||(typeof HLSourceCodeFocusRequested=="undefined"?nil:HLSourceCodeFocusRequested)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._browserModel())._systemAnnouncer();
_st($1)._on_do_($MethodModified(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodModified_(_st(ann)._method());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLMethodSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLClassSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_($HLProtocolSelected(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_($HLSourceCodeFocusRequested(),(function(ann){
return smalltalk.withContext(function($ctx2) {
return _st(self)._onSourceCodeFocusRequested();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "observeSystem\x0a\x09self browserModel systemAnnouncer\x0a    \x09on: MethodModified\x0a        do: [ :ann | self onMethodModified: ann method ];\x0a\x09\x09on: HLMethodSelected \x0a\x09\x09do: [ :ann | self onMethodSelected: ann item ];\x0a    \x09on: HLClassSelected \x0a\x09\x09do: [ :ann | self onClassSelected: ann item ];\x0a    \x09on: HLProtocolSelected \x0a\x09\x09do: [ :ann | self onProtocolSelected: ann item ];\x0a\x09\x09on: HLSourceCodeFocusRequested \x0a\x09\x09do: [ :ann | self onSourceCodeFocusRequested ]",
messageSends: ["on:do:", "onMethodModified:", "method", "systemAnnouncer", "browserModel", "onMethodSelected:", "item", "onClassSelected:", "onProtocolSelected:", "onSourceCodeFocusRequested"],
referencedClasses: ["MethodModified", "HLMethodSelected", "HLClassSelected", "HLProtocolSelected", "HLSourceCodeFocusRequested"]
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(aClass)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass},smalltalk.HLSourceCodeWidget)})},
args: ["aClass"],
source: "onClassSelected: aClass\x0a\x09aClass ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: aClass definition",
messageSends: ["ifNil:", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onCompileError:",
category: 'reactions',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._alert_(_st(anError)._messageText());
return self}, function($ctx1) {$ctx1.fill(self,"onCompileError:",{anError:anError},smalltalk.HLSourceCodeWidget)})},
args: ["anError"],
source: "onCompileError: anError\x0a\x09self alert: anError messageText",
messageSends: ["alert:", "messageText"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onInstVarAdded",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._browserModel())._save_(_st(self)._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onInstVarAdded",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "onInstVarAdded\x0a\x09self  browserModel save: self contents",
messageSends: ["save:", "contents", "browserModel"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodModified:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(_st(_st(self)._browserModel())._selectedClass()).__eq(_st(aMethod)._methodClass());
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self)._browserModel())._selectedMethod();
if(($receiver = $3) == nil || $receiver == undefined){
$4=self;
return $4;
} else {
$3;
};
$5=_st(_st(_st(_st(self)._browserModel())._selectedMethod())._selector()).__eq(_st(aMethod)._selector());
if(! smalltalk.assert($5)){
$6=self;
return $6;
};
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodModified:",{aMethod:aMethod},smalltalk.HLSourceCodeWidget)})},
args: ["aMethod"],
source: "onMethodModified: aMethod\x0a\x09self browserModel selectedClass = aMethod methodClass ifFalse: [ ^ self ].\x0a\x09self browserModel selectedMethod ifNil: [ ^ self ].\x0a    self browserModel selectedMethod selector = aMethod selector ifFalse: [ ^ self ].\x0a\x0a    self refresh",
messageSends: ["ifFalse:", "=", "methodClass", "selectedClass", "browserModel", "ifNil:", "selectedMethod", "selector", "refresh"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aCompiledMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(aCompiledMethod)._source());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aCompiledMethod:aCompiledMethod},smalltalk.HLSourceCodeWidget)})},
args: ["aCompiledMethod"],
source: "onMethodSelected: aCompiledMethod\x0a\x09aCompiledMethod ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: aCompiledMethod source",
messageSends: ["ifNil:", "contents:", "source"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onParseError:",
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var lineIndex,newContents;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
lineIndex=(1);
_st(self)._contents_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._contents())._linesDo_((function(each){
return smalltalk.withContext(function($ctx3) {
$1=_st(lineIndex).__eq(_st(anAnnouncement)._line());
if(smalltalk.assert($1)){
$2=stream;
_st($2)._nextPutAll_(_st(each)._copyFrom_to_((1),_st(anAnnouncement)._column()));
_st($2)._nextPutAll_("<- ");
_st($2)._nextPutAll_(_st(anAnnouncement)._message());
_st($2)._nextPutAll_(" ");
$3=_st($2)._nextPutAll_(_st(each)._copyFrom_to_(_st(_st(anAnnouncement)._column()).__plus((1)),_st(each)._size()));
$3;
} else {
_st(stream)._nextPutAll_(each);
};
_st(stream)._nextPutAll_(_st($String())._cr());
lineIndex=_st(lineIndex).__plus((1));
return lineIndex;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"onParseError:",{anAnnouncement:anAnnouncement,lineIndex:lineIndex,newContents:newContents},smalltalk.HLSourceCodeWidget)})},
args: ["anAnnouncement"],
source: "onParseError: anAnnouncement\x0a\x09| lineIndex newContents |\x0a\x09\x0a\x09lineIndex := 1.\x0a\x09\x0a\x09self contents: (String streamContents: [ :stream |\x0a\x09\x09self contents linesDo: [ :each |\x0a\x09\x09\x09lineIndex = anAnnouncement line \x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09stream \x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: 1 to: anAnnouncement column);\x0a\x09\x09\x09\x09\x09\x09nextPutAll: '<- ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: anAnnouncement message;\x0a\x09\x09\x09\x09\x09\x09nextPutAll: ' ';\x0a\x09\x09\x09\x09\x09\x09nextPutAll: (each copyFrom: anAnnouncement column + 1 to: each size) ]\x0a\x09\x09\x09\x09ifFalse: [ stream nextPutAll: each ].\x0a\x09\x09\x09stream nextPutAll: String cr.\x0a\x09\x09\x09lineIndex := lineIndex + 1 ] ])",
messageSends: ["contents:", "streamContents:", "linesDo:", "ifTrue:ifFalse:", "nextPutAll:", "copyFrom:to:", "column", "message", "+", "size", "=", "line", "cr", "contents"],
referencedClasses: ["String"]
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._browserModel())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(_st(_st(self)._browserModel())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString},smalltalk.HLSourceCodeWidget)})},
args: ["aString"],
source: "onProtocolSelected: aString\x0a\x09self browserModel selectedClass ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: self browserModel selectedClass definition",
messageSends: ["ifNil:", "contents:", "selectedClass", "browserModel", "definition"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSaveIt",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._browserModel())._save_(_st(self)._contents());
return self}, function($ctx1) {$ctx1.fill(self,"onSaveIt",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "onSaveIt\x0a\x09self browserModel save: self contents",
messageSends: ["save:", "contents", "browserModel"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onSourceCodeFocusRequested",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onSourceCodeFocusRequested",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "onSourceCodeFocusRequested\x0a\x09self focus",
messageSends: ["focus"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onUnknownVariableError:",
category: 'reactions',
fn: function (anError){
var self=this;
var confirm;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
confirm=_st(self)._confirm_(_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$1=stream;
_st($1)._nextPutAll_(_st(anError)._messageText());
_st($1)._nextPutAll_(_st($String())._cr());
$2=_st($1)._nextPutAll_("Would you like to define an instance variable?");
return $2;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1)})})));
$3=confirm;
if(! smalltalk.assert($3)){
$4=self;
return $4;
};
_st(_st(self)._browserModel())._addInstVarNamed_(_st(anError)._variableName());
return self}, function($ctx1) {$ctx1.fill(self,"onUnknownVariableError:",{anError:anError,confirm:confirm},smalltalk.HLSourceCodeWidget)})},
args: ["anError"],
source: "onUnknownVariableError: anError\x0a\x09| confirm |\x0a\x0a\x09confirm := self confirm: (String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09nextPutAll: anError messageText;\x0a\x09\x09\x09nextPutAll: String cr;\x0a\x09\x09\x09nextPutAll: 'Would you like to define an instance variable?' ]).\x0a\x09\x09\x09\x0a\x09confirm ifFalse: [ ^ self ].\x0a\x09\x0a\x09self browserModel addInstVarNamed: anError variableName",
messageSends: ["confirm:", "streamContents:", "nextPutAll:", "messageText", "cr", "ifFalse:", "addInstVarNamed:", "variableName", "browserModel"],
referencedClasses: ["String"]
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "previous\x0a\x09\x22for browser lists widget\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget},smalltalk.HLSourceCodeWidget)})},
args: ["aWidget"],
source: "previous: aWidget\x0a\x09\x22for browser lists widget\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self)._hasModification();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(self)._hasFocus();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
_st(self)._contents_(_st(_st(_st(self)._model())._selectedMethod())._source());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "refresh\x0a\x09self hasModification ifTrue: [ ^ self ].\x0a    self hasFocus ifTrue: [ ^ self ].\x0a\x0a\x09self contents: self model selectedMethod source",
messageSends: ["ifTrue:", "hasModification", "hasFocus", "contents:", "source", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "saveIt",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._browserModel())._saveSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"saveIt",{},smalltalk.HLSourceCodeWidget)})},
args: [],
source: "saveIt\x0a\x09self browserModel saveSourceCode",
messageSends: ["saveSourceCode", "browserModel"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLSourceCodeWidget.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._browserModel_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel},smalltalk.HLSourceCodeWidget.klass)})},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a\x09\x09browserModel: aBrowserModel;\x0a\x09\x09yourself",
messageSends: ["browserModel:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLSourceCodeWidget.klass);


smalltalk.addClass('HLWorkspace', smalltalk.HLWidget, ['codeWidget'], 'Helios-Workspace');
smalltalk.addMethod(
smalltalk.method({
selector: "canHaveFocus",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWorkspace)})},
args: [],
source: "canHaveFocus\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
fn: function (){
var self=this;
function $HLCodeWidget(){return smalltalk.HLCodeWidget||(typeof HLCodeWidget=="undefined"?nil:HLCodeWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@codeWidget"]=_st($HLCodeWidget())._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{},smalltalk.HLWorkspace)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._codeWidget())._focus();
return $1;
}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLWorkspace)})},
args: [],
source: "focus\x0a\x09^ self codeWidget focus",
messageSends: ["focus", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $HLContainer(){return smalltalk.HLContainer||(typeof HLContainer=="undefined"?nil:HLContainer)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($HLContainer())._with_(_st(self)._codeWidget()));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLWorkspace)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: self codeWidget)",
messageSends: ["with:", "codeWidget"],
referencedClasses: ["HLContainer"]
}),
smalltalk.HLWorkspace);


smalltalk.addMethod(
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Workspace";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(10);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{},smalltalk.HLWorkspace.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLWorkspace.klass);



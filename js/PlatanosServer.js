smalltalk.addPackage('PlatanosServer');
smalltalk.addClass('PlatanosServer', smalltalk.Object, ['https', 'fs', 'credentials', 'url', 'path'], 'PlatanosServer');
smalltalk.addMethod(
smalltalk.method({
selector: "handleGETRequest:respondTo:",
category: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
var uri,filename;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
uri=_st(_st(self["@url"])._parse_(_st(aRequest)._url()))._pathname();
_st(console)._log_(uri);
$1=_st(_st(_st(uri).__eq("/index.html")).__or(_st(uri).__eq("/"))).__or(_st(uri).__eq(""));
if(smalltalk.assert($1)){
_st(self["@fs"])._exists_do_("./index.html",(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
$2=aBoolean;
if(smalltalk.assert($2)){
return _st(self)._respondIndex_(aResponse);
} else {
return _st(self)._respondNotFoundTo_(aResponse);
};
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1)})}));
} else {
filename=_st("./js/").__comma(_st(self["@path"])._basename_(uri));
filename;
_st(self["@fs"])._exists_do_(filename,(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
$3=aBoolean;
if(smalltalk.assert($3)){
return _st(self)._respondJS_to_(filename,aResponse);
} else {
return _st(self)._respondNotFoundTo_(aResponse);
};
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"handleGETRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,uri:uri,filename:filename},smalltalk.PlatanosServer)})},
args: ["aRequest", "aResponse"],
source: "handleGETRequest: aRequest respondTo: aResponse\x0a\x09| uri filename |\x0a\x09uri := (url parse: aRequest url) pathname.\x0a\x09console log: uri.\x0a\x09((uri = '/index.html') | (uri = '/') | (uri = ''))\x0a\x09\x09ifTrue: [\x0a\x09\x09fs exists: './index.html' do: [:aBoolean |\x0a\x09\x09\x09aBoolean\x0a\x09\x09\x09\x09ifFalse: [self respondNotFoundTo: aResponse]\x0a\x09\x09\x09\x09ifTrue: [self respondIndex: aResponse]]\x0a\x09\x09\x09\x09]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09 filename := './js/',(path basename: uri).\x0a\x09\x09\x09 fs exists: filename do: [:aBoolean |\x0a\x09\x09\x09aBoolean\x0a\x09\x09\x09\x09ifFalse: [self respondNotFoundTo: aResponse]\x0a\x09\x09\x09\x09ifTrue: [self respondJS: filename to: aResponse]]\x0a\x09\x09\x09\x09\x0a\x09\x09\x09] ",
messageSends: ["pathname", "parse:", "url", "log:", "ifTrue:ifFalse:", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondIndex:", ",", "basename:", "respondJS:to:", "|", "="],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleRequest:respondTo:",
category: 'request handling',
fn: function (aRequest,aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(aRequest)._method()).__eq("POST");
if(smalltalk.assert($1)){
_st(self)._respondTo_with_(aRequest,aResponse);
} else {
$2=_st(_st(aRequest)._method()).__eq("GET");
if(smalltalk.assert($2)){
_st(self)._handleGETRequest_respondTo_(aRequest,aResponse);
} else {
_st(console)._log_("no get or post");
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},smalltalk.PlatanosServer)})},
args: ["aRequest", "aResponse"],
source: "handleRequest: aRequest respondTo: aResponse\x0a\x09aRequest method = 'POST'\x0a\x09ifTrue: [\x0a\x09\x09self  respondTo: aRequest with: aResponse]\x0a\x09ifFalse:[\x0a\x09\x09aRequest method = 'GET'\x0a\x09\x09ifTrue:[\x0a\x09\x09\x09self handleGETRequest: aRequest respondTo: aResponse]\x0a\x09\x09ifFalse:[\x0a\x09\x09\x09console log:'no get or post'].].",
messageSends: ["ifTrue:ifFalse:", "respondTo:with:", "handleGETRequest:respondTo:", "log:", "=", "method"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@https"]=_st(self)._require_("https");
self["@fs"]=_st(self)._require_("fs");
self["@url"]=_st(self)._require_("url");
self["@path"]=_st(self)._require_("path");
_st(self)._loadCert();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PlatanosServer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09https := self require: 'https'.\x0a    fs := self require: 'fs'.\x0a\x09url := self require: 'url'.\x0a\x09path := self require: 'path'.\x0a\x09self loadCert.",
messageSends: ["initialize", "require:", "loadCert"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "loadCert",
category: 'not yet classified',
fn: function (){
var self=this;
var privateKey,certificate;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
privateKey=_st(_st(self["@fs"])._readFileSync_("privatekey.pem"))._toString();
certificate=_st(_st(self["@fs"])._readFileSync_("certificate.pem"))._toString();
$1=_st($HashedCollection())._new();
_st($1)._at_put_("key",privateKey);
_st($1)._at_put_("cert",certificate);
$2=_st($1)._yourself();
self["@credentials"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"loadCert",{privateKey:privateKey,certificate:certificate},smalltalk.PlatanosServer)})},
args: [],
source: "loadCert\x0a\x0a|privateKey certificate|\x0a\x0aprivateKey := (fs readFileSync:'privatekey.pem') toString.\x0acertificate := (fs readFileSync: 'certificate.pem') toString.\x0a\x0acredentials :=  HashedCollection new at: 'key' put: privateKey ;at: 'cert' put: certificate; yourself.",
messageSends: ["toString", "readFileSync:", "at:put:", "new", "yourself"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "require:",
category: 'not yet classified',
fn: function (aModuleString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@require"])._value_(aModuleString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"require:",{aModuleString:aModuleString},smalltalk.PlatanosServer)})},
args: ["aModuleString"],
source: "require: aModuleString\x0a\x09\x22call to the require function\x22\x0a\x09^require value: aModuleString ",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondIndex:",
category: 'request handling',
fn: function (aResponse){
var self=this;
var type,filename;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
filename="./index.html";
_st(self["@fs"])._readFile_do_(filename,(function(ex,file){
return smalltalk.withContext(function($ctx2) {
$1=_st(ex)._notNil();
if(smalltalk.assert($1)){
_st(console)._log_(_st(filename).__comma(" does not exist"));
return _st(self)._respondInternalErrorTo_(aResponse);
} else {
type="text/html;charset=utf-8";
type;
$2=aResponse;
_st($2)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt(type)]));
_st($2)._write_encoding_(file,"binary");
$3=_st($2)._end();
return $3;
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex,file:file},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"respondIndex:",{aResponse:aResponse,type:type,filename:filename},smalltalk.PlatanosServer)})},
args: ["aResponse"],
source: "respondIndex: aResponse\x0a\x09| type filename |\x0a\x0a\x09filename := './index.html'.\x0a\x09\x0a\x09fs readFile: filename do: [:ex :file |\x0a\x09\x09ex notNil \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09console log: filename, ' does not exist'.\x0a\x09\x09\x09\x09self respondInternalErrorTo: aResponse]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09     type:='text/html;charset=utf-8'.\x0a\x09\x09\x09\x09aResponse \x0a\x09\x09\x09\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09\x09\x09\x09write: file encoding: 'binary';\x0a\x09\x09\x09\x09\x09end]]",
messageSends: ["readFile:do:", "ifTrue:ifFalse:", "log:", ",", "respondInternalErrorTo:", "writeHead:options:", "->", "write:encoding:", "end", "notNil"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondInternalErrorTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((500),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
_st($1)._write_("500 Internal server error");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondInternalErrorTo:",{aResponse:aResponse},smalltalk.PlatanosServer)})},
args: ["aResponse"],
source: "respondInternalErrorTo: aResponse\x0a\x09aResponse \x0a\x09\x09writeHead: 500 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '500 Internal server error';\x0a\x09\x09end",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondJS:to:",
category: 'request handling',
fn: function (aFilename,aResponse){
var self=this;
var type,filename;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
filename=aFilename;
_st(self["@fs"])._readFile_do_(filename,(function(ex,file){
return smalltalk.withContext(function($ctx2) {
$1=_st(ex)._notNil();
if(smalltalk.assert($1)){
_st(console)._log_(_st(filename).__comma(" does not exist"));
return _st(self)._respondInternalErrorTo_(aResponse);
} else {
type="application/javascript;charset=utf-8";
type;
$2=aResponse;
_st($2)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt(type)]));
_st($2)._write_encoding_(file,"binary");
$3=_st($2)._end();
return $3;
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex,file:file},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"respondJS:to:",{aFilename:aFilename,aResponse:aResponse,type:type,filename:filename},smalltalk.PlatanosServer)})},
args: ["aFilename", "aResponse"],
source: "respondJS: aFilename to: aResponse\x0a\x09| type filename |\x0a\x0a\x09filename := aFilename.\x0a\x0a\x09fs readFile: filename do: [:ex :file |\x0a\x09\x09ex notNil \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09console log: filename, ' does not exist'.\x0a\x09\x09\x09\x09self respondInternalErrorTo: aResponse]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09type:='application/javascript;charset=utf-8'.\x0a\x09\x09\x09\x09aResponse \x0a\x09\x09\x09\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09\x09\x09\x09write: file encoding: 'binary';\x0a\x09\x09\x09\x09\x09end]]",
messageSends: ["readFile:do:", "ifTrue:ifFalse:", "log:", ",", "respondInternalErrorTo:", "writeHead:options:", "->", "write:encoding:", "end", "notNil"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondJson:to:",
category: 'request handling',
fn: function (aJson,aResponce){
var self=this;
var type;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
type="text/html;charset=utf-8";
$1=aResponce;
_st($1)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt(type)]));
_st($1)._write_(_st(aJson)._stringify());
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondJson:to:",{aJson:aJson,aResponce:aResponce,type:type},smalltalk.PlatanosServer)})},
args: ["aJson", "aResponce"],
source: "respondJson: aJson to: aResponce\x0a\x0a|type|\x0a\x0atype:='text/html;charset=utf-8'.\x0aaResponce \x0a\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09write: (aJson stringify);\x0a\x09end",
messageSends: ["writeHead:options:", "->", "write:", "stringify", "end"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondNotFoundTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((404),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
_st($1)._write_("404 Not found");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondNotFoundTo:",{aResponse:aResponse},smalltalk.PlatanosServer)})},
args: ["aResponse"],
source: "respondNotFoundTo: aResponse\x0a\x09aResponse \x0a\x09\x09writeHead: 404 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '404 Not found';\x0a\x09\x09end",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondTo:with:",
category: 'request handling',
fn: function (aRequest,aResponce){
var self=this;
var string;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
string="";
_st(aRequest)._on_do_("data",(function(data){
return smalltalk.withContext(function($ctx2) {
string=_st(string).__comma(data);
return string;
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
_st(aRequest)._on_do_("end",(function(){
var json;
return smalltalk.withContext(function($ctx2) {
json=_st($JSON())._parse_(string);
json;
return _st(self)._route_to_(json,aResponce);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"respondTo:with:",{aRequest:aRequest,aResponce:aResponce,string:string},smalltalk.PlatanosServer)})},
args: ["aRequest", "aResponce"],
source: "respondTo: aRequest with: aResponce\x0a\x0a|string|\x0astring :=''.\x0aaRequest on: 'data' do: [:data|string := string,data.].\x0a\x0aaRequest on: 'end' do:[ |json| json := JSON parse: string. self route: json to: aResponce ].",
messageSends: ["on:do:", ",", "parse:", "route:to:"],
referencedClasses: ["JSON"]
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "route:to:",
category: 'request handling',
fn: function (aJson,aResponce){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"route:to:",{aJson:aJson,aResponce:aResponce},smalltalk.PlatanosServer)})},
args: ["aJson", "aResponce"],
source: "route: aJson to: aResponce \x0a ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function (){
var self=this;
var server;
return smalltalk.withContext(function($ctx1) { 
server=_st(self["@https"])._createServer_(self["@credentials"]);
_st(server)._addListener_do_("request",(function(req,res){
return smalltalk.withContext(function($ctx2) {
return _st(self)._handleRequest_respondTo_(req,res);
}, function($ctx2) {$ctx2.fillBlock({req:req,res:res},$ctx1)})}));
_st(server)._listen_((8000));
return self}, function($ctx1) {$ctx1.fill(self,"start",{server:server},smalltalk.PlatanosServer)})},
args: [],
source: "start\x0a\x0a|server|\x0a\x0aserver := https createServer: credentials.\x0aserver addListener: 'request' do: [:req :res| self handleRequest: req respondTo:res].\x0aserver listen: 8000.",
messageSends: ["createServer:", "addListener:do:", "handleRequest:respondTo:", "listen:"],
referencedClasses: []
}),
smalltalk.PlatanosServer);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.PlatanosServer.klass)})},
args: [],
source: "main\x0a\x0aself new start.",
messageSends: ["start", "new"],
referencedClasses: []
}),
smalltalk.PlatanosServer.klass);


smalltalk.addClass('TestServer', smalltalk.PlatanosServer, ['https', 'fs', 'credentials', 'url', 'path'], 'PlatanosServer');
smalltalk.addMethod(
smalltalk.method({
selector: "route:to:",
category: 'not yet classified',
fn: function (aJson,aResponce){
var self=this;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(console)._log_(_st($JSON())._stringify_(aJson));
$1=_st(_st(aJson)._at_("request")).__eq("docGraph");
if(smalltalk.assert($1)){
var initNodes,direction,type;
initNodes=_st(_st(aJson)._at_("data"))._at_("initNodes");
initNodes;
direction=_st(_st(aJson)._at_("data"))._at_("direction");
direction;
_st(console)._log_(_st("the direction is:").__comma(_st(direction)._asString()));
type="text/html;charset=utf-8";
type;
$2=aResponce;
_st($2)._writeHead_options_((200),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt(type)]));
_st($2)._write_(_st(_st(self)._testDocGraph_(direction))._asJSONString());
$3=_st($2)._end();
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"route:to:",{aJson:aJson,aResponce:aResponce},smalltalk.TestServer)})},
args: ["aJson", "aResponce"],
source: "route: aJson to: aResponce \x0a \x0a console log: (JSON stringify: aJson).\x0a \x0a((aJson at: 'request') = 'docGraph')\x0aifTrue: [ |initNodes direction type|\x0a\x09initNodes := (aJson at:'data') at: 'initNodes'.\x0a\x09direction := (aJson at:'data') at: 'direction'.\x0a\x09\x0a\x09console log: 'the direction is:',(direction asString).\x0a\x09\x0a\x09type:='text/html;charset=utf-8'.\x0a\x09aResponce \x0a\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09write: (self testDocGraph: direction) asJSONString;\x0a\x09\x09end.\x0a\x09\x09]",
messageSends: ["log:", "stringify:", "ifTrue:", "at:", ",", "asString", "writeHead:options:", "->", "write:", "asJSONString", "testDocGraph:", "end", "="],
referencedClasses: ["JSON"]
}),
smalltalk.TestServer);

smalltalk.addMethod(
smalltalk.method({
selector: "testDocGraph:",
category: 'not yet classified',
fn: function (direction){
var self=this;
var a;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Doc(){return smalltalk.Doc||(typeof Doc=="undefined"?nil:Doc)}
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$10,$11,$9,$13,$14,$12;
var $early={};
try {
a=_st($Array())._new();
_st(a)._add_(_st($Doc())._sha1_csummary_psha1_("1","first commit",_st($Array())._new()));
$1=_st($Array())._new();
_st($1)._add_("1");
$2=_st($1)._yourself();
_st(a)._add_(_st($Doc())._sha1_csummary_psha1_("2","sec_commit",$2));
$3=_st($Array())._new();
_st($3)._add_("1");
$4=_st($3)._yourself();
_st(a)._add_(_st($Doc())._sha1_csummary_psha1_("3","3rd commit fork",$4));
$5=_st($Array())._new();
_st($5)._add_("3");
$6=_st($5)._yourself();
_st(a)._add_(_st($Doc())._sha1_csummary_psha1_("4","4rth commit",$6));
$7=_st($Array())._new();
_st($7)._add_("3");
_st($7)._add_("2");
$8=_st($7)._yourself();
_st(a)._add_(_st($Doc())._sha1_csummary_psha1_("5","5th commit merge",$8));
_st(a)._add_(_st($Doc())._sha1_csummary_psha1_("6","6th commit new branch",_st($Array())._new()));
_st(_st(direction).__eq((1)))._ifTtrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
$10=_st($HashedCollection())._new();
_st($10)._at_put_("ascendants",a);
$11=_st($10)._yourself();
$9=$11;
throw $early=[$9];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$13=_st($HashedCollection())._new();
_st($13)._at_put_("descendants",a);
$14=_st($13)._yourself();
$12=$14;
throw $early=[$12];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"testDocGraph:",{direction:direction,a:a},smalltalk.TestServer)})},
args: ["direction"],
source: "testDocGraph: direction\x0a\x0a|a|\x0a\x0aa:= Array new.\x0aa add: (Doc sha1: '1' csummary: 'first commit' psha1: (Array new)).\x0aa add: (Doc sha1: '2' csummary: 'sec_commit' psha1: (Array new add:'1';yourself)).\x0aa add: (Doc sha1: '3' csummary: '3rd commit fork' psha1: (Array new add:'1'; yourself)).\x0aa add: (Doc sha1: '4' csummary: '4rth commit' psha1: (Array new add:'3';yourself)).\x0aa add: (Doc sha1: '5' csummary: '5th commit merge' psha1: (Array new add:'3'; add:'2';yourself)).\x0aa add: (Doc sha1: '6' csummary: '6th commit new branch' psha1: (Array new)).\x0a\x0a(direction = 1) ifTtrue: [ ^ HashedCollection new at: 'ascendants' put: a; yourself]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [^ HashedCollection new at: 'descendants' put: a; yourself]",
messageSends: ["new", "add:", "sha1:csummary:psha1:", "yourself", "ifTtrue:ifFalse:", "at:put:", "="],
referencedClasses: ["Array", "Doc", "HashedCollection"]
}),
smalltalk.TestServer);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.TestServer.klass)})},
args: [],
source: "main\x0a\x0aself new start.",
messageSends: ["start", "new"],
referencedClasses: []
}),
smalltalk.TestServer.klass);



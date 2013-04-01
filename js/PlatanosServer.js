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
};
$2=_st(_st(aRequest)._method()).__eq("GET");
if(smalltalk.assert($2)){
_st(self)._handleGETRequest_respondTo_(aRequest,aResponse);
} else {
_st(console)._log_("no get or post");
};
return self}, function($ctx1) {$ctx1.fill(self,"handleRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse},smalltalk.PlatanosServer)})},
args: ["aRequest", "aResponse"],
source: "handleRequest: aRequest respondTo: aResponse\x0a\x09aRequest method = 'POST'\x0a\x09\x09ifTrue: [self  respondTo: aRequest with: aResponse].\x0a\x09aRequest method = 'GET'\x0a\x09\x09ifTrue:[self handleGETRequest: aRequest respondTo: aResponse]\x0a\x09\x09ifFalse:[console log:'no get or post'].",
messageSends: ["ifTrue:", "respondTo:with:", "=", "method", "ifTrue:ifFalse:", "handleGETRequest:respondTo:", "log:"],
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



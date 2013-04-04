smalltalk.addPackage('PlatanosServer');
smalltalk.addClass('PlatanosServer', smalltalk.Object, ['https', 'fs', 'credentials', 'url', 'path'], 'PlatanosServer');
smalltalk.addMethod(
smalltalk.method({
selector: "handleGETRequest:respondTo:",
fn: function (aRequest,aResponse){
var self=this;
var uri,filename;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
uri=_st(_st(self["@url"])._parse_(_st(aRequest)._url()))._pathname();
_st(console)._log_(_st("uri is:").__comma(uri));
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
$3=_st(".js").__eq(_st(self["@path"])._extname_(uri));
if(smalltalk.assert($3)){
var sep;
filename=_st(self["@path"])._normalize_(uri);
filename;
_st(console)._log_(_st("filename is:").__comma(filename));
sep=_st(_st(filename)._split_(_st(self["@path"])._sep()))._at_((1));
sep;
_st(console)._log_(sep);
$4=_st("packages").__eq(sep);
if(smalltalk.assert($4)){
_st(self["@fs"])._exists_do_(filename,(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
$5=aBoolean;
if(smalltalk.assert($5)){
return _st(self)._respondJS_to_(filename,aResponse);
} else {
return _st(self)._respondNotFoundTo_(aResponse);
};
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1)})}));
} else {
$6=_st("js").__eq(sep);
if(smalltalk.assert($6)){
_st(self["@fs"])._exists_do_(filename,(function(aBoolean){
return smalltalk.withContext(function($ctx2) {
$7=aBoolean;
if(smalltalk.assert($7)){
return _st(self)._respondJS_to_(filename,aResponse);
} else {
return _st(self)._respondNotFoundTo_(aResponse);
};
}, function($ctx2) {$ctx2.fillBlock({aBoolean:aBoolean},$ctx1)})}));
} else {
_st(console)._log_(_st("request with wrorng filename:").__comma(filename));
};
};
};
};
return self}, function($ctx1) {$ctx1.fill(self,"handleGETRequest:respondTo:",{aRequest:aRequest,aResponse:aResponse,uri:uri,filename:filename},smalltalk.PlatanosServer)})},
messageSends: ["pathname", "parse:", "url", "log:", ",", "ifTrue:ifFalse:", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondIndex:", "ifTrue:", "normalize:", "at:", "split:", "sep", "respondJS:to:", "=", "extname:", "|"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "handleRequest:respondTo:",
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
messageSends: ["ifTrue:ifFalse:", "respondTo:with:", "handleGETRequest:respondTo:", "log:", "=", "method"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "require:", "loadCert"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "loadCert",
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
messageSends: ["toString", "readFileSync:", "at:put:", "new", "yourself"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "require:",
fn: function (aModuleString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@require"])._value_(aModuleString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"require:",{aModuleString:aModuleString},smalltalk.PlatanosServer)})},
messageSends: ["value:"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondIndex:",
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
messageSends: ["readFile:do:", "ifTrue:ifFalse:", "log:", ",", "respondInternalErrorTo:", "writeHead:options:", "->", "write:encoding:", "end", "notNil"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondInternalErrorTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((500),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
_st($1)._write_("500 Internal server error");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondInternalErrorTo:",{aResponse:aResponse},smalltalk.PlatanosServer)})},
messageSends: ["writeHead:options:", "->", "write:", "end"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondJS:to:",
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
messageSends: ["readFile:do:", "ifTrue:ifFalse:", "log:", ",", "respondInternalErrorTo:", "writeHead:options:", "->", "write:encoding:", "end", "notNil"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondJson:to:",
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
messageSends: ["writeHead:options:", "->", "write:", "stringify", "end"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondNotFoundTo:",
fn: function (aResponse){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aResponse;
_st($1)._writeHead_options_((404),smalltalk.HashedCollection._fromPairs_([_st("Content-Type").__minus_gt("text/plain")]));
_st($1)._write_("404 Not found");
$2=_st($1)._end();
return self}, function($ctx1) {$ctx1.fill(self,"respondNotFoundTo:",{aResponse:aResponse},smalltalk.PlatanosServer)})},
messageSends: ["writeHead:options:", "->", "write:", "end"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "respondTo:with:",
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
messageSends: ["on:do:", ",", "parse:", "route:to:"]}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "route:to:",
fn: function (aJson,aResponce){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"route:to:",{aJson:aJson,aResponce:aResponce},smalltalk.PlatanosServer)})},
messageSends: []}),
smalltalk.PlatanosServer);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
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
messageSends: ["createServer:", "addListener:do:", "handleRequest:respondTo:", "listen:"]}),
smalltalk.PlatanosServer);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.PlatanosServer.klass)})},
messageSends: ["start", "new"]}),
smalltalk.PlatanosServer.klass);


smalltalk.addClass('TestServer', smalltalk.PlatanosServer, ['https', 'fs', 'credentials', 'url', 'path'], 'PlatanosServer');
smalltalk.addMethod(
smalltalk.method({
selector: "route:to:",
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
messageSends: ["log:", "stringify:", "ifTrue:", "at:", ",", "asString", "writeHead:options:", "->", "write:", "asJSONString", "testDocGraph:", "end", "="]}),
smalltalk.TestServer);

smalltalk.addMethod(
smalltalk.method({
selector: "testDocGraph:",
fn: function (direction){
var self=this;
var a;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Doc(){return smalltalk.Doc||(typeof Doc=="undefined"?nil:Doc)}
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$11,$12,$10,$14,$15,$13;
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
$9=_st(direction).__eq((1));
if(smalltalk.assert($9)){
$11=_st($HashedCollection())._new();
_st($11)._at_put_("ascendants",a);
$12=_st($11)._yourself();
$10=$12;
return $10;
} else {
$14=_st($HashedCollection())._new();
_st($14)._at_put_("descendants",a);
$15=_st($14)._yourself();
$13=$15;
return $13;
};
return self}, function($ctx1) {$ctx1.fill(self,"testDocGraph:",{direction:direction,a:a},smalltalk.TestServer)})},
messageSends: ["new", "add:", "sha1:csummary:psha1:", "yourself", "ifTrue:ifFalse:", "at:put:", "="]}),
smalltalk.TestServer);


smalltalk.addMethod(
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._start();
return self}, function($ctx1) {$ctx1.fill(self,"main",{},smalltalk.TestServer.klass)})},
messageSends: ["start", "new"]}),
smalltalk.TestServer.klass);



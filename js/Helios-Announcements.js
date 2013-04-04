smalltalk.addPackage('Helios-Announcements');
smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');


smalltalk.addClass('HLCodeHandled', smalltalk.HLAnnouncement, ['code'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "code",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@code"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},smalltalk.HLCodeHandled)})},
args: [],
source: "code\x0a\x0a\x09^ code",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeHandled);

smalltalk.addMethod(
smalltalk.method({
selector: "code:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@code"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"code:",{aModel:aModel},smalltalk.HLCodeHandled)})},
args: ["aModel"],
source: "code: aModel\x0a\x0a\x09code := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeHandled);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (aCodeModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._code_(aCodeModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCodeModel:aCodeModel},smalltalk.HLCodeHandled.klass)})},
args: ["aCodeModel"],
source: "on: aCodeModel\x0a\x0a\x09^ self new \x0a    \x09code: aCodeModel;\x0a        yourself",
messageSends: ["code:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLCodeHandled.klass);


smalltalk.addClass('HLDoItExecuted', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDoItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLInspectItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLPrintItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDiveRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLErrorRaised', smalltalk.HLAnnouncement, ['error'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "error",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@error"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"error",{},smalltalk.HLErrorRaised)})},
args: [],
source: "error\x0a\x09^ error",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
category: 'accessing',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@error"]=anError;
return self}, function($ctx1) {$ctx1.fill(self,"error:",{anError:anError},smalltalk.HLErrorRaised)})},
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLErrorRaised);



smalltalk.addClass('HLCompileErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLParseErrorRaised', smalltalk.HLErrorRaised, ['line', 'column', 'message'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "column",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@column"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"column",{},smalltalk.HLParseErrorRaised)})},
args: [],
source: "column\x0a\x09^ column",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "column:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@column"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"column:",{anInteger:anInteger},smalltalk.HLParseErrorRaised)})},
args: ["anInteger"],
source: "column: anInteger\x0a\x09column := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@line"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},smalltalk.HLParseErrorRaised)})},
args: [],
source: "line\x0a\x09^ line",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "line:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@line"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"line:",{anInteger:anInteger},smalltalk.HLParseErrorRaised)})},
args: ["anInteger"],
source: "line: anInteger\x0a\x09line := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.HLParseErrorRaised)})},
args: [],
source: "message\x0a\x09^ message",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.HLParseErrorRaised)})},
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);



smalltalk.addClass('HLUnknownVariableErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLFocusRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLClassesFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodsFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLPackagesFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolsFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLSourceCodeFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLInstVarAdded', smalltalk.HLAnnouncement, ['theClass', 'variableName'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.HLInstVarAdded)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.HLInstVarAdded)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{},smalltalk.HLInstVarAdded)})},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString},smalltalk.HLInstVarAdded)})},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInstVarAdded);



smalltalk.addClass('HLItemSelected', smalltalk.HLAnnouncement, ['item'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "item",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@item"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"item",{},smalltalk.HLItemSelected)})},
args: [],
source: "item\x0a\x09^ item",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "item:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@item"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"item:",{anObject:anObject},smalltalk.HLItemSelected)})},
args: ["anObject"],
source: "item: anObject\x0a\x09item := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._item_(anItem);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anItem:anItem},smalltalk.HLItemSelected.klass)})},
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
messageSends: ["item:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLItemSelected.klass);


smalltalk.addClass('HLClassSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLInstanceVariableSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLPackageSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLRefreshRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSaveSourceCode', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSearchReferences', smalltalk.HLAnnouncement, ['searchString'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "searchString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@searchString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"searchString",{},smalltalk.HLSearchReferences)})},
args: [],
source: "searchString\x0a\x09^ searchString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSearchReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "searchString:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@searchString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"searchString:",{aString:aString},smalltalk.HLSearchReferences)})},
args: ["aString"],
source: "searchString: aString\x0a\x09searchString := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSearchReferences);



smalltalk.addClass('HLShowCommentToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');



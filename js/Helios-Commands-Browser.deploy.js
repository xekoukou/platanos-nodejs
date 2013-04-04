smalltalk.addPackage('Helios-Commands-Browser');
smalltalk.addClass('HLBrowserCommand', smalltalk.HLModelCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLBrowserCommand)})},
messageSends: []}),
smalltalk.HLBrowserCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCommand.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLBrowserGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "g";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLBrowserGoToCommand.klass)})},
messageSends: []}),
smalltalk.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Go to";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLBrowserGoToCommand.klass)})},
messageSends: []}),
smalltalk.HLBrowserGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnClasses();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToClassesCommand)})},
messageSends: ["focusOnClasses", "model"]}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToClassesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToClassesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnMethods();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToMethodsCommand)})},
messageSends: ["focusOnMethods", "model"]}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToMethodsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToMethodsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnPackages();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToPackagesCommand)})},
messageSends: ["focusOnPackages", "model"]}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "p";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToPackagesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToPackagesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnProtocols();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToProtocolsCommand)})},
messageSends: ["focusOnProtocols", "model"]}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToProtocolsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Protocols";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToProtocolsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._focusOnSourceCode();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToSourceCodeCommand)})},
messageSends: ["focusOnSourceCode", "model"]}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "s";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Source code";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLCommitPackageCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Packages";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLCommitPackageCommand)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._commitPackage();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCommitPackageCommand)})},
messageSends: ["commitPackage", "model"]}),
smalltalk.HLCommitPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCommitPackageCommand)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "k";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Commit";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCommitPackageCommand.klass)})},
messageSends: []}),
smalltalk.HLCommitPackageCommand.klass);


smalltalk.addClass('HLCopyCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCopyCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Copy";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCopyCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyCommand.klass);


smalltalk.addClass('HLCopyClassCommand', smalltalk.HLCopyCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLCopyClassCommand)})},
messageSends: []}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "New class name:";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLCopyClassCommand)})},
messageSends: []}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._copyClassTo_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLCopyClassCommand)})},
messageSends: ["copyClassTo:", "input", "model"]}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLCopyClassCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLCopyClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLCopyClassCommand)})},
messageSends: []}),
smalltalk.HLCopyClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCopyClassCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLCopyClassCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Copy class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLCopyClassCommand.klass)})},
messageSends: []}),
smalltalk.HLCopyClassCommand.klass);


smalltalk.addClass('HLFindCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "f";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindCommand.klass)})},
messageSends: []}),
smalltalk.HLFindCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindCommand.klass)})},
messageSends: []}),
smalltalk.HLFindCommand.klass);


smalltalk.addClass('HLFindClassCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._openClassNamed_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindClassCommand)})},
messageSends: ["openClassNamed:", "input", "model"]}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindClassCommand)})},
messageSends: ["availableClassNames", "model"]}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find a class";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLFindClassCommand)})},
messageSends: []}),
smalltalk.HLFindClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindClassCommand.klass)})},
messageSends: []}),
smalltalk.HLFindClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindClassCommand.klass)})},
messageSends: []}),
smalltalk.HLFindClassCommand.klass);


smalltalk.addClass('HLFindReferencesCommand', smalltalk.HLFindCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "find references";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLFindReferencesCommand)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
function $HLReferences(){return smalltalk.HLReferences||(typeof HLReferences=="undefined"?nil:HLReferences)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($HLReferences())._new();
_st($1)._open();
$2=_st($1)._search_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLFindReferencesCommand)})},
messageSends: ["open", "new", "search:", "input"]}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._availableClassNames()).__comma(_st(_st(self)._model())._allSelectors());
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLFindReferencesCommand)})},
messageSends: [",", "allSelectors", "model", "availableClassNames"]}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Find references of";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLFindReferencesCommand)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLFindReferencesCommand)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "r";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLFindReferencesCommand.klass)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "References";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLFindReferencesCommand.klass)})},
messageSends: []}),
smalltalk.HLFindReferencesCommand.klass);


smalltalk.addClass('HLMoveToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveClassToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveClassToCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLMoveClassToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveClassToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveClassToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToCommand.klass);


smalltalk.addClass('HLMoveClassToPackageCommand', smalltalk.HLMoveClassToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLMoveClassToPackageCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a package";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveClassCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._moveClassToPackage_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveClassCommand)})},
messageSends: ["moveClassToPackage:", "input", "model"]}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availablePackageNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveClassCommand)})},
messageSends: ["availablePackageNames", "model"]}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move class to package:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveClassCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveClassCommand)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "p";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to package";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to package...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveClassToPackageCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLMoveMethodToCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveMethodToCommand)})},
messageSends: ["notNil", "selectedMethod", "model"]}),
smalltalk.HLMoveMethodToCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a class";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._moveMethodToClass_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: ["moveMethodToClass:", "input", "model"]}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: ["availableClassNames", "model"]}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move method to class:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToClassCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "select a protocol";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._moveMethodToProtocol_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["moveMethodToProtocol:", "input", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputCompletion",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._model())._availableProtocols();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: ["availableProtocols", "model"]}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "inputLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move method to a protocol:";
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToProtocolCommand)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "to protocol";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Move to protocol...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
messageSends: []}),
smalltalk.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "x";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveClassCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRemoveClassCommand)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._removeClass();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveClassCommand)})},
messageSends: ["removeClass", "model"]}),
smalltalk.HLRemoveClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveClassCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLRemoveClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove class";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveClassCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Methods";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._removeMethod();
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: ["removeMethod", "model"]}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveMethodCommand)})},
messageSends: ["notNil", "selectedMethod", "model"]}),
smalltalk.HLRemoveMethodCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "m";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Method";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Remove method";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRemoveMethodCommand.klass)})},
messageSends: []}),
smalltalk.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLRenameCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "r";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRenameCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRenameCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameCommand.klass);


smalltalk.addClass('HLRenameClassCommand', smalltalk.HLRenameCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "category",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Classes";
}, function($ctx1) {$ctx1.fill(self,"category",{},smalltalk.HLRenameClassCommand)})},
messageSends: []}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename class to:";
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLRenameClassCommand)})},
messageSends: []}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._renameClassTo_(_st(self)._input());
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRenameClassCommand)})},
messageSends: ["renameClassTo:", "input", "model"]}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._model())._selectedClass())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRenameClassCommand)})},
messageSends: ["notNil", "selectedClass", "model"]}),
smalltalk.HLRenameClassCommand);

smalltalk.addMethod(
smalltalk.method({
selector: "isInputRequired",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLRenameClassCommand)})},
messageSends: []}),
smalltalk.HLRenameClassCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRenameClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRenameClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameClassCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "menuLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Rename class...";
}, function($ctx1) {$ctx1.fill(self,"menuLabel",{},smalltalk.HLRenameClassCommand.klass)})},
messageSends: []}),
smalltalk.HLRenameClassCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "t";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Toggle";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassCommentCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showComment_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassCommentCommand)})},
messageSends: ["showComment:", "model"]}),
smalltalk.HLToggleClassCommentCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "d";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassCommentCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassCommentCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Documentation";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassCommentCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassCommentCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showInstance_(false);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassSideCommand)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "c";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Class side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._showInstance_(true);
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleInstanceSideCommand)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "i";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Instance side";
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleInstanceSideCommand.klass);



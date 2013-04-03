Smalltalk current createPackage: 'PlatanosServer'!
Object subclass: #PlatanosServer
	instanceVariableNames: 'https fs credentials url path'
	package: 'PlatanosServer'!

!PlatanosServer methodsFor: 'not yet classified'!

initialize
	super initialize.
	https := self require: 'https'.
    fs := self require: 'fs'.
	url := self require: 'url'.
	path := self require: 'path'.
	self loadCert.
!

loadCert

|privateKey certificate|

privateKey := (fs readFileSync:'privatekey.pem') toString.
certificate := (fs readFileSync: 'certificate.pem') toString.

credentials :=  HashedCollection new at: 'key' put: privateKey ;at: 'cert' put: certificate; yourself.
!

require: aModuleString
	"call to the require function"
	^require value: aModuleString
!

start

|server|

server := https createServer: credentials.
server addListener: 'request' do: [:req :res| self handleRequest: req respondTo:res].
server listen: 8000.
! !

!PlatanosServer methodsFor: 'request handling'!

handleGETRequest: aRequest respondTo: aResponse
	| uri filename |
	uri := (url parse: aRequest url) pathname.
	console log: uri.
	((uri = '/index.html') | (uri = '/') | (uri = ''))
		ifTrue: [
		fs exists: './index.html' do: [:aBoolean |
			aBoolean
				ifFalse: [self respondNotFoundTo: aResponse]
				ifTrue: [self respondIndex: aResponse]]
				]
		ifFalse: [
			 filename := './js/',(path basename: uri).
			 fs exists: filename do: [:aBoolean |
			aBoolean
				ifFalse: [self respondNotFoundTo: aResponse]
				ifTrue: [self respondJS: filename to: aResponse]]
				
			]
!

handleRequest: aRequest respondTo: aResponse
	aRequest method = 'POST'
	ifTrue: [
		self  respondTo: aRequest with: aResponse]
	ifFalse:[
		aRequest method = 'GET'
		ifTrue:[
			self handleGETRequest: aRequest respondTo: aResponse]
		ifFalse:[
			console log:'no get or post'].].
!

respondIndex: aResponse
	| type filename |

	filename := './index.html'.
	
	fs readFile: filename do: [:ex :file |
		ex notNil 
			ifTrue: [
				console log: filename, ' does not exist'.
				self respondInternalErrorTo: aResponse]
			ifFalse: [
			     type:='text/html;charset=utf-8'.
				aResponse 
					writeHead: 200 options:  #{'Content-Type' -> type};
					write: file encoding: 'binary';
					end]]
!

respondInternalErrorTo: aResponse
	aResponse 
		writeHead: 500 options: #{'Content-Type' -> 'text/plain'};
		write: '500 Internal server error';
		end
!

respondJS: aFilename to: aResponse
	| type filename |

	filename := aFilename.

	fs readFile: filename do: [:ex :file |
		ex notNil 
			ifTrue: [
				console log: filename, ' does not exist'.
				self respondInternalErrorTo: aResponse]
			ifFalse: [
					type:='application/javascript;charset=utf-8'.
				aResponse 
					writeHead: 200 options:  #{'Content-Type' -> type};
					write: file encoding: 'binary';
					end]]
!

respondNotFoundTo: aResponse
	aResponse 
		writeHead: 404 options: #{'Content-Type' -> 'text/plain'};
		write: '404 Not found';
		end
!

respondTo: aRequest with: aResponce

|string|
string :=''.
aRequest on: 'data' do: [:data|string := string,data.].

aRequest on: 'end' do:[ |json| json := JSON parse: string. self route: json to: aResponce ].
!

route: aJson to: aResponce
! !

!PlatanosServer class methodsFor: 'not yet classified'!

main

self new start.
! !


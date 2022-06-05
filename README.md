# CORP.STARTUP.BUSINESS.STOCK.BACKEND.NODEJS.N

## Eventos Historicos

1.- Crear de la estructura del proyecto y nuestros primeros microservicios: 2022-05-03
    - packages
        - clients
            - security
            - log
        - commons
    - services
        - private
            - log
            - security: 
        - public
            - authentication
            - master
            - transaction

2.- Implementacion de Logica para el Login en el microservicios de authentication

3.- Implementacion del microservicios de security; creacion y gestion de tokens

4.- Implementacion del microservicio de purchas request:
  - db.SystemParameters.insertOne({
    grocerId: new ObjectId(),
    operations: [{
        code: 'PURCHASE_REQUEST_SECUENCE',
        value: {
            init: 0,
            current: 0
        }
    }, {
        code: 'PURCHASE_REQUEST_SECUENCE',
        value: {
            init: 0,
            current: 0
        }
    }, {
        code: 'QUOTE_SECUENCE',
        value: {
            init: 0,
            current: 0
        }
    }],
    	"auditProperties" : {
		"dateCreate" : new Date(),
		"dateUpdate" : null,
		"userCreate" : "WEB",
		"userUpdate" : null,
		"recordActive" : true
	},
    
})

db.Products.insertOne({
    
    code: 'PRD02',
    details: [
        {
            idTypeMeasure: new ObjectId(),
            price: 200.12
        },
        {
            idTypeMeasure: new ObjectId(),
            price: 200.13
        },
        {
            idTypeMeasure: new ObjectId(),
            price: 200
        }
    ],
    name: 'Producto de prueba',
    description: 'detalle de mi productos. . . . . ',
    	"auditProperties" : {
		"dateCreate" : ISODate("2022-05-11T11:03:32.927-05:00"),
		"dateUpdate" : null,
		"userCreate" : "WEB",
		"userUpdate" : null,
		"recordActive" : true
	},
})

swagger:
purchase request: http://0.0.0.0:3004/api/
quotation: http://0.0.0.0:3006/api/

token supplier

supplier01@yopmail.com
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2Mjg3MDU3YjY4MDc1NzIyNzdlMjFkNTQiLCJlbWFpbCI6InN1cHBsaWVyMDFAeW9wbWFpbC5jb20iLCJwcm9maWxlIjoiVVNSMDEiLCJmaXJzdE5hbWUiOiJGZXJuYW5kbyIsImxhc3ROYW1lIjoiWmF2YWxldGEgSGVucmlxdWV6IiwicGVybWlzaW9ucyI6WyJwdXJjaGFzZTo6cmVxdWVzdDo6cmVhZCIsInB1cmNoYXNlOjpvcmRlcjo6d3JpdGUiLCJwdXJjaGFzZTo6b3JkZXI6OnJlYWQiLCJxdW90YXRpb246OndyaXRlIiwicXVvdGF0aW9uOjpyZWFkIiwicHJvZHVjdDpyZWFkIl0sImlhdCI6MTY1MzcwNzQ3NiwiZXhwIjoxNjg1MjQzNDc2fQ.DV836atzZ5PDD06mIZnHbJAgiQ2NF_NjuZv76XbTTxs



token grocer

fernando.zavaleta@tismart.com
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2Mjc1ODFjNWE3YTFmMTZmMjc1MGEwMTQiLCJlbWFpbCI6ImZlcm5hbmRvLnphdmFsZXRhQHRpc21hcnQuY29tIiwicHJvZmlsZSI6IlVTUjAyIiwiZmlyc3ROYW1lIjoiRmVybmFuZG8iLCJsYXN0TmFtZSI6IlphdmFsZXRhIEhlbnJpcXVleiIsImlkR3JvY2VyIjoiNjI3ZGViZDc2OWVkODZmMTNlNzdmMzhlIiwicGVybWlzaW9ucyI6WyJwdXJjaGFzZTo6cmVxdWVzdDo6d3JpdGUiLCJwdXJjaGFzZTo6cmVxdWVzdDo6cmVhZCIsInB1cmNoYXNlOjpvcmRlcjo6d3JpdGUiLCJwdXJjaGFzZTo6b3JkZXI6OnJlYWQiLCJxdW90YXRpb246OnJlYWQiLCJwcm9kdWN0Ojp3cml0ZSIsInByb2R1Y3Q6cmVhZCJdLCJpYXQiOjE2NTM3OTA4NTAsImV4cCI6MTY4NTMyNjg1MH0.V3GMhfeZybJ9IwWBX1Cvy2eRXnpL0wUVI4dOmQ87nVA



.NPMRC

registry=http://34.212.200.63:4873


env-log
SETUP_TCP_HOST=0.0.0.0
SETUP_TCP_PORT=10002

env-security
SETUP_TCP_HOST=0.0.0.0
SETUP_TCP_PORT=10000

JWT_SECRET='CORP.STARTUP.BUSINESS.STOCK.BACKEND.NODEJS.NESTJS'
JWT_EXPIRESIN='365d'

env-auth
SETUP_HTTP_HOST=0.0.0.0
SETUP_HTTP_PORT=3001

CLIENT_SECURITY_HOST=0.0.0.0
CLIENT_SECURITY_PORT=10000

DATABASE_MONGO_HOSTNAME=''
DATABASE_MONGO_USER=''
DATABASE_MONGO_PASSWORD=''
DATABASE_MONGO_NAME=''

env-master
SETUP_HTTP_HOST=0.0.0.0
SETUP_HTTP_PORT=3005

SETUP_TCP_HOST=0.0.0.0
SETUP_TCP_PORT=10001

CLIENT_SECURITY_HOST=0.0.0.0
CLIENT_SECURITY_PORT=10000

DATABASE_MONGO_HOSTNAME=''
DATABASE_MONGO_USER=''
DATABASE_MONGO_PASSWORD=''
DATABASE_MONGO_NAME=''


env po
SETUP_HTTP_HOST=0.0.0.0
SETUP_HTTP_PORT=3003

CLIENT_SECURITY_HOST=0.0.0.0
CLIENT_SECURITY_PORT=10000

CLIENT_MASTER_HOST=0.0.0.0
CLIENT_MASTER_PORT=10001

DATABASE_MONGO_HOSTNAME=''
DATABASE_MONGO_USER=''
DATABASE_MONGO_PASSWORD=''
DATABASE_MONGO_NAME=''

env-pr
SETUP_HTTP_HOST=0.0.0.0
SETUP_HTTP_PORT=3004

CLIENT_SECURITY_HOST=0.0.0.0
CLIENT_SECURITY_PORT=10000

CLIENT_MASTER_HOST=0.0.0.0
CLIENT_MASTER_PORT=10001

CLIENT_LOG_HOST=0.0.0.0
CLIENT_LOG_PORT=10002

DATABASE_MONGO_HOSTNAME=''
DATABASE_MONGO_USER=''
DATABASE_MONGO_PASSWORD=''
DATABASE_MONGO_NAME=''

env-quotation
SETUP_HTTP_HOST=0.0.0.0
SETUP_HTTP_PORT=3006

CLIENT_SECURITY_HOST=0.0.0.0
CLIENT_SECURITY_PORT=10000

CLIENT_MASTER_HOST=0.0.0.0
CLIENT_MASTER_PORT=10001

DATABASE_MONGO_HOSTNAME=''
DATABASE_MONGO_USER=''
DATABASE_MONGO_PASSWORD=''
DATABASE_MONGO_NAME=''
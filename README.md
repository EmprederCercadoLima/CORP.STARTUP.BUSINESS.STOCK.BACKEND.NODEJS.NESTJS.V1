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
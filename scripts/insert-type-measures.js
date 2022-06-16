db.TypeMeasures.insertMany(
    [
        {
            _id: new ObjectId("629e87b20faef49768035101"),
            code: 'TMS01',
            name: '6-pack',
            description: 'Seis unidades de un producto (Botella, tetrapack, latas)',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
            _id: new ObjectId("629e87bbb9cff1fecf7e1671"),
            code: 'TMS02',
            name: '12-pack',
            description: 'Doce unidades de un producto (Botella, tetrapack, latas)',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
            _id: new ObjectId("629e87c4566a9bf934558ced"),
            code: 'TMS03',
            name: 'Kg',
            description: 'Unidad de medida por peso (Kilogramo)',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
            _id: new ObjectId("629e87cd6a73a5369ab05b1d"),
            code: 'TMS04',
            name: 'Pkg',
            description: 'Unidad de medida por paquetes',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
            {
            _id: new ObjectId("629e87d4edc3f8c6196cde0a"),
            code: 'TMS05',
            name: 'Lt',
            description: 'Unidad de medida por volumen (Litros)',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
            _id: new ObjectId("629eb6579de05062585e70e3"),
            code: 'TMS06',
            name: 'Un',
            description: 'Unidad de medida mas pequeña',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
            {
            _id: new ObjectId("629eb7646163b0f50561d049"),
            code: 'TMS07',
            name: 'Gr',
            description: 'Unidad de medida por peso (Gramo)',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
        {
            _id: new ObjectId("629ebd6489f7dd3038deb03f"),
            code: 'TMS08',
            name: '24-pack',
            description: '24 unidades de un producto (Botella, tetrapack, latas)',
            status: {
                value: 1,
                description: "Activado"
            },
            auditProperties: {
                dateCreate: new Date(),
                dateUpdate: null,
                userCreate: 'Database Script',
                userUpdate: null,
                recordActive: true
            }
        },
    ]
    )
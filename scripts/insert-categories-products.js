db.CategorieProducts.insertMany(
    [
        {
            _id: new ObjectId("629e83e59eaa85fcadf2f4ff"),
            code: 'CAT01',
            name: 'Abarrotes',
            description: 'Abarrotes',
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
            _id: new ObjectId("629e83ecde6ade7e25dcc111"),
            code: 'CAT02',
            name: 'Enlatados',
            description: 'Enlatados',
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
            _id: new ObjectId("629e83f1cfeb4c802d16d424"),
            code: 'CAT03',
            name: 'Lacteos',
            description: 'Lacteos',
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
            _id: new ObjectId("629e84501c992ee5059afb4e"),
            code: 'CAT04',
            name: 'Bebidas alcoholicas',
            description: 'Bebidas alcoholicas',
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
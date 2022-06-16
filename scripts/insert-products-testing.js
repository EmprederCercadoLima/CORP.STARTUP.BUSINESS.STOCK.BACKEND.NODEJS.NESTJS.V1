db.Products.insertMany(
    [
        {
            code: 'ARRCOS5K',
            category: {
                idCategory: new ObjectId("629e83e59eaa85fcadf2f4ff"),
                name: 'Abarrotes'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/254547/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629e87c4566a9bf934558ced"),
                name: 'Kg'
            }],
            name: 'Arroz',
            description: 'Arroz Costeño',
            detail: 'Arroz Extra Costeño 5kg',
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
            code: 'ARRFAR5K',
            category: {
                idCategory: new ObjectId("629e83e59eaa85fcadf2f4ff"),
                name: 'Abarrotes'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/215276/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629e87c4566a9bf934558ced"),
                name: 'Kg'
            }],
            name: 'Arroz',
            description: 'Arroz Faraon',
            detail: 'Arroz Faraon Extra Añejo Naranja Bolsa 5 kg',
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
            code: 'AVNOSI9G',
            category: {
                idCategory: new ObjectId("629e83e59eaa85fcadf2f4ff"),
                name: 'Abarrotes'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/550692/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629eb7646163b0f50561d049"),
                name: 'Gr'
            }],
            name: 'Avena',
            description: 'Avena 3 Ositos',
            detail: 'Avena Precocida 3 Ositos 900g',
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
            code: 'AVNQUA2G',
            category: {
                idCategory: new ObjectId("629e83e59eaa85fcadf2f4ff"),
                name: 'Abarrotes'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/215276/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629eb7646163b0f50561d049"),
                name: 'Gr'
            }],
            name: 'Avena',
            description: 'Avena Quaker',
            detail: 'Avena Tradicional Quaker 200 g',
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
            code: 'PASVIT5G',
            category: {
                idCategory: new ObjectId("629e83e59eaa85fcadf2f4ff"),
                name: 'Abarrotes'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/352252/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629eb7646163b0f50561d049"),
                name: 'Gr'
            }],
            name: 'Pasta',
            description: 'Pasta Don Vittorio',
            detail: 'Pasta de Trigo Tornillo Don Vittorio Bolsa 500 gr',
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
            code: 'PASMOL5G',
            category: {
                idCategory: new ObjectId("629e83e59eaa85fcadf2f4ff"),
                name: 'Abarrotes'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/492463/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629eb7646163b0f50561d049"),
                name: 'Gr'
            }],
            name: 'Pasta',
            description: 'Pasta Molitalia',
            detail: 'Pasta Corta Macarrón Bolsa 500 g',
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
            code: 'ATUNIC1G',
            category: {
                idCategory: new ObjectId("629e83ecde6ade7e25dcc111"),
                name: 'Enlatados'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/545828/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629e87bbb9cff1fecf7e1671"),
                name: '12-pack'
            }, {
                idTypeMeasure: new ObjectId("629ebd6489f7dd3038deb03f"),
                name: '24-pack'
            }],
            name: 'Atun',
            description: 'Atún Nicolini',
            detail: 'Filete de Atún Nicolini 160g',
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
            code: 'ATUFLO1G',
            category: {
                idCategory: new ObjectId("629e83ecde6ade7e25dcc111"),
                name: 'Enlatados'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/535795/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629e87bbb9cff1fecf7e1671"),
                name: '12-pack'
            }, {
                idTypeMeasure: new ObjectId("629ebd6489f7dd3038deb03f"),
                name: '24-pack'
            }],
            name: 'Atun',
            description: 'Atún Florida',
            detail: 'Filete de Atún en Aceite Florida 150g',
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
            code: 'YODUGL1K',
            category: {
                idCategory: new ObjectId("629e83f1cfeb4c802d16d424"),
                name: 'Lacteos'
            },
            url: 'https://wongfood.vteximg.com.br/arquivos/ids/354766/',
            typeMeasures: [
            {
                idTypeMeasure: new ObjectId("629eb6579de05062585e70e3"),
                name: 'Unidad'
            }, {
                idTypeMeasure: new ObjectId("629e87bbb9cff1fecf7e1671"),
                name: '12-pack'
            }, {
                idTypeMeasure: new ObjectId("629ebd6489f7dd3038deb03f"),
                name: '24-pack'
            }],
            name: 'Yogurt',
            description: 'Yogurt Durazno Gloria',
            detail: 'Yogurt Parcialmente Descremado Durazno Gloria Botella 1 kg',
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
    
    
    
    
    
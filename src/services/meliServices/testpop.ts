const myArray= [{
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Pedal De Efeito Para Instrumento De Cordas Nux Versatile Modeler Mg-30  Preto',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/pedal-de-efeito-para-instrumento-de-cordas-nux-versatile-modeler-mg-30-preto/p/MLB18586450',
    categoryID: 'MLB3007',
    offerID: 'MLB2168587650',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB18586450',
    listing_type_id: 'gold_pro'
  },
  {
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Guitarra Elétrica Cort G Series G290 Fat De  Bordo/freixo Bright Blue Burst Com Diapasão De Bordo',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/guitarra-eletrica-cort-g-series-g290-fat-de-bordofreixo-bright-blue-burst-com-diapaso-de-bordo/p/MLB17914761',
    categoryID: 'MLB438516',
    offerID: 'MLB2168587889',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB17914761',
    listing_type_id: 'gold_special'
  },
  {
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Guitarra Elétrica Cort Kx Series Kx300 De  Mogno Natural Burst Poro Aberto Com Diapasão De Jatobá',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/guitarra-eletrica-cort-kx-series-kx300-de-mogno-natural-burst-poro-aberto-com-diapaso-de-jatoba/p/MLB17474523',
    categoryID: 'MLB438516',
    offerID: 'MLB2062029327',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB17474523',
    listing_type_id: 'gold_special'
  },
  {
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Guitarra Elétrica Tagima Tw Series Tw-61 De  Choupo Sunburst Com Diapasão De Madeira Técnica',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/guitarra-eletrica-tagima-tw-series-tw-61-de-choupo-sunburst-com-diapaso-de-madeira-tecnica/p/MLB17481899',
    categoryID: 'MLB438516',
    offerID: 'MLB2119528725',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB17481899',
    listing_type_id: 'gold_special'
  },
  {
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Microfone Shure Sm Sm7b Dinâmico  Cardióide Preto',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/microfone-shure-sm-sm7b-dinmico-cardioide-preto/p/MLB15157110',
    categoryID: 'MLB4469',
    offerID: 'MLB2168612841',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB15157110',
    listing_type_id: 'gold_pro'
  },
  {
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Guitarra Elétrica Condor Gx-40 De  Amieiro Blue Com Diapasão De Pau-rosa',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/guitarra-eletrica-condor-gx-40-de-amieiro-blue-com-diapaso-de-pau-rosa/p/MLB18534313',
    categoryID: 'MLB438516',
    offerID: 'MLB2173317444',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB18534313',
    listing_type_id: 'gold_special'
  },
  {
    seller: { id: 'a2b4ec61-e473-4dc6-96ce-515abcb0d3fc' },
    offerTitle: 'Guitarra Elétrica Ibanez Rg Gio Grx40 De  Choupo Metallic Light Blue Com Diapasão De Jatobá',
    offerSubTitle: '',
    status: 'buy_it_now',
    offerUrl: 'https://www.mercadolivre.com.br/guitarra-eletrica-ibanez-rg-gio-grx40-de-choupo-metallic-light-blue-com-diapaso-de-jatoba/p/MLB17469505',
    categoryID: 'MLB438516',
    offerID: 'MLB2023725991',
    salesChannel: '143854678',
    condition: 'new',
    free_shipping: true,
    catalog_listing: undefined,
    catalog_product_id: 'MLB17469505',
    listing_type_id: 'gold_pro'
  }];

console.log(`myArray.length: ${myArray.length} `);

// let currentStartPosition = 0;
let add = 5

for(
    let currentStartPosition =0; 
    currentStartPosition<myArray.length; 
    currentStartPosition+add){
        let currentStopPosition = currentStartPosition+add;


        console.log(`currentStartPosition: ${currentStartPosition}`);
        console.log(`currentStopPosition: ${currentStopPosition}`);
        if(myArray.length<add){
            let lastPositionInArray = myArray.length-1;
            let arrayToPost = myArray.slice(0,lastPositionInArray)
            let adjustedArray = arrayToPost.map((offer)=>{
                return {
                    seller: {id: `${offer.seller.id}`},
                    offerID: offer.offerID,
                    offerTitle: offer.offerTitle,
                    offerSubTitle: offer.offerTitle,
                    offerUrl: offer.offerUrl,
                    status: offer.status,
                    salesChannel: offer.salesChannel,
                    catalog_listing: offer.catalog_listing,
                    categoryID: offer.categoryID,
                    condition: offer.condition,
                    free_shipping: offer.free_shipping,
                    catalog_product_id: offer.catalog_product_id,
                    listing_type_id: offer.listing_type_id                    
                }
            })
            console.log(adjustedArray);

        } else {
            let arrayToPost = myArray.slice(currentStartPosition,currentStopPosition)
            let adjustedArray = arrayToPost.map((offer)=>{
                return {
                    seller: {id: `${offer.seller.id}`},
                    offerID: offer.offerID,
                    offerTitle: offer.offerTitle,
                    offerSubTitle: offer.offerTitle,
                    offerUrl: offer.offerUrl,
                    status: offer.status,
                    salesChannel: offer.salesChannel,
                    catalog_listing: offer.catalog_listing,
                    categoryID: offer.categoryID,
                    condition: offer.condition,
                    free_shipping: offer.free_shipping,
                    catalog_product_id: offer.catalog_product_id,
                    listing_type_id: offer.listing_type_id                    
                }
            })

            console.log(adjustedArray);

        }
        // postArray()
        currentStartPosition+=add;
        currentStopPosition+=add;
}




// for(let offer in newOffersArray){
//     let offerInfo = newOffersArray[offer];
//     console.log(`Saving: ${newOffersArray[offer].offerID}`)

//     var options = {
//         method: 'POST',
//         url: 'http://localhost:3333/offers',
//         headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
//         },
//         data: {
//             seller: {id: `${offerInfo.seller.id}`},
//             offerID: offerInfo.offerID,
//             offerTitle: offerInfo.offerTitle,
//             offerSubTitle: offerInfo.offerTitle,
//             offerUrl: offerInfo.offerUrl,
//             status: offerInfo.status,
//             salesChannel: offerInfo.salesChannel,
//             catalog_listing: offerInfo.catalog_listing,
//             categoryID: offerInfo.categoryID,
//             condition: offerInfo.condition,
//             free_shipping: offerInfo.free_shipping,
//             catalog_product_id: offerInfo.catalog_product_id,
//             listing_type_id: offerInfo.listing_type_id
//         }
//     };
    
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });

// }
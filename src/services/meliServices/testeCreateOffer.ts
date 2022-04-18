import axios from 'axios';


var options = {
    method: 'PUT',
    url: 'http://localhost:3333/offers',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
    },
    data: {
      seller: {id: 'cec9733c-1e3d-451e-8c3e-b042da28ee4e'},
      offerID: 'MLB2171329935',
      offerTitle: 'mudou!',
      offerSubTitle: 'offerSubTitle',
      offerUrl: 'www.testeurlmeliNOVO.com.br',
      status: 'active',
      skuID: 'SHURE-SKU-001',
      salesChannel: 'MELI',
      catalog_listing: true,
      categoryID: 'cat-meli-001',
      condition: 'new',
      free_shipping: true,
      catalog_product_id: '0011',
      listing_type_id: 'list_0011'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

// axios.post(`${myUrls.appBaseUrl}/offers`,{
//     data: {
//         seller: {id: `${offerInfo.seller.id}`},
//         offerTitle: offerInfo.offerTitle,
//         offerSubTitle: offerInfo.offerTitle,
//         status: offerInfo.status,
//         offerUrl: offerInfo.offerUrl,
//         categoryID: offerInfo.categoryID,
//         offerID: offerInfo.offerID,
//         salesChannel: offerInfo.salesChannel,
//         condition: offerInfo.condition,
//         free_shipping: offerInfo.free_shipping,
//         catalog_listing: offerInfo.catalog_listing,
//         catalog_product_id: offerInfo.catalog_product_id,
//         listing_type_id: offerInfo.listing_type_id,
//     }
// })
// const validateStock = (stock) => {
//     if (stock == undefined || isNaN(stock) || stock < 0){
//         return false;
//     }else{
//         return true
//     }
// };

// ---------------------

export const validateStock = (stock) => {
    const num = Number(stock);
    return Number.isInteger(num) && num >= 0;
};


// -------------------------------

// export const validatePrice = (price) => {
//     return typeof price == "number" && price >= 0;

//     --------------------------------

// //     if(typeof price == "number" && price >= 0){
//         return true;
//      }   else {
//         return false;
//      }
// };



export const validatePrice = (price) => {
    const num = Number(price);
    return Number.isFinite(num) && num >= 0;
};
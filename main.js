//test cách chạy của Promise
// const promise = new Promise((resolve, reject)=>{
//     reject([1,2,3]);
// });
// promise.then(() => console.log("thành công")).catch((array)=>console.log(array)).finally(()=>console.log("xong!"));

//promise nấu cơm
// const cook = new Promise((cookSuccess, cookFailure)=>{
//     let resultCook = false;
//     resultCook?(cookSuccess(`cơm chín rồi ăn thoai`)): cookFailure('cơm khét rồi :(');
// });
// cook.then(element => console.log(element)).catch(element=>console.log(element)).finally(()=>console.log(`kết thúc trận chiến`));

//Cách hoạt động để giải quyết callback hell
//Sau 1s xuất ra 1, 2, 3
let data = 1;
function sleep(data, ms)
{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(data);
            resolve(data+1);//2
        }, ms);
    })
}
sleep(data, 1000)
    .then((data) =>{
        sleep(data, 1000);
    })
    .then((data)=>{
        sleep(data, 1000);
    })
    .then(()=>{
        console.log("Kết thúc!");
    })
    
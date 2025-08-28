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
// let data = 1;
// function sleep(data,ms)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(data);
//             resolve(data+1);
//         }, ms);
//     })
// }

// sleep(data,1000)
//     .then((data)=>{
//         return sleep(data,1000)
//     })
//     .then((data)=>{
//         return sleep(data,1000);
//     })

//Promise.resolve() và promise.reject()
// const promise = Promise.resolve("luôn luôn success");
// promise.then((element)=>{
//     console.log(element);
// })

//Promise.all
// const p1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve([1]);
//     }, 1000);
// });

// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve([2,3]);
//     }, 3000);
// });
// Promise.all([p1,p2]).then(([result1, result2])=>{//destructuring
//     console.log(result1.concat(result2));
// })

//vi du 1 cho Promise.all khong bi reject
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })
//Ví dụ 2 cho Promise.all bị reject
// const p4 = Promise.reject("có lỗi rồi");
// Promise.all([p1,p4,p3]).then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// });

//async/await
//Ví dụ 1: Nối mảng (chạy song song)
// const p1 = new Promise((resovle)=>{
//     setTimeout(() => {
//         resovle([1])
//     }, 1000);
// })
// const p2 = new Promise((resovle)=>{
//     setTimeout(() => {
//         resovle([2, 3])
//     }, 3000);
// })
// async function test() {
//     try{
//         const [a,b] = await Promise.all([p1,p2])
//         console.log(a.concat(b));
//     }catch{ 
//         console.log("sai")
//     };
// }
// test()

//Ví dụ 2: cứ 1 giây in ra 1, 2, 3

// function sleep(data, ms)
// {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             console.log(data);
//             resolve(data+1)
//         }, ms);
//     })
// }
// async function test(data, ms)
// {
//     try {
//         for(let i = 0; i < 10; i++)
//         {
//             data = await sleep(data,ms);   
//         }
//     } catch{
//         console.log("Lỗi rồi");
//     }

//     // try{
//     // const first = await sleep(data, ms);
//     // const second = await sleep(first,ms);
//     // const third = await sleep(second,ms);
//     // }catch{
//     //     console.log("Lỗi rồi");
//     // }
// }
// test(1,1000);
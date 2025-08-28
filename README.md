# Promise-JS

- Promise sinh ra là để giải quyết vấn đề callback hell, xử lý bất đồng bộ
- Khởi tạo bằng từ khóa new. Đối số của promise là một function. Function này sẽ bắt buộc trả về 2 tham số (2 tham số này đều là hàm) là resolve(nếu thành công) và reject(nếu thất bại)
- Để sử dụng ta dùng .then(hàm thực hiện công việc cho resolve), .catch(hàm thực hiện cho reject)

- Promise cũng giống callback hell đó là **__chờ thằng trước làm xong rồi mới đến thằng sau__** nhưng chỉ khác ở chỗ là cách viết nó ngắn gọn, dễ đọc hơn thôi
- Có thể có nhiều .then. Giá trị được return ở .then đầu tiên sẽ là giá trị cho tham số đầu vào của .then thứ 2 và cứ thế tiếp tục
- Promise đưa ra (return) một giá trị nằm trong resolve hoặc reject còn .then sẽ nhận vào giá trị đó và cần một **return** để đưa cho .then sau
- Cách để đưa promise ở trạng thái luôn luôn thành công hoặc luôn luôn thất bại là dùng: Promise.resolve() hoặc Promise.reject() Ví dụ: const promise = Promise.resolve("result");
- Promise.all giúp chạy song song các promise. Nó nhận vào một mảng các promise và trả về 1 promise với resolve hoặc reject
- Promise.all chỉ resolve khi tất cả mảng đều resolve nếu 1 trong các mảng reject thì nó cũng reject

## async/await
- Là hiện thân của promise nhưng viết dễ hiểu hơn theo phong cách đồng bộ vậy nên luôn phải try(resolve) catch(reject) 
- async viết trước 1 function thì khi return nó sẽ trả về một promise
- await là chờ cho hàm xong rồi (resolve/reject) mới chạy tiếp dòng bên dưới
- await chỉ được dùng bên trong async

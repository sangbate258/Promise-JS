# Promise-JS
* Promise sinh ra là để giải quyết vấn đề callback hell, xử lý bất đồng bộ
* Khởi tạo bằng từ khóa new. Đối số của promise là một function. Function này sẽ bắt buộc trả về 2 tham số (2 tham số này đều là hàm) là resolve(nếu thành công) và reject(nếu thất bại)
* Để sử dụng ta dùng .then(hàm thực hiện công việc cho resolve), .catch(hàm thực hiện cho reject)
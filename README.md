# Hướng dẫn sử dụng BOT Discord Thông Báo DST

- [Cách tạo Server Dedicated bằng Script](https://dont-starve-game.fandom.com/vi/wiki/Dedicated_server)
- [MOD Thông Báo Discord](https://steamcommunity.com/sharedfiles/filedetails/?id=2537774396)

## 1. Tạo BOT Discord
- Truy cập [vào đây](https://discord.com/developers/applications) để tạo BOT
- Chọn `New Application` -> Điền Tên BOT -> `Create`
- Vào phần `Bot` -> `Add Bot` -> `Yes, do it!`
- Lưu lại token của BOT![image](https://user-images.githubusercontent.com/57210639/128592478-a39cce56-44d9-436a-8f44-5c8077a40c06.png)
- Vào phần `OAuth2` -> Trong phần `SCOPES` chọn `bot` -> phần `BOT PERMISSIONS` chọn `Administrator` -> `Copy`![image](https://user-images.githubusercontent.com/57210639/128592633-258fa11e-b105-438e-bec8-5faebae5583d.png)
- Truy cập vào link vừa Copy để thêm BOT vào Discord![image](https://user-images.githubusercontent.com/57210639/128592696-1b5e814e-b0f9-41d5-82d2-5d4624fc63ed.png)



## 2. Cài đặt Node.js và BOT
- Tải Node.js [tại đây](https://nodejs.org/en/)![image](https://user-images.githubusercontent.com/57210639/128591515-8e1cbc5b-2ac5-405b-925e-c93ca7d8f308.png)
- Cài đặt và Next theo mặc định
- Tạo 1 thư mục bất kì, ở đây mình lấy tên là `BOT Discord`
- Trên thanh địa chỉ của thư mục `BOT Discord`, gõ `cmd` và **Enter** hộp thoại cmd sẽ xuất hiện![image](https://user-images.githubusercontent.com/57210639/128591687-66ba0f58-0ee5-4fdc-af0c-2e6d47035102.png)![image](https://user-images.githubusercontent.com/57210639/128591731-5629d2f2-8eaf-4a38-ac23-58349e934ce0.png)
- Nhập và chạy lần lượt các lệnh sau: 
  ```
  npm install node.js
  ```
  ```
  npm install discord.js
  ```
  ```
  npm install moment
  ```
- Tải file [bot.js](bot.js) và cho vào thư mục `BOT Discord`
- Sau khi cài đặt xong và copy file [bot.js](bot.js) sẽ được các mục sau: ![image](https://user-images.githubusercontent.com/57210639/128592187-aa41c923-115c-41d9-81e2-5ad5a1ff3b91.png)
## 3. Chỉnh sửa file `bot.js` bằng [NotePad++](https://notepad-plus-plus.org/downloads/v7.0/)
1. Thay đổi đường dẫn của thư mục game trên máy của bạn, mặc định là:
   -  Host bằng game: 
      ```
      let path = 'C:/Program Files (x86)/Steam/steamapps/common/Don\'t Starve Together/data/out.json'; //thay đổi thư mục cài đặt game tại đây
      let path2 = 'C:/Program Files (x86)/Steam/steamapps/common/Don\'t Starve Together/data/in.json'; //thay đổi thư mục cài đặt game tại đây
      ```
   -  Host bằng [Dedicated](https://dont-starve-game.fandom.com/vi/wiki/Dedicated_server):
      ```
      let path = 'C:/Program Files (x86)/Steam/steamapps/common/Don\'t Starve Together Dedicated Server/data/out.json'; //thay đổi thư mục cài đặt game tại đây
      let path2 = 'C:/Program Files (x86)/Steam/steamapps/common/Don\'t Starve Together Dedicated Server/data/in.json'; //thay đổi thư mục cài đặt game tại đây
      ```
   ![image](https://user-images.githubusercontent.com/57210639/128593100-38da5a0e-7785-4d20-88ef-cc074f4ce1cc.png)
2. Thay đổi `Your-User-ID` bằng ID Discord của bạn ([cách lấy User ID Discord](https://techswift.org/2020/04/22/how-to-find-your-user-id-on-discord/)) ![image](https://user-images.githubusercontent.com/57210639/128592990-99f3f572-6068-43c2-9fea-556743656aff.png)

     Để thêm nhiều Admin hơn, ví dụ có 3 Admin ta sửa như sau:
     
     Sửa 
     ```
     message.author.id == "Your-User-ID"
     ```
     Thành
     ```
     message.author.id == "UserID_1" || message.author.id == "UserID_2" || message.author.id == "UserID_3"
     ```
   ![image](https://user-images.githubusercontent.com/57210639/128594212-59c9d974-6188-48bc-bfe3-c7cb2f8261f5.png)

4. Thay đổi `Your-Token` bằng token BOT đã lấy ở [Bước 1](#1-tạo-bot-discord) ![image](https://user-images.githubusercontent.com/57210639/128593146-57536273-4056-421b-bf0b-be6031a96a1b.png)
## 4. Chạy BOT
1. Cách 1: Chạy bằng CMD
   - Nhập `cmd` vào thanh địa chỉ của thư mục `BOT Discord`
   - Chạy lệnh sau để run BOT
     ```
     node bot.js
     ```
2. Cách 2: Chạy File .bat
   - Tải file [Run_Bot.bat](Run_Bot.bat) cho vào thư mục `BOT Discord` và mở lên là BOT sẽ chạy
## 5. Cách sử dụng và Lưu Ý
1. Cách sử dụng:
   - Dùng lệnh `!link` vào 1 kênh trong discord để BOT có thể chat được
   - Dùng lệnh `!help` để xem các lệnh mà BOT hỗ trợ
   - Dùng lệnh `,` để chat vào trong game, ví dụ: `,Xin chào`
2. Lưu Ý:
   - Phải bật BOT trước khi bật host 
   - Phải dùng lệnh `!link` khi BOT mới được khởi động 
   - Chỉ có người dùng được điền tại `Your-User-ID` mới có thể sự dụng được các lệnh của BOT, ngoại trừ lệnh chat vào game `,` được sử dụng bởi tất cả mọi người!
   - Nếu BOT đang hoạt động và đã dùng lệnh `!link` mà BOT không chat gì. Vui lòng kiểm tra lại đường dẫn của game đã đúng chưa!
3. Các lệnh BOT hỗ trợ khi dùng lệnh `!help`

![command](https://user-images.githubusercontent.com/57210639/128593662-644b1680-b5e8-4020-9d51-ddc509a7bc62.png)

## Mẹo
- Để có thể Rollback được nhiều hơn 5 lần (Phải đánh đổi nhiều dung lượng lưu trữ hơn) ta làm như sau:
  - Mở file `cluster.ini` trong như mục cluster_* (thư mục world của bạn)
  - Tại `[MISC]` thêm `max_snapshots = 100`, nó sẽ nhưu thế này: 
  ![image](https://user-images.githubusercontent.com/57210639/128594633-bdc131a5-c1ef-4c0f-86c1-07bc379860a3.png)
  - Điều này sẽ tạo tối đa 100 bản lưu thay vì 5 bản lưu như mắc định, con số này bạn có thể tuỳ chỉnh theo nhu cầu của bạn!

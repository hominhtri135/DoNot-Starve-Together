[Hướng dẫn tạo Server Dedicated bằng Script đơn giản và chi tiết](https://discord.gg/m5f6v2NB8W)

# Hướng dẫn sử dụng BOT Discord Thông Báo DST
⚠Hãy đảm bảo rằng bạn đã Sub [MOD Thông Báo Discord](https://steamcommunity.com/sharedfiles/filedetails/?id=2537774396) và kích hoạt MOD trong Game!

1. [Tạo BOT Discord](#1-tạo-bot-discord)
2. [Cài đặt Node.js và BOT](#2-cài-đặt-nodejs-và-bot)
3. [Chỉnh sửa file `bot.js`](#3-chỉnh-sửa-file-botjs-bằng-notepad)
4. [Chạy BOT](#4-chạy-bot)
5. [Cách sử dụng và Lưu Ý](#5-cách-sử-dụng-và-lưu-ý)
6. 📂[Cách tải file Github](#cách-tải-file-github)
7. 💡[Mẹo](#mẹo)

## 1. Cài đặt Don't Starve Together Dedicated Server
- Vào `Thư Viện` trong Steam
- Kích hoạt bộ lọc `Công Cụ`

  ![1  thư viện](https://user-images.githubusercontent.com/57210639/132952897-fd9231a9-e97b-42d1-99f4-7ea74a72743b.png)
- Tìm kiếm `Don't Starve Together Dedicated Server` và Cài Đặt
  ![2  thư viện](https://user-images.githubusercontent.com/57210639/132952972-43e61c51-196f-4671-8de6-84586cf5cca8.png)




## 2. Tải Script Và Cách Sử Dụng
- Tải Script hỗ trợ tạo Server Dedicated: [tại đây](https://drive.google.com/u/2/uc?id=1RX-tXiFD0J1NAIkMlqxNVvf9jRtfOZyt&export=download)

  ![image](https://user-images.githubusercontent.com/57210639/132953344-ef75dd0a-8660-413e-9a8a-13f2a6888a05.png)
- Đặt Script ngoài màn hình chính (Desktop) đễ tiện sử dụng
- Mở Script lên và thực hiện thực hiện theo các bước
- Chọn thư mục `steamapps` nơi cài đặt `Don't Starve Together Dedicated Server` 
  ![11](https://user-images.githubusercontent.com/57210639/132953557-f6bdf21f-f1ae-4c61-8801-308d0af5cc5e.png)
  Nếu bạn không biết mình đã cài đặt `Don't Starve Together Dedicated Server` ở đâu thì làm như sau:
  - Truy cập vào Thư Viện Steam như ở Bước 1
- Tạo 1 thư mục bất kì, ở đây mình lấy tên là `BOT Discord`
- Trên thanh địa chỉ của thư mục `BOT Discord`, gõ `cmd` và **Enter** hộp thoại cmd sẽ xuất hiện![image](https://user-images.githubusercontent.com/57210639/128591687-66ba0f58-0ee5-4fdc-af0c-2e6d47035102.png)![image](https://user-images.githubusercontent.com/57210639/128591731-5629d2f2-8eaf-4a38-ac23-58349e934ce0.png)
- Nhập và chạy lần lượt các lệnh sau: 
  ```
  npm install node.js
  ```
  ```
  npm install discord.js@12.5.3
  ```
  ```
  npm install moment
  ```
- Tải file [bot.js](https://github.com/hominhtri135/DoNot-Starve-Together/releases/download/v1/bot.js) và cho vào thư mục `BOT Discord`
- Sau khi cài đặt xong và copy file [bot.js](https://github.com/hominhtri135/DoNot-Starve-Together/releases/download/v1/Run_Bot.bat) sẽ được các mục sau: ![image](https://user-images.githubusercontent.com/57210639/128592187-aa41c923-115c-41d9-81e2-5ad5a1ff3b91.png)
## 3. Chỉnh sửa file `bot.js` bằng [NotePad++](https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.1.3/npp.8.1.3.Installer.exe)
1. Thay đổi đường dẫn của thư mục game trên máy của bạn, mặc định là:
   -  Host bằng game: 
      ```
      let path = "C:/Program Files (x86)/Steam/steamapps/common/Don't Starve Together/data/out.json"; //thay đổi thư mục cài đặt game tại đây
      let path2 = "C:/Program Files (x86)/Steam/steamapps/common/Don't Starve Together/data/in.json"; //thay đổi thư mục cài đặt game tại đây
      ```
   -  Host bằng [Dedicated](https://dont-starve-game.fandom.com/vi/wiki/Dedicated_server):
      ```
      let path = "C:/Program Files (x86)/Steam/steamapps/common/Don't Starve Together Dedicated Server/data/out.json"; //thay đổi thư mục cài đặt game tại đây
      let path2 = "C:/Program Files (x86)/Steam/steamapps/common/Don't Starve Together Dedicated Server/data/in.json"; //thay đổi thư mục cài đặt game tại đây
      ```
   ![image](https://user-images.githubusercontent.com/57210639/131250690-0492a7bd-029c-4de1-9a01-dc2b158ec7e6.png)
2. Thay đổi `Your-User-ID` bằng ID Discord của bạn ([cách lấy User ID Discord](https://techswift.org/2020/04/22/how-to-find-your-user-id-on-discord/)) ![image](https://user-images.githubusercontent.com/57210639/128592990-99f3f572-6068-43c2-9fea-556743656aff.png)
   - Để thêm nhiều Admin hơn, ví dụ có 3 Admin ta sửa như sau:
     - Sửa 
     ```
     message.author.id == "Your-User-ID"
     ```
     - Thành
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
2. Lưu ý:
   - Phải bật BOT trước khi host game
   - Phải dùng lệnh `!link` vào kênh chat discord khi BOT mới được khởi động 
   - Chỉ có người dùng được điền tại `Your-User-ID` mới có thể sự dụng được các lệnh của BOT, ngoại trừ lệnh chat vào game `,` được sử dụng bởi tất cả mọi người!
   - Nếu BOT đang hoạt động và đã dùng lệnh `!link` mà BOT không chat gì. Vui lòng kiểm tra lại đường dẫn của game đã đúng chưa!
3. Các lệnh BOT hỗ trợ khi dùng lệnh `!help`

![command](https://user-images.githubusercontent.com/57210639/128593662-644b1680-b5e8-4020-9d51-ddc509a7bc62.png)

## 📂Cách tải file Github
   Chuột phải vào Raw -> Lưu trang web thành -> Chọn nơi lưu -> Save 
   ![image](https://user-images.githubusercontent.com/57210639/129554651-c22eb8d1-eee6-4746-9977-8c8b86f19077.png)


## 💡Mẹo 
- Để có thể Rollback được nhiều hơn 5 lần (Phải đánh đổi nhiều dung lượng lưu trữ hơn) ta làm như sau:
  - Mở file `cluster.ini` trong như mục cluster_* (thư mục world của bạn)
  - Tại `[MISC]` thêm `max_snapshots = 100`, nó sẽ trông như thế này: 
  ![image](https://user-images.githubusercontent.com/57210639/128594633-bdc131a5-c1ef-4c0f-86c1-07bc379860a3.png)
  - Điều này sẽ tạo tối đa 100 bản lưu thay vì 5 bản lưu như mặc định, con số này bạn có thể tuỳ chỉnh theo nhu cầu của bạn!

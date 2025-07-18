# 🧠 Contact Identity Resolution API

This project is a backend service built with **Node.js + Express** and uses **Supabase (PostgreSQL)** to identify and link user contact records (by email and phone number). It's deployed on **Render** and exposes a single `/identify` endpoint.

## 🧪 How It Works

You send a JSON object with an `email` and/or `phoneNumber`, and the server checks the database for any existing contacts (primary or secondary). It either links them or creates a new contact accordingly.

---

## 📦 Tech Stack

- **Node.js** + **Express**
- **Supabase PostgreSQL**
- **Render (Hosting)**
- **Sequelize ORM**
- **dotenv for config**
---

###  🔗 Live API URL
   https://bitespeed-x9qn.onrender.com
---

## Screenshot
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(735).png?raw=true)
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(736).png?raw=true)
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(737).png?raw=true)
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(738).png?raw=true)
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(739).png?raw=true)
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(740).png?raw=true)
![Alt text](https://github.com/vik802207/bitespeed/blob/main/img/Screenshot%20(741).png?raw=true)




---

## 📬 API Endpoint

### `POST /identify`

#### ✅ Request Body

```json
{
  "email": "test@example.com",
  "phoneNumber": "1234567890"
}
{
  "contact": {
    "primaryContactId": 1,
    "emails": ["test@example.com"],
    "phoneNumbers": ["1234567890"],
    "secondaryContactIds": [2, 3]
  }
}
```
---
## ⚙️ Environment Variables (.env)
```bash
DB_NAME=bitespeed
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
PORT=3000
DATABASE_URL=postgresql://postgres:***********@db.jxjcjmarroyvxnfafxiq.supabase.co:5432/postgres
```
## 🧑‍💻 Local Development
#### 1. Clone the repo
``` bash
git clone https://github.com/vik802207/bitespeed.git
cd your-repo
```
#### 2. Install dependencies
```bash
npm install
```
#### 3. Create .env file with Supabase & DB keys
```bash
cp .env.example .env  # then fill it manually
```
#### 4. Start the server
```bash
npx ts-node-dev src/server.ts
```
## 🙋‍♂️ Author
Vikash Gupta
vikashg802207@gmail.com



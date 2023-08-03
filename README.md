
Google Docs Clone Built with Mern Stack 


## Preview

![Home Page](https://raw.githubusercontent.com/abdulmoizsheraz/Google-Docs-Clone/main/image/Screenshot%20(431).png)
![Dashboard](https://raw.githubusercontent.com/abdulmoizsheraz/Google-Docs-Clone/main/image/Screenshot%20(432).png)
![Workspace](https://raw.githubusercontent.com/abdulmoizsheraz/Google-Docs-Clone/main/image/Screenshot%20(433).png)
![Signup Page](https://raw.githubusercontent.com/abdulmoizsheraz/Google-Docs-Clone/main/image/Screenshot%20(434).png)


## Installation

Clone the Project in Your System.

```bash
cd client
npm install 
  
```
then run 
```
cd ../
```
Now Run 
```bash
cd server
npm install 
```
The Above commands will install all the dependencies in the client and server to run Application .
Now run 
```bash
npm run dev 
``` 
in both client and server directory 
The backend will start at the localhost:5000 port and frontend at 

    
## Dependencies
- quill: ^1.3.7
- react: ^18.2.0
- react-dom: ^18.2.0
- react-icons: ^4.10.1
- react-quill: ^2.0.0
- react-toastify: ^9.1.3
## Dependencies(for backend)
- bcrypt: ^5.1.0
- cors: ^2.8.5
- express: ^4.18.2
- express-validator: ^7.0.1
- jsonwebtoken: ^9.0.1
- mongoose: ^7.4.1
- socket.io: ^4.7.1

## Features
This APP is a
Google Docs
Clone that
utilizes a
backend built
with Node.js
and Express,
along with a
frontend built
with React.js.
The backend
API's handle
CRUD
operations,
offering
various
endpoints to
access specific
documents,
retrieve all
documents
belonging to a
user, update
documents,and delete
documents.
Each user can
only perform
operations on
their own
documents,
and this is
managed
through the
signup and
login APIs,
which handle
authentication.
In the
frontend, an
auth-token
environmental
variable is set
for a specific
user, limiting
the app's
functionality
to that
particular user.
The app allows
users to create
documents,
view their
existing
documents in a
table on the
/dashboard
endpoint of the
client side, and
update
documents.If
user wants to
create a new
Document user
will be directed
to /workspace
route . When a
document is
saved or
updated, a
notification is
displayed, and
the
corresponding
button is
disabled. The
app is
gained a deeper
understanding of h
a full-stack applica
operates. Another
crucial aspect I lea
during this project
about NoSQL
databases, such as
MongoDB. Though
had prior experien
with SQL database
my university proje
found MongoDB to
much simpler to us
especially as a
beginner. Middlew
was initially an
overwhelming term
me, but I now
comprehend its
significance. It refe
functions we
repeatedly use, sim
to the fetchData
function we often
utilize in React as a
utility. I am now
curious to learn ab
DevOps, including
CI/CD (Continuous
Integration/Contin
Deployment) . Last
this project taught
discipline as I reali
the importance of
focusing on my sid
projects. Over the
one and a half wee
dedicated my effor
project.
currently
designed to
cater to a
single user.The
backend server
holds all the
request from
the server .It
consist of most
import a util
function or a
middleware
that extract
the id of user
logged
in.Server code
also consist of
Mongoose
schemas of
Documents
and User .




## Tech Stack

**Client:** React, Node js , TailwindCSS,Express js ,Mongodb 



## Authors

- [@abdulmoizsheraz](https://github.com/abdulmoizsheraz)


## Contributing

Contributions are always welcome!



## Lessons Learned
The most importan
thing I learned was
significance of using
localStorage in the
application.
localStorage handle
user-specific
information, such
the auth-token and
preference mode
(dark/light). Yesterday
while visiting the
LeetCode website,
noticed they store
various items in
localStorage. This
allowed me to dire
change my chosen
mode from
localStorage. Until
now, I had mainly
interacted with
frontend framewo
like React js /Next,
through this projecgained a deeper
understanding of h
a full-stack applica
operates. Another
crucial aspect I leant
during this project
about NoSQL
databases, such as
MongoDB. Though
had prior experience
with SQL database
my university project
found MongoDB to
much simpler to us
especially as a
beginner. Middleware
was initially an
overwhelming term
me, but I now
comprehend its
significance. It refer
functions we
repeatedly use, similar
to the fetchData
function we often
utilize in React as a
utility. I am now
curious to learn about
DevOps, including
CI/CD. Last
this project taught
discipline as I reality
the importance of
focusing on my side
projects. Over the
one and a half week
dedicated my efforts
project




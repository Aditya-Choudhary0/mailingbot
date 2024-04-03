# mailingbot

A simple web application to handle received emails and to reply or send emails.

### Deployed Link 

https://onebox-mailbot.netlify.app/

## Tech Stack used :

1. html
2. JavaScript
3. React
4. Tailwind CSS
5. Chakra UI

## Set Up Project locally
- clone the repository
  ```bash
  git clone https://github.com/Aditya-Choudhary0/mailingbot
  ```
  
- enter the project folder
  ```bash
  cd mailbot
  ```
- install all the dependencies required
   ```bash
  npm i
  ```
- to run the project fully on the local host change the redirecting link in the login page from the deployed link to the localhost server
  file  directory is mailbot/src/Pages/Login.jsx

  change the URL redirection from
  ```
   window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://onebox-mailbot.netlify.app/onebox";
  ```
  to
  ```
   window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=localhost:3000/onebox";
  ```
  
- then start the server localhost
  ```bash
  npm start
  ```

## Feature
- User can log in using Google account
- Switch the theme to light or dark
- Shortcut key for delete and open reply box, "ctrl+d" & "ctrl+r" respectively.
- Add variables in reply.
- CRUD Operation on the thread.
- Dynamically display thread data.

## Screenshots
1. Login Page <hr>

![login](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/79f9c188-d2ec-40cb-acfc-393f10cb4cef)

   
2. Google Auth Page - Users have the option to choose an account <hr>

3. Theme - Users can switch between dark and light themes, even on the homepage using the toggle button. <hr>
   
4. Home Page <hr>
 
  ![landing(light)](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/385f84b9-7636-4c8c-bcd5-c57b352dde38)

![landing(dark)](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/96cf4d4b-a1a3-4d88-87b0-d817a207f39d)

   
5. Inbox Mail - All emails are displayed here. Clicking on them allows you to view all messages in the thread. <hr>

  ![mailbox(light)](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/5cb70657-36bf-45f1-a362-a21f3c43d775)
![mailbox(dark)](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/3a215777-ecff-4fc6-8816-f7e7005372fd)

   
6. Reply Box - When you press the letter 'ctrl+r', the reply box will open. You can also use the reply button to open it. The reply box is where you can type your response and send it back to the thread. You can also add a variable to sending  your reply. <hr>

![replybox](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/9e24fc5b-f647-4851-8d41-c86de2e8d04b)

  
7. Delete Thread - Pressing 'ctrl+d' opens a dialog box. Clicking 'Delete' will remove the current thread. <hr>

   ![confirmation](https://github.com/Aditya-Choudhary0/mailingbot/assets/113030961/fce1f127-8673-4f9d-ace4-b73669bde99b)


## Video Presentation of the web application:

https://www.loom.com/share/729a192775dc4ea68d6db6e0f8127f9d?sid=94e6ee67-76aa-44cb-bf46-d7b38eb21583


## How to Contribute

### Fork the Repository
1. Click the "Fork" button at the top right of the repository page.

### Clone Your Fork
```bash
git clone https://github.com/Aditya-Choudhary0/mailingbot.git
```
Create a New Branch

```bash

git checkout -b my-changes
```
Make Your Changes

Make your changes to the codebase. Ensure you follow any coding standards or guidelines established in the project.
Commit Your Changes

```bash

git add .
git commit -m "Description of your changes"
```
Push Your Changes

```bash

git push origin my-changes
```
Create a Pull Request

    Go to your forked repository on GitHub.
    Switch to the branch containing your changes (e.g., my-changes).
    Click the "New pull request" button.
    Provide a clear description of your changes in the pull request description.
    Click the "Create pull request" button.

For any help or feedback please reach out to me adityanerves@gmail.com

   

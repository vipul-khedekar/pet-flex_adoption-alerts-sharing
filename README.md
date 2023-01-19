# 🐱 Pet Flex - Adoption alerts and social media for pet owners

<div align="center">
    <img width="90%" height="90%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-45-04%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=b6436941-c974-4173-9e87-104f467affa8" alt="home-page">
</div>

**Platform to search or post pet adoption alerts. It also acts as a social media for pet owners to share their pet's life. People without an account can also view using an instant guest login feature. The island and soft shadow design give a sense of depth to each major component from the background.**

**Tech Stack: ReactJS, React Router, TailwindCSS, Redux, Javascript, React Icons, HTML, CSS and Firebase Storage.**

## 👉 Major Features

_The core functionalities of the app:_

- **Authentication.**
  - Users can navigate between the login and sign-up screens.
  - Can continue as a guest.
  - Create a new account.
  - Log in with dummy credentials. (Provided)
  - Small scale.
- **Lazy-loading images only load when they come into the visible part of the browser window, saving the user's bandwidth.**
- **404 "Page not found" error page will appear upon entering an unknown URL.**
- **Anonymously sign in as a guest user.**
  - Nameless one-time-only account.
- **Used appropriate HTML tags promoting browser accessibility settings for specially-abled users.**
- **Single screen multi-sectional dashboard.**
  - Profile & Actions section.
  - Post feed section.
  - Adoption search and results section.
- **Search adoptions.**
  - Search pets by animal type or name.
  - Added a fail-safe that needs at least a three or more-letter keyword from the user to start the search.
  - Show all button discards the previous search query.
- **Nudge the owner for inquiry. (A confirmation alert will pop up.)**
- **Bookmarks.**
  - Save available to adopt pets to view later.
  - Can delete individually.
- **Post an update on your pet.**
- **Create a pet adoption alert.**
- **Scrollable user feed with posts from pet owners of updates about their pets.**
- **Like or dislike a post.**
- **Adoption feed.**
  - Displays a list of pets available for adoption.
  - Each card displays a pet image, name, location, and options.
- **Post updates, Create an alert, View bookmarks, and View notifications options open on a new page.**
  - Clicking submit or close to navigate the user back to the main dashboard.
- **View notifications.**
- **Logging out will send the user back to the login page.**
- **Wrote reusable components.**
  - For Post body, Post actions, Pet card, and Bookmark strip.
  - Saved the development time by removing the need to write the same code for each recurring item.
- **Responsive design.**
  - Switch smoothly between 16:9 desktop and 3:4 tablet screen sizes.

## 👉 Quality of Life and Design Features

_Little details that cumulatively add to a great user experience:_

- **Island design with shadows gives depth to each major component from their background.**
- **Short and quick downward animation for all button click events.**
  - Liking and disliking have a similar click animation.
- **Smooth transition of most animations.**
- **Icon appears next to the 'Post an Update' and 'Create an adoption alert' buttons, only on desktop view.**
  - Not on tablet view due to space constraints.
- **If the adoption search yields no result, it will display a 'No match found message' instead of leaving it blank.**
- **Alert is sent to the user upon successfully nudging the owner.**
- **Hovering over the pet pictures in the adoptions section will slightly scale it up.**
- **Login and Sign-up welcome screen have a picture of a dog facing towards the form.**
- **User profile contains profile picture, username, and ID tag.**
- **Custom thin scrollbar design matching the theme.**
- **Custom favicon.**
- **Title of the web app in the browser's tab.**

## 👉 Colors Used

_(Source: Imagination. I just named them whatever I wanted, because why not.)_ 🤷

| Colors | Hex Code |
| ------ | -------- |
| Sea    | #acd7eb  |
| Marine | #00396a  |
| Choco  | #bc672c  |
| Cream  | #ecddce  |
| Steel  | #6b7378  |
| Nero   | #242424  |

## 👉 Credits for Assets

_Thank you very much_ 🙂

| Assets        | Name      | Link                      |
| ------------- | --------- | ------------------------- |
| Favicon       | Icons8    | https://icons8.com/       |
| Fonts         | Google    | https://fonts.google.com/ |
| Welcome Image | freepik   | https://www.freepik.com/  |
| Pets Images   | Pinterest | https://in.pinterest.com/ |

## 👉 More Screenshots

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-42-51%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=15923f27-750a-4aef-b169-3fb4b6eb49dc" alt="login">
</div>
<p align="center">(Fig.1 - Login Screen)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-43-56%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=6d035de2-b92a-46ee-8cef-635f50a7a7b9" alt="login-guest">
</div>
<p align="center">(Fig.2 - Login as a Guest)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-43-14%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=fbef218c-18a4-40d6-882b-fcac346d9f46" alt="login-form">
</div>
<p align="center">(Fig.3 - Log-in Form)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-43-36%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=cfaa7a6a-cd1e-4c32-9bd9-9350e6040639" alt="sign-up-form">
</div>
<p align="center">(Fig.4 - Sign-up Form)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202023-01-19%20at%2021-42-21%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=3155b026-72b1-4e33-992d-4689be5b44ef" alt="404-error">
</div>
<p align="center">(Fig.5 - 404 Page Not Found Custom Redirect)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-46-12%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=12983935-3c44-45da-9d9b-972107d5c37a" alt="feed">
</div>
<p align="center">(Fig.6 - Feed)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-47-01%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=080c7282-e71a-460e-91ea-f45a80492ff7" alt="adoption-section">
</div>
<p align="center">(Fig.7 - Adoptions)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-45-24%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=113b610d-74c9-481e-b6a7-0f9992084978" alt="profile-actions">
</div>
<p align="center">(Fig.8 - Profile Actions)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-46-25%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=ffafb30f-8cc0-4939-8929-72421b5ea721" alt="liked-paw">
</div>
<p align="center">(Fig.9 - Liked Paw)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-46-46%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=12f7379d-e175-4a5f-bd46-7c19aeee1adb" alt="unliked-paw">
</div>
<p align="center">(Fig.10 - Unliked Paw)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-48-08%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=e8cf240e-41f5-4071-bd95-523270b1407d" alt="create-alert">
</div>
<p align="center">(Fig.11 - Create an Alert)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-48-26%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=96e1855d-1fe2-4582-9559-a19925bbc43e" alt="post-update">
</div>
<p align="center">(Fig.12 - Post an Update)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-49-00%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=67ea74f4-eded-4ac5-8132-a3a581fc90bb" alt="bookmarked-list">
</div>
<p align="center">(Fig.13 - Bookmarked List)</p><br />

<div align="center">
    <img width="70%" height="70%" src="https://firebasestorage.googleapis.com/v0/b/github-profile-v1.appspot.com/o/projects%2Fpet-flex%2FScreenshot%202022-12-19%20at%2021-47-42%20Pet%20Flex%20-%20An%20adoption%20and%20social%20media%20platform%20for%20pet%20owners.webp?alt=media&token=93f6ae4d-b00f-4c30-8957-7a032648005d" alt="searched">
</div>
<p align="center">(Fig.14 - Search Result)</p>

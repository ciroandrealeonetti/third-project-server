# third-project-server
# Description
It's an app that allows you to find the right excercies for you to get back in shape and to train wherever you want. You can find a list of exercices with also a video that shows you how to execute them.

# User stories
-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the workouts I created and edit them.
-  **Excercises List Page**
-  **Excercise Details Page**

# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | HomePage             | public `<Route>`           | Home page.                                                |
| `/user-profile`              | ProfilePage          | user only `<PrivateRoute>` | User profile for the current user.                        |
| `/workout-create`            | CreateWorkoutPage    | user only `<PrivateRoute>` | Create workout  form.                                     |
| `/excercises-list`           | ExcercisesListPage   | user only `<PrivateRoute>` | Shows the excercise list page with a searchbar.           |
| `/excercise-details`         | ExcerciseDetailsPage | user only `<PrivateRoute>` | Shows the page with the excercise details.                |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- CreateWorkoutPage

- Excercises List Page

- Excercise Details Page

# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Goal: { type: String },
  Age:  { type: Number } ,
  Weight: {type: Number },
  Height: {type: Number },
  Level: {type: String}
}
```

**Excercise model**

```javascript

{
name: {type: String},
type: {type: String},
muscle: {String},
equipment: {String},
difficulty: {String},
instructions: {String}
}
```
**Workout model**
```javascript
{
Title: {
excercises [{type: Schema.Type.ObjectId, ref:"excersise"}]
Goal: {type: String
enum:[" "]}
Age: {type: Number}
}
```

## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ---------------------------------------------------
| GET         | `/auth/profile    `    | Saved session                | 200            | 404          | Check if user is logged in and return profile page           
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                  | GET         | `/auth/profile/edit`   |                              | 200
| PUT         | `/auth/profile/edit    |
| GET         | `/api/workout/create`  |
| POST        | `/api/workout/create`  |
| GET         | `/api/workout/edit`    |
| PUT         | `/api/workout/edit`    |
| DELETE      | `/api/eorkout/delete`  |
| GET         | `/api/excersise/list`  |
| GET         | `/api/excercise/details`|

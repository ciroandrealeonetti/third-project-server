# third-project-server
# Description
It's an app that allows you to find the right excercies for you to get back in shape and to train wherever you want. You can find a list of exercices with also a video that shows you how to execute them.

# User stories
-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of tournaments I have created.
-  **Excercises List Page**

# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | HomePage             | public `<Route>`           | Home page.                                                |
| `/user-profile`              | ProfilePage          | user only `<PrivateRoute>` | User profile for the current user.             |
| `/workout-create`            | CreateWorkoutPage    | user only `<PrivateRoute>` | Edit user profile form.                                   |


## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- CreateWorkoutPage

- 

# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
	Goal: { type: String },
  Age:  { type: Number } 
}
```

**Excercise model**

{
"name": "Rickshaw Carry",
"type": "strongman",
"muscle": "forearms",
"equipment": "other",
"difficulty": "beginner",
"instructions":"..."
}

**Workout model**
{
"Goal": String
"Age": Number
}

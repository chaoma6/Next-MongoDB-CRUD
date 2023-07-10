# CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built with React, Next.js, Prisma, and MongoDB. It allows users to manage topics by adding, editing, and deleting them.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## API Documentation

### Add Topic

- URL: `/api/topics`
- Method: `POST`
- Description: Adds a new topic to the database.
- Request Body:
  - `title` (required): The title of the topic.
  - `description` (required): The description of the topic.

### Get All Topics

- URL: `/api/topics`
- Method: `GET`
- Description: Retrieves all topics from the database.

### Get Topic by ID

- URL: `/api/topics/:id`
- Method: `GET`
- Description: Retrieves a specific topic by its ID.
- URL Parameters:
  - `id` (required): The ID of the topic.

### Update Topic

- URL: `/api/topics/:id`
- Method: `PUT`
- Description: Updates a specific topic by its ID.
- URL Parameters:
  - `id` (required): The ID of the topic.
- Request Body:
  - `newTitle` (required): The updated title of the topic.
  - `newDescription` (required): The updated description of the topic.

### Delete Topic

- URL: `/api/topics`
- Method: `DELETE`
- Description: Deletes a specific topic by its ID.
- Query Parameters:
  - `id` (required): The ID of the topic.

## Components

### AddTopic

This component allows users to add a new topic. It includes a form with input fields for the title and description. On submission, the data is sent to the `/api/topics` endpoint to create a new topic.

### EditTopic

This component allows users to edit an existing topic. It retrieves the topic data based on the provided ID and pre-fills the form fields with the current title and description. On submission, the updated data is sent to the `/api/topics/:id` endpoint to update the topic.

### Navbar

The navbar component displays a navigation bar with links to the home page and the "Add Topic" page.

### RemoveBtn

This component renders a delete button for each topic. Clicking the button triggers a confirmation prompt, and if confirmed, it sends a request to the `/api/topics` endpoint to delete the corresponding topic.

### TopicsList

This component fetches all topics from the `/api/topics` endpoint and displays them in a list format. Each topic is rendered with its title, description, and options to delete or edit the topic.

Feel free to explore and customize the code according to your requirements. Happy coding!

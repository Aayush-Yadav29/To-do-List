# To-Do List

This project is a simple "To-Do List" web application built using React. It allows users to add and delete tasks, helping them stay organized and manage their daily activities. This project serves as a demonstration of my React skills and understanding of React hooks, such as useState and useEffect.

## Features

- **Add Task**: Users can add tasks to the to-do list by entering task name, task deadline, task description and clicking the "Add Task" button.

- **Delete Task**: Users can delete tasks from the to-do list by clicking the delete icon next to each task.

- **Change the order of list**: Users have the ability to enhance task prioritization with "Up" and "Down" buttons. By utilizing these buttons, users can easily rearrange tasks within the list, ensuring efficient prioritization. The addition of CSS transitions brings a seamless visual experience when swapping tasks, further enhancing the overall user experience.
- **Task Persistence**: The to-do list is persisted using local storage, allowing users to access their tasks even after refreshing the page.


## How to Use

To use the To-Do List application, follow these steps:

1. Clone or download the repository to your local machine.

2. Open the project directory in a code editor of your choice.

3. Install the necessary dependencies by running the following command:
   ```shell
   npm install

4. Since I have also used some font awesome icons so you have install the required packages using following command:
   ```shell
   npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons


5. Start the development server with the following command:
   ```shell
   npm start

This will run the application in development mode. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the to-do list.

1. Use the provided input field to add tasks to the list. Click the "Add" button to add a task.

2. To delete a task, click the delete icon next to the task.

3. You can continue adding and deleting tasks as needed. The to-do list will persist even if you refresh the page.

## Project Structure

The project files are organized as follows:

- `public/`: This directory contains the public assets and the HTML template for the React application.
- `src/`: This directory contains the main source code files for the React application.

- `App.js`: The main component that renders the to-do list and handles task-related functionalities.

- `TaskPanel.js`: A component that represents the panel where individual to-do lists are displayed.

- `Addtodo.js`: A component that provides a form with input fields and "Add Task" button for adding tasks.
- `TodoItem.js`: A component that represents each tasks.





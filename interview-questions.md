# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I have made this same mistake before, and thankfully was able to fix my application! If your Cohort model has_many students, then your Student model belongs_to cohort and has a foreign key called cohort_id. To add a foreign key column to your Student model, we'll need to do some active record migration. In your terminal, type "rails g migration add_column_cohort_id_to_student" and press 'enter'. You should see a new migration file created. Go to that file and at the top it should say:

class AddColumnCohortIdToStudent < ActiveRecord:Migration
    def change
end

On a line under the def change line, type "add_column :students, :cohort_id, :integer" which is the method add_column, the table we're adding a column to, the new column name, and data type of the new column

To implement it, type "rails db:migrate" in your terminal and look at the schema file to see the new column added to the Student model.


Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are show, edit, create, update, and destroy. Show needs a param to specify the instance to display, edit needs a param to get a form for a specific instance, create has strong_params to ensure that required and valid attributes are being inputed, update needs params to find the specific instance to modify, and destroy needs params to find the instance to delete.

Researched answer: The RESTful routes that must always be passed params are show, update, and delete routes. The show route needs to be passed params in order to display a specific instance, without the params, our application won't know what to show. The update route needs to be passed params to know which instance is getting updated and where to 'put'/'patch' the modified information from the edit form. Lastly the delete route must be passed params because we need to specfify which instance is getting destroyed. The index route doesn't need to be passed params because it displays everything in the database. The new and create routes also don't need to be passed params because they're each working with newly inputted information that doesn't have a location yet.


3. Name three rails generator commands. What is created by each?

Your answer: 
    1. rails generate model- generates a model or table in a database
    2. rails generate rspec:install- creates the spec folders in our rails application
    3. rails generate resource- generates a model and all of its routes

Researched answer: 
    1. rails generate model or rails g model helps us quickly create a model in Rails. After the command we must also specify the name of the model in PascalCasing, then each column field name with its expected data type. An example looks like this:
    rails g model Book author:string pages:integer

    This creates a model called Book with a column author that has string values and a column pages that has an integer value

    2. rails generate rspec:install or rails g rspec:install is an important step to properly instal the Rspec library for test-driven-development on a Ruby on Rails program. After adding the Rspec gem file using the command 'bundle add rspec-rails', then you'll need to generate the spec folders using this rspec:install command. Once this step is complete, then you can create tests. 

    3. rails generate resource or rails g resource is a great way to create a model and routes at the same time. It helps save time and work from manually typing out routes between controller and view to having them already built in when creating the database and application. Similar to rails g model, rails g resource is followed by the name of the model, its fields and field types.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    -controller method: index method displays all the instances of students

action: "POST" location: /students
    -controller method: create method posts a new instance of a student to the database

action: "GET" location: /students/new
    -controller method: new method gets a form to input information on a new student

action: "GET" location: /students/2
    -controller method: show method displays student with id:2 

action: "GET" location: /students/2/edit
    -controller method: edit method gets a form to modify information on student with id:2

action: "PATCH" location: /students/2
    -controller method: update method takes the modified information from the edit form and changes the information for student with id:2

action: "DELETE" location: /students/2
    -controller method: destroy method deletes the entire instance of student id:2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

To-Do List Application

Story #1: In order to manage my to-do list, as a user of the API, I need to manage my daily schedule.

Story #2: In order to manage my to-do list, as a user of the API, I need to manage my tasks.

Story #3: In order to manage my to-do list, as a user of the API, I need to see a list of tasks per day on my schedule and the time or date it is due.

Story #4: In order to manage my to-do list, as a user of the API, I need to rate each task with a priority level from low priority, moderate priority, and high priority. 

Story #5: In order to manage my to-do list, as a user of the API, I need to track if a task is incomplete, in progress, or complete.

Story #6: In order to manage my to-do list, as a user of the API, I need my tasklist to be organized in order from high priority first to low priority last.

Story #7: In order to manage my to-do list, as a user of the API, I need to give myself alerts when a task is nearing its due date and when it's past due.

Story #8: In order to manage my to-do list, as a user of the API, I need my tasklist to update when something is completed and be removed from the list

Story #9: In order to manage my to-do list, as a user of the API, I need to see a daily alert of my to-do list in the beginning of my day and an end-of-day report on my progress at the end of my day

Story #10: In order to manage my to-do list, as a user of the API, I need a color-coded by priority task list and a clean, stylish application.
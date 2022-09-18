# Odin To-Do

* `ToDo` class
  * dynamically created each time a new task is made via GUI
  * properties:
    * `title`
    * `description`
    * `notes`
    * `checklist`
    * `priority` (low, medium, high)
    * `dueDate`
    * `project`
    * `subTask`
* `Project` class
  * contains many `ToDo`'s
  * should have default `Project`
  * should have ability to create a new `Project`
* GUI
  * view all projects
  * view all todos in a project
  * expand a todo to see/edit details
  * delete a todo
* Data
  * store using localStorage
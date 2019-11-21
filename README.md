# Angular8-examples

Angular 8 Examples

## Create an Application

The `ng generate application <name>` command is used to create a new application in the projects sub-folder of the workspace.

The parameter `--style=scss` sets the SCSS preprocessor to use for style files (default is CSS).
The parameter `--routing=true` tells Angular CLI to generate a routing NgModule.

```javascript
cd frontend
ng generate application administration --style=scss --routing=true
ng generate application gatling --style=scss --routing=true
```

## Create a Library

The `ng generate library <name>` command is used to generate libraries.

In the workspace folder (frontend if you followed this tutorial to the letter), run these commands:

```javascript
ng generate library tools
ng generate library vendors
```

Here, the `angular.json` file is updated with the two newly created libraries:

```javascript
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "administration": {
      [...]
    },
    "gatling": {
      [...]
    },
    "tools": {
      "projectType": "library",
      [...]
      }
    },
    "vendors": {
      "projectType": "library",
      [...]
    }
   },
  "defaultProject": "administration"
}
```

## Create a Shared Service

```javascript
ng generate service hello-world --project=tools
```

## Launch The Applications

To serve an Angular application, simple run the command

```javascript
ng serve --project=administration

OR

ng serve --project <application-name>
```

You can then open the web page at http://localhost:4200/:

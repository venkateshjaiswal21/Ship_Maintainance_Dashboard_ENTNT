# Ship Maintainence Dashboard 

This repository contains a front end ship maintainence dashboard that allows users to create, and manage ships, components, and maintainence jobs with in-app notifications, role based access and persistent data storage using LocalStorage

# How to run this ->

1. **Clone the Repository**: 

git clone <repo-url> (https://github.com/venkateshjaiswal21/Ship_Maintainance_Dashboard_ENTNT.git)

2. **Go to the Project Directory**

```bash
   cd ship_maintainence_dashboard
   ```

3. **Install Dependencies**:

```bash
   npm install
   ```

4. **Run the Application**:

```bash
   npm run dev
   ```

5. **To acess the application**: Go to your browser and open

http://localhost:5173/


## Exploring The Website

## Login Page

Sign in with one of the user credentials in MockData.js inside src/data. You may pick a user of any role admin, engineer, or inspector based on your choice. Here I choose to login with admin Fiona Green from users.


![Alt text](src/assets/Login.png)

## Dashboard Page

The dashboard page has a header, with title of the application role, name of logged user and a logout option.It has a navigation bar to go to Ships and Jobs. A notication panel to show notifications when jobs are created, updated, or completed. Below it has some cards showing metrics of total ships, total components whose maintainence is overdue by 6 months, Jobs in progress and Jobs Completed

![Alt text](src/assets/Dashboard.png)

## Charts

Going furthur down in the Dashboard we see a bar graph showing no of jobs by Status(in progress, open, completed) , a line chart showing no of jobs completed in last six months , and a pie Chart showing overdue and timely maintained components ratio.

![Alt text](src/assets/Charts.png)

## Calender

Next we have a calender below the Charts which shows the jobs in a particular month with their status of their completion in the month, Green shows jobs which have been completed, red for jobs that are high priority either open or in progress , yellow for jobs with medium priority either open or in progress next we have blue indicating low priority jobs either open or in progress

![Alt text](src/assets/Calender1.png)


## Calender features

On clicking back or next after choosing month day or week you can go to the previous or next month,day or week, like here I went to March by clicking previous when I had choosen month.

![Alt text](src/assets/Calender2.png)

When you click on agenda you can see the job plan for a particular month

![Alt text](src/assets/Agenda.png)

If you click a particular date block in a calender it will show you the jobs details + the components associated with the jobs. Like lets's say I click on 25th february box space.

![Alt text](src/assets/Calender3.png)

Then it will show dialog for the jobs details + their components 

![Alt text](src/assets/CalenderDateDialog.png)


## Role Based Access

Before we move on to the other sections of the application let's understand the role based access implemented in the application

Admin- 1. Can view, add,delete, edit ships
       2. Can view, add,delete, edit components
       3. Can view, add,delete, edit jobs so basically full access given

Inspector- 1.Can only approve or unapprove completed jobs. 
           2.Can only view ships, components, jobs.
           3.As said before it can only edit job status of those jobs who are completed as approving them or unapproving them.

Engineer- 1.Can only change the status of jobs in the pool of (open, in progress, completed).
          2.Can only view Ships, Components and Jobs

## Ships Page

On Navigating to the Ships page , we get a layout where we can add a ship , view a ship , edit a ship and delete a ship if you are the admin.

### Admin View

![Alt text](src/assets/Ships1.png)

On Clicking Add Ship

![Alt text](src/assets/Ships2.png)

On Clicking Edit Ship

![Alt text](src/assets/Ships3.png)

On Clicking Delete Ship It asks for confirmation before executing actual delete, same type of delete for components and jobs 

![Alt text](src/assets/DeleteConfirmation.png)

#### Ship View Page

On clicking view you are directed to a new page. This page consists of components of a particular ship and jobs of a particular ship in its maintainence history. You can edit, delete or add components if you are the admin.It contains a back button to go back to the Ships page.

![Alt text](src/assets/ShipsView.png)

### Engineer and Inspector View

![Alt text](src/assets/ShipsEngineerInspector.png)

![Alt text](src/assets/ShipsView2.png)


## Jobs Page

This page shows all the jobs that are there and a filter option available to all three roles users.

### Admin View

![Alt text](src/assets/Jobs1.png)

![Alt text](src/assets/Jobs2.png)

On Adding , Editing or Marking Completed in a Job, notifications will appear in the dashboad page in the notification panel

![Alt text](src/assets/Jobs3.png)

On dismissing any notification it will disappear

![Alt text](src/assets/NotificationDismissal.png)


### Engineer View

In engineer view an engineer can see his or her jobs as well as their jobs. There might be a thought in your minds that a engineer should see jobs assigned to them only but how will they stay updated with their peers jobs and jobs status if they see only their jobs. So that's why every engineer can see theirs as well as their peers jobs's as well.

![Alt text](src/assets/EngineerJobs1.png)

Lets'say Current Logged in Engineer Grace wants to view Bob's work she can simply apply the filter of all engineers to Bob

![Alt text](src/assets/EngineerJobs2.png)

Now if she wants to see Jobs assigned to her only she can change the filter from Bob to her name

![Alt text](src/assets/EngineerJobs3.png)


### Inspector View

Inspector can approve and unapprove completed Jobs

![Alt text](src/assets/InspectorJobs1.png)

![Alt text](src/assets/InspectorJobs2.png)

So this is the application's overall architecture and working with role based access.








































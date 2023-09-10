# CUI Past Papers Repository Documentation

Welcome to the CUI Past Papers GitHub repository – your centralized solution for accessing past papers from the COMSATS Institute of Information Technology (CUI). This repository is designed to help CUI students understand the patterns followed by their teachers when conducting assessments.

## Introduction

As CUI students, we often found it challenging to access past papers in one centralized location. To address this issue, Nabeel Ahmed and Shahzaib came up with the idea of creating a website where students can easily submit and access past papers.

## Website Overview

This GitHub repository serves as the codebase and documentation for the CUI Past Papers project. The main features of the website are as follows:

1. **Past Paper Submission:**

   - Students can submit past papers for different courses.
   - Submitted papers undergo a review process by administrators to ensure their validity.

2. **Review Process:**

   - Administrators evaluate each submission to determine its validity.
   - Valid past papers are added to our Past Paper Gallery.

3. **Contributors List:**

   - Students who contribute valid past papers will be recognized and added to the Contributors List.

4. **Featured Contributors:**

   - Top contributors are featured on the Home page of the site.

5. **Invalid Submissions:**

   - Submissions that do not meet the validity criteria will be declined.

6. **Past Paper Gallery:**

   - All the valid submissions will be added to pastpaper gallery.

7. **Search/Filter by terms:**

   - User can search for their required past paper with different search terms such as course name, course code, or instructor name.

8. **View/Download Past Paper:**
   - User can view and download the Past Paper PDF on Desktop and Mobile Devices without any need of external plugin.

# Getting Started Frontend

### Before Beginning below steps, Install Node js 18

For first time setup of the frontend run

`cd frontend/pat-papers`

`npm install`

For the production build, you will use a different server URL and generate a new client id from Adobe for that domain when deploying
Also, note that your env files are not added to the repo for security reasons.

creat files `.env.development` for local build and `.env.production` for production build in `frontend\past-papers\` (project root)

add the below variables to them

generate your client id from [click Here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api)
if you are going to access the server using localhost, enter localhost in the domain when asked by Adobe to make a client id for localhost

```

#for localhost only
VITE_ADOBE_PDF_CLIENT_ID = 81092c79fac91f6

#django development server URL local
VITE_DJANGO_SERVER_URL = http://localhost:8000

```

Then everytime you need to run server use

`cd frontend/pat-papers`

`npm run dev`

<br>
<br>

# Getting Started Backend

### prerequists: python 3.11, pip, pipenv

### Install dependencies & activate virtualenv

#### changing directiory to the root backend

```bash
cd backend
```

#### Running the virtualenv using pipenv

```bash
pipenv shell
```

#### Install dependencies

```bash
pipenv install
```

### Apply migrations (First time only)

```bash
python manage.py migrate
```

### Running the server

```bash
python manage.py runserver
```

### Note: YOU NEED TO CREATE A SUPER USER TO ACCESS THE ADMIN PANEL

#### for creating a super user

```bash
python manage.py createsuperuser
```

<br>
<br>

## Additional steps - May be required

### Collect static files (only on a production server)

```bash
python manage.py collectstatic
```

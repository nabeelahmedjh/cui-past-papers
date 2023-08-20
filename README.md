# cui-past-papers

# Getting Started Frontend

### Before Beginning below steps, Install Node js 18

For first time setup of the frontend run

`cd frontend/pat-papers`

`npm install`


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

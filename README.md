# cui-past-papers

# Getting Started Frontend

### Before Beginning below steps, Install Node js 18

For first time setup of the frontend run

`cd frontend/pat-papers`
`npm install`

Then everytime you need to run server use

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

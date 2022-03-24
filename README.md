# MyBoxingShop

This is my capstone project for [CS50’s Web Programming with Python and JavaScript](https://cs50.harvard.edu/web/2020/projects/final/capstone/). 

# Table of contents

- [Distinctiveness and Complexity](#distinctiveness-and-complexity)
- [How to run](#how-to-run)
- [Frontend](#frontend)
- [Backend](#backend)
- [Files Content](#files-content)
- [Frontend Files](#frontend-files)
- [Backend Files](#backend-files)


# Distinctiveness and Complexity

- MyBoxingShop is an online retail store
- MyBoxingShop have two UI one for the shop admin and one for the customers
- Customers are required to create a profile to complete the purchase of their favourite boxing gear
- Customers are able to complete their payment using the integrated PayPal payment buttons
- Customers are able to view their orders history and it's shipping status
- Customers are able to rate their gear and write reviews about it
- MyBoxingShop is created with separate Backend and Frontend to allow more effecient scalability and upgrades
- MyBoxingShop utilizes Django-rest-framework on the backend and React.js on the frontend

# How to run 
## Frontend
### Installing Dependencies
### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `frontend` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```
The frontend app was built using create-react-app. In order to run the app in development mode use ```npm start```. You can change the script in the ```package.json``` file. 

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.<br>

## Backend
### Installing Dependencies

### Python 3.7

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

### Virtual Enviornment

It's recommend to work within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Instructions for setting up a virual enviornment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

Then to start running the backend server run:

```bash
python manage.py runserver
```

# Files Content

## Frontend Files
- `./src/actions/`:  This folder contains the actions which are functions that carries a payload information from the application to the store. 

	- `cartActions.js` 
	- `orderActions.js`
	- `productActions.js`
	- `userActions.js`
	
- `./src/components/`: This folder contains the componenents which are the building blocks of the app. 

	- `CheckoutSteps.js`
	- `Footer.js`
	- `FormContainer.js`
	- `Header.js`
	- `Loading.js`
	- `Message.js`
	- `Paginate.js`
	- `Product.js`
	- `ProductCarousel.js`
	- `Rating.js`

- `./src/constants/`: This folder contains the constants which are variables that would be used repeatedly in different modules of the app.

	- `cartConstants.js`
	- `orderConstants.js`
	- `productConstants.js`
	- `userConstants.js`

- `./src/reducers/`: This folder contains the reducers which are functions that takes the current state and an action as arguments and return a new state

	- `cartReducers.js`
	- `orderReducers.js`
	- `productReducers.js`
	- `userReducers.js`

- `./src/screens/`: This folder contains the screens, each screen contains a group of components that would be presented to the client as the web page

	- `CartScreen.js`
	- `HomeScreen.js`
	- `LoginScreen.js`
	- `OrderListScreen.js`
	- `OrderScreen.js`
	- `PaymentScreen.js`
	- `PlaceOrderScreen.js`
	- `ProductEditScreen.js`
	- `ProductListScreen.js`
	- `ProductScreen.js`
	- `ProfileScreen.js`
	- `RegisterScreen.js`
	- `ShippingScreen.js`
	- `UserEditScreen.js`
	- `UserListScreen.js`

- `./src/app.js`: This file contains all the routes to the screens and would render each screen on demand.
- `./src/bootstrap.min.css`: This file contains the bootstrap cascading style sheet
- `./src/index.css`: This file contains the cascading style sheet
- `./src/index.js`: This file renders the app
- `./src/store.js` This file contains the whole state tree of the application.
## Backend Files
- `backend/backend/settings.py`: This file contains all the website settings, including registering any applications created, the location of the static files, database configuration details, etc.
- `backend/backend/urls.py`: This file contains the site level urls.
- `backend/shop_api/admin.py`: This file contains the registeration of the models in the admin user's builtin interface.
- `backend/shop_api/models.py`: This file contains the models. a model is the single, definitive source of information about the app's data. It contains the essential fields and behaviors of the data the app is storing. Generally, each model maps to a single database table.
- `backend/shop_api/serializers.py`: This file contains serializer classess that are responsible for converting objects into data types understandable by javascript and front-end frameworks.
- `backend/shop_api/urls.py`: This file contains the app level urls.
- `backend/shop_api/views.py`: This file contains Python functions or classes that receive a web request and return a web response. 

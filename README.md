# DATC-Cloud9

RagweedAlertApp: many people are allergic to ragweed, therefore an alert app which marks infested zones might help these people avoid these zones.

How it works:

Any user of the website can record and alert just but pressing a button. The services will automatically send the current time and location (GPS) to the API, marking those map coordinates with a tag.

Frontend: Angular, HTML, CSS;
Backend: Django (with Django REST Frameworks)
Database: PostgreSQL
Background Worker: Azure function app 

To run all webapp (ui + api) in localhost as docker instances run *docker compose up --build*

Cloud deployed API: https://ragweedalertapi.azurewebsites.net
Cloud deployed UI: https://ragweedalertsui.azurewebsites.net

Cloud apps may run slowly due to the free service plan



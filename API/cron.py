import json
import requests
import datetime

alerts = requests.get('https://ragweedalertsapi.azurewebsites.net/alerts/?format=json')

alerts_json = json.loads(alerts.text)

current_time = datetime.datetime.now()
current_time = str(current_time)
print(int(current_time[11:13])-2)

for i in alerts_json:
    id = (i['id'])
    time = (i['time'])
    latitude = (i['location_latitude'])
    longitude = (i['location_longitude'])

    print(f'Id: ', id)
    print(f'Time: ', time)
    print(f'Latitude: ', latitude)
    print(f'Longitude: ', longitude)

    if current_time[0:10] == time[0:10] and int(current_time[11:13])-2 == int(time[11:13]): # server host is 2 hrs behind RO time
        print('Fresh alert')
    else:
        print('Old alert that needs deleting')

    print(f'---------\n')


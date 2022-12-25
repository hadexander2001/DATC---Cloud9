import json
import requests
import datetime
import psycopg2

# Update connection string information
def connect():
    HOST = "ragweedalert-db.postgres.database.azure.com"
    DBNAME = "alerts"
    USER = "django@ragweedalert-db"
    PASSWORD = "HadyGuri*"

    conn = psycopg2.connect(dbname = DBNAME, user = USER, password = PASSWORD, host = HOST)
    print("Connection established")

# cursor.execute("DELETE FROM app_alert where id = 1")
# conn.commit()
# delete where time + 1 < time.now
def the_showing(cursor):
    connect()
    cursor.execute("SELECT * FROM app_alert")
    rows = cursor.fetchall()
    for row in rows:
        print("Data row = (%s, %s, %s)" %(str(row[0]), str(row[1]), str(row[2])))
    cursor.close()

def the_deleting(conn):
    cursor = conn.cursor()
    cursor.execute("delete from app_alert")
    conn.commit()


# cursor.execute("SELECT * FROM app_alert")
# rows = cursor.fetchall()

# Print all rows




# alerts = requests.get('https://ragweedalertsapi.azurewebsites.net/alerts/?format=json')
# # update = requests.get('https://ragweedalertsapi.azurewebsites.net/alerts')
# alerts_json = json.loads(alerts.text)

# current_time = datetime.datetime.now()
# current_time = str(current_time)
# print(int(current_time[11:13])-2)

# for i in alerts_json:
#     id = (i['id'])
#     time = (i['time'])
#     latitude = (i['location_latitude'])
#     longitude = (i['location_longitude'])

#     print(f'Id: ', id)
#     print(f'Time: ', time)
#     print(f'Latitude: ', latitude)
#     print(f'Longitude: ', longitude)

#     if current_time[0:10] == time[0:10] and int(current_time[11:13])-2 == int(time[11:13]): # server host is 2 hrs behind RO time
#         print('Fresh alert')
#     else:
#         print('Old alert that needs deleting')

#     print(f'---------\n')
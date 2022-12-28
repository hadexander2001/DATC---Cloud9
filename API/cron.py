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
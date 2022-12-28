import datetime
import logging
import json
import requests
import datetime
import psycopg2
import azure.functions as func

# Post alert:
    # {
    #     "time": "2022-12-26T10:32:20.364522Z",
    #     "location_latitude": 6.0,
    #     "location_longitude": 2.0
    # }
# Update connection string information
def connect():
    HOST = "ragweedalert-db.postgres.database.azure.com"
    DBNAME = "alerts"
    USER = "django@ragweedalert-db"
    PASSWORD = "HadyGuri*"

    conn = psycopg2.connect(dbname = DBNAME, user = USER, password = PASSWORD, host = HOST)
    print("The connection to the ragweedalert-db has been established")

    return conn


def the_updating():
    cursor = connect().cursor()

    cursor.execute("SELECT * FROM app_alert where time < now() - interval '1 minute'")
    rows = cursor.fetchall()

    print("Expired alerts:")
    for row in rows:
        print("Ragweed alert = (%s, %s, %s)" %(str(row[0]), str(row[1]), str(row[2])))
    cursor.close()


def main(mytimer: func.TimerRequest) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo = datetime.timezone.utc).isoformat()

    if mytimer.past_due:
        logging.info('The timer is past due!')

    logging.info('Background worker worked at %s', utc_timestamp)
    the_updating()

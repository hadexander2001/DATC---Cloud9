import datetime
import logging
import datetime
import psycopg2
import azure.functions as func

# Post alert:
    # {
    #     "time": "2023-01-08T10:32:20.364522Z",
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
    conn = connect()
    cursor = conn.cursor()

    print("Expired alerts:")
    cursor.execute("select * from app_alert where time < now() - interval '1 minute'")
    rows = cursor.fetchall()

    for row in rows:
        print("Ragweed alert # %s: time = %s, latitude = %s, longitude = %s" %(str(row[0]), str(row[1]), str(row[2]), str(row[3])))

    cursor.execute("delete from app_alert where time < now() - interval '1 minute'")
    conn.commit()
    cursor.close()


def main(mytimer: func.TimerRequest) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo = datetime.timezone.utc).isoformat()

    if mytimer.past_due:
        logging.info('The timer is past due!')

    logging.info('Background worker worked at %s', utc_timestamp)
    the_updating()

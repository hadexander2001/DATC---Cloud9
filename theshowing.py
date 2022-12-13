import psycopg2

# Update connection string information

host = "ragweedalert-db.postgres.database.azure.com"
dbname = "alerts"
user = "django@ragweedalert-db"
password = "HadyGuri*"
sslmode = "require"

# Construct connection string

conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(host, user, dbname, password, sslmode)
conn = psycopg2.connect(conn_string)
print("Connection established")

cursor = conn.cursor()

# Fetch all rows from table

cursor.execute("SELECT * FROM app_alert;")
rows = cursor.fetchall()

# Print all rows

for row in rows:
    print("Data row = (%s, %s, %s)" %(str(row[0]), str(row[1]), str(row[2])))
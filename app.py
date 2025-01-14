from dotenv import load_dotenv
import os
import psycopg2

# Step 1: Load environment variables from the .env file
load_dotenv()

# Step 2: Retrieve the DATABASE_URL from the environment variables
database_url = os.getenv("DATABASE_URL")

if database_url:
    print(f"Using database URL: {database_url}")
else:
    print("Error: DATABASE_URL not found in environment variables.")
    exit(1)

# Step 3: Connect to the PostgreSQL database
try:
    connection = psycopg2.connect(database_url)
    cursor = connection.cursor()

    # Step 4: Execute a simple query to check the connection
    cursor.execute("SELECT version();")
    db_version = cursor.fetchone()

    print("Connected to PostgreSQL database successfully!")
    print(f"Database version: {db_version}")

except Exception as e:
    print(f"Error while connecting to the database: {e}")

finally:
    # Step 5: Ensure the connection is closed
    if "connection" in locals() and connection:
        cursor.close()
        connection.close()
        print("PostgreSQL connection closed.")

import sqlite3
from sqlite3 import Error

def open_connection(database):
    connection = None
    try:
        connection = sqlite3.connect(database)
        print('database successfully opened')
    except Error as e:
        print(e)
    
    return connection

def close_connection(connection, database):
    try:
        connection.close()
    except Error as e:
        print(e)

def create_tables(connection):
    try:
        sql = """create table Users (
                    user_id varchar(255) primary key,
                    user_name varchar(255) not null,
                    user_email varchar(255) not null,
                    user_password varchar(255) not null)"""

        connection.execute(sql)
        connection.commit()

    except Error as e:
        connection.rollback()
        print(e)

def add_user(connection, user_id, username, email, hashed_password):
    try:
        sql = 'insert into Users values(?, ?, ?, ?)'
        args = [user_id, username, email, hashed_password]

        connection.execute(sql, args)
        connection.commit()
    except Error as e:
        connection.rollback()
        print(e)

def check_if_username_exists(connection, username):
    try:
        sql = "select user_name from Users where user_name = '" + username + "'"

        cursor = connection.cursor()
        rows = cursor.execute(sql).fetchall()

        if len(rows) > 0:
            return True
        
        return False

    except Error as e:
        print(e)




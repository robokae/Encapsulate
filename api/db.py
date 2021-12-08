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
                    username varchar(255) not null,
                    user_email varchar(255) not null,
                    user_password varchar(255) not null)"""

        connection.execute(sql)

        sql = """create table Posts (
                    post_id varchar(255) primary key,
                    post_title varchar(100) not null,
                    post_author_id int not null,
                    post_date date not null,
                    post_text varchar(1000) not null,
                    post_topic_id int)"""  

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


def get_user(connection, username):
    try:
        sql = "select * from Users where username = '" + username + "'"

        cursor = connection.cursor()

        query_result = cursor.execute(sql).fetchone()

        # Returns user info if username exists in database
        if query_result is not None:
            user_id, username, user_email, user_password = list(query_result)

            user_dict = {
                'user_id': user_id,
                'username': username,
                'user_email': user_email,
                'user_password': user_password
            }

            return user_dict
            
        return None

    except Error as e:
        print(e)

def add_post(connection, post_data):
    post_id, post_title, post_author, post_date, post_text, post_topic = post_data

    try:
        sql = 'insert into Posts values (?, ?, ?, ?, ?, ?)'
        args = [post_id, post_title, post_author, post_date, post_text, post_topic]

        cursor = connection.cursor()
        cursor.execute(sql, args)

        connection.commit()

    except Error as e:
        connection.rollback()
        print(e)



        




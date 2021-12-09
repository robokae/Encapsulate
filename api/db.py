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

        sql = """create table Liked (
                    liked_id varchar(255) primary key,
                    liked_post_id varchar(255) not null,
                    liked_by_id varchar(255) not null)"""

        connection.execute(sql)

        sql = """create table Comments (
                    comment_id varchar(255) primary key,
                    comment_post_id varchar(255) not null,
                    comment_author_id varchar(255) not null,
                    comment_date date not null,
                    comment_text varchar(1000) not null)"""

        connection.execute(sql)

        sql = """create table CommentReplies (
                    comment_reply_id varchar(255) primary key,
                    comment_reply_parent_comment_id varchar(255) not null,
                    comment_reply_author_id varchar(255) not null,
                    comment_reply_date date not null,
                    comment_reply_text varchar(1000) not null)"""

        connection.execute(sql)

        sql = """create table Topics (
                    topic_id varchar(255) primary key,
                    topic_name varchar(100) not null)"""

        connection.execute(sql)

        sql = """create table PostsWithTopics (
                    topic_post_id varchar(255) primary key,
                    topic_post_post_id varchar(255) not null,
                    topic_post_topic_id varchar(255) not null)"""

        connection.execute(sql)

        sql = """create table Followers (
                    follower_id varchar(255) primary key,
                    follower_user_id varchar(255) not null,
                    follower_following_id varchar(255) not null)"""

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
    post_id, post_title, post_author, post_date, post_text, post_topic_id = post_data

    try:
        sql = "select user_id from Users where username = '" + post_author + "'"

        cursor = connection.cursor()
        user_id = list(cursor.execute(sql).fetchone())[0]


        sql = 'insert into Posts values (?, ?, ?, ?, ?, ?)'
        args = [post_id, post_title, user_id, post_date, post_text, post_topic_id]

        connection.execute(sql, args)

        connection.commit()

    except Error as e:
        connection.rollback()
        print(e)

def get_posts(connection, username):
    posts_list = []
    try:
        sql = "select user_id from Users where username = '" + username + "'"

        cursor = connection.cursor()
        user_id = list(cursor.execute(sql).fetchone())[0]


        sql = """select post_title, username, post_date, post_text, topic_name
                    from Posts, Users, Topics
                    where post_author_id = user_id
                        and post_topic_id = topic_id
                        and username = ?"""
        args = [username]

        posts = list(cursor.execute(sql, args).fetchall())

        for post in posts:
            (post_title, username, post_date, post_text, topic_name) = post
            
            post_dict = {
                'title': post_title,
                'author': username,
                'date': post_date,
                'text': post_text,
                'topic': topic_name
            }

            posts_list.append(post_dict)

        return posts_list

    except Error as e:
        print(e)

    return None

def check_if_topic_exists(connection, topic):
    try:
        sql = "select topic_id from Topics where topic_name = '" + topic + "'"

        cursor = connection.cursor()
        topic_id = cursor.execute(sql).fetchone()

        if topic_id is None:
            return None

        return list(topic_id)[0]

    except Error as e:
        print(e)

def add_topic(connection, topic_id, topic_name):
    try:
        sql = 'insert into Topics values (?, ?)'
        args = [topic_id, topic_name]

        connection.execute(sql, args)
        connection.commit()
    except Error as e:
        connection.rollback()
        print(e)

def searchPosts(connection, search_term):
    try:
        sql = """select post_title, username, post_date, post_text, topic_name
                    from Posts, Users, Topics
                    where post_author_id = user_id
                        and post_topic_id = topic_id
                        and ((username like '%{}%') 
                                or (post_title like '%{}%')
                                or (post_text like '%{}%')
                                or (topic_name like '%{}%'))""".format(search_term, search_term, search_term, search_term)


        cursor = connection.cursor()
        relevant_posts = list(cursor.execute(sql).fetchall())

        if relevant_posts is None: 
            return None

        relevant_posts_list = []

        for post in relevant_posts:
            (post_title, username, post_date, post_text, topic_name) = post

            post_dict = {
                'title': post_title,
                'author': username,
                'date': post_date,
                'text': post_text,
                'topic': topic_name
            }

            relevant_posts_list.append(post_dict) 

        return relevant_posts_list

    except Error as e:
        print(e)




        




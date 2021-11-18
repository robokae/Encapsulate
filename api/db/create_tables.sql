-- =================
-- DROP TABLES
-- =================

drop table Users;
drop table Posts;
drop table Liked;
drop table Comments;
drop table CommentReplies;
drop table Topics;
drop table PostsWithTopics;
drop table Followers;

-- ==================
-- CREATE TABLES
-- ==================

create table Users (
    user_id int primary key,
    user_name varchar(100) not null,
    user_bio varchar(500) not null,
    user_is_verified boolean not null
);

create table Posts (
    post_id int primary key,
    post_author_id int not null,
    post_date date not null,
    post_topic_id int,
    post_text varchar(1000) not null
);

create table Liked (
    liked_id int primary key,
    liked_post_id int not null,
    liked_by_id int not null
);

create table Comments (
    comment_id int primary key,
    comment_post_id int not null,
    comment_author_id int not null,
    comment_date date not null,
    comment_text varchar(1000) not null
);

create table CommentReplies(
	comment_reply_id int primary key,
    comment_reply_parent_comment_id int not null,
	comment_reply_author_id int not null,
    comment_reply_date date not null,
	comment_reply_text varchar(1000) not null
);

create table Topics(
	topic_id int primary key,
	topic_name varchar(100) not null
);

create table PostsWithTopics(
	topic_post_ID int primary key,
	topic_post_post_id int not null,
	topic_post_topic_id int not null
);

create table Followers(
	follower_id int primary key,
	follower_user_id int not null,
	follower_following_id int not null 
);
-- drop
drop table Users;
drop table Posts;
drop table Liked;
drop table Comments;
drop table CommentReplies;
drop table Topics;
drop table PostsWithTopics;
drop table Followers;

-- create
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

-- insert
insert into Users values (1, 'Cecylia Dumas', 'Hi, my name is Cecylia Dumas', 0);
insert into Users values (2, 'Jeannette McDermott', 'Hi, my name is Jeannette McDermott', 1);
insert into Users values (3, 'Stipo Fabian', 'Hi, my name is Stipo Fabian', 1);
insert into Users values (4, 'Leonore Patenaude', 'Hi, my name is Leonore Patenaude', 0);
insert into Users values (5, 'Ashleigh McKenzie', 'Hi, my name is Ashleigh McKenzie', 1);
insert into Users values (6, 'Zef Němec', 'Hi, my name is Zef Němec', 0);
insert into Users values (7, 'Šimun Parish', 'Hi, my name is Šimun Parish', 0);
insert into Users values (8, 'Lennie Mac Dhuibhinse', 'Hi, my name is Lennie Mac Dhuibhinse', 0);
insert into Users values (9, 'Tomomi Stanković', 'Hi, my name is Tomomi Stanković', 1);
insert into Users values (10, 'Tyrrell Coelho', 'Hi, my name is Tyrrell Coelho', 1);

insert into Posts values (1, 6, '11-1-2021', 3, 'Post text from user 6');
insert into Posts values (2, 10, '11-3-2021', 1, 'Post text from user 10');
insert into Posts values (3, 9,	'11-4-2021', 5,	'Post text from user 9');
insert into Posts values (4, 7, '11-6-2021', 9, 'Post text from user 7');
insert into Posts values (5, 6, '11-7-2021', 10, 'Post text from user 6');
insert into Posts values (6, 3, '11-8-2021', 2, 'Post text from user 3');
insert into Posts values (7, 8, '11-10-2021', 3, 'Post text from user 8');
insert into Posts values (8, 6, '11-11-2021', 1, 'Post text from user 6');
insert into Posts values (9, 2, '11-11-2021', 2, 'Post text from user 2');
insert into Posts values (10, 4, '11-13-2021', 8, 'Post text from user 4');

insert into Liked values (1, 10, 6);
insert into Liked values (2, 6, 4);
insert into Liked values (3, 6, 1);
insert into Liked values (4, 2, 6);
insert into Liked values (5, 10, 3);
insert into Liked values (6, 3, 3);
insert into Liked values (7, 4, 3);
insert into Liked values (8, 7, 5);
insert into Liked values (9, 1, 10);
insert into Liked values (10, 7, 3);

insert into Comments values (1, 7, 5, '11-1-2021', 'Comment from user 5');
insert into Comments values (2, 2, 10, '11-2-2021', 'Comment from user 10');
insert into Comments values (3, 9, 2, '11-3-2021', 'Comment from user 2');
insert into Comments values (4, 9, 3, '11-6-2021', 'Comment from user 3');
insert into Comments values (5, 8, 10, '11-7-2021', 'Comment from user 10');
insert into Comments values (6, 10, 9, '11-8-2021', 'Comment from user 9');
insert into Comments values (7, 5, 10, '11-9-2021', 'Comment from user 10');
insert into Comments values (8, 1, 10, '11-10-2021', 'Comment from user 10');
insert into Comments values (9, 5, 5, '11-14-2021', 'Comment from user 5');
insert into Comments values (10, 7, 10, '11-15-2021', 'Comment from user 10');

-- select


-- update


-- delete


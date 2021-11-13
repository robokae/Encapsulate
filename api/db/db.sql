-- create
create table Users (
    user_id int not null,
    user_name varchar(100) not null,
    user_bio varchar(255) not null,
    user_num_posts int not null,
    user_num_followers int not null,
    user_num_following int not null,
    user_post_id int not null,
    user_is_verified boolean not null
);

create table Posts (
    post_id int not null,
    post_author_id int not null,
    post_author varchar(100) not null,
    post_date date not null,
    post_text varchar(255) not null,
    post_num_likes int not null,
    post_num_comments int not null
);

create table Comments (
    comment_id int not null,
    comment_post_id int not null,
    comment_user_id int not null,
    comment_date date not null,
    comment_text verchar(255) not null,
    comment_num_likes int not null,
    comment_num_replies int not null
);

create table Likes (
    like_post int not null,
    like_user int not null
);

-- insert

-- update

-- delete


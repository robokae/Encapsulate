-- ================
-- QUERIES
-- ================

-- Get all the posts by a certain user 
    -- Example user: 6
SELECT 
    Users.user_name, 
    Posts.post_date, 
    Posts.post_text, 
    Topics.topic_name,
    (SELECT count(Liked.liked_id)
     FROM Liked
     WHERE Liked.liked_post_id = post_id) as num_likes,
    (SELECT count(Comments.comment_id)
     FROM Comments
     WHERE Comments.comment_post_id = post_id) as num_comments
FROM 
    Posts, 
    Users, 
    Topics
WHERE 
    Posts.post_author_id = Users.user_id and 
    Posts.post_topic_id = Topics.topic_id  and 
    Posts.post_author_id = 6;

-- Get all the instances of a specific topic from a user
    -- Example user: 6
SELECT 
    Users.user_name, 
    Posts.post_date,
    Topics.topic_name, 
    Posts.post_text,
    (SELECT count(Liked.liked_id)
    FROM Liked
    WHERE Liked.liked_post_id = post_id) as num_likes,
    (SELECT count(Comments.comment_id)
    FROM Comments
    WHERE Comments.comment_post_id = post_id) as num_comments
FROM 
    Topics, 
    Users, 
    PostsWithTopics, 
    Posts 
WHERE 
    Topics.topic_id = PostsWithTopics.topic_post_topic_id and 
    Posts.post_author_id = Users.user_id and 
    Posts.post_topic_id = Topics.topic_id and 
    Users.user_id = 6 and 
    Topics.topic_name = 'Sports'; 

--Get all the users matching a certain name
    -- Example name: 'Tomomi Stanković'
SELECT user_name
FROM Users
WHERE user_name = 'Tomomi Stanković';

-- Get all the comments for a specific post 
    -- Example post_id: 5
SELECT 
    Users.user_name, 
    Comments.comment_date,
    (Select count(CommentReplies.comment_reply_author_id)
     FROM CommentReplies 
     WHERE CommentReplies.comment_reply_parent_comment_id = Comments.comment_author_id) as num_replies
FROM 
    Posts, 
    Comments, 
    Users
WHERE 
    Posts.post_id = Comments.comment_post_id and 
    Comments.comment_author_id = Users.user_id and
    Comments.comment_post_id = 5;

-- Get all the posts matching a certain search phrase
    -- Example search phrase: 'blandit volutpat maecenas'
SELECT 
    user_name,
    post_date,
    topic_name,
    post_text,
    (SELECT count(*)
     FROM Liked
     WHERE post_id = liked_post_id) as num_likes,
    (SELECT count(*)
     FROM Comments
     WHERE post_id = comment_post_id) as num_comments
FROM
    Users,
    Posts,
    Topics
WHERE
    user_id = post_author_id and
    post_topic_id = topic_id and
    post_text like '%blandit volutpat maecenas%';

--Get all the posts made by users on a certain date
    -- Example date: '11-11-2021'
SELECT 
    user_name,
    post_date,
    topic_name,
    post_text,
    (SELECT count(*)
     FROM Liked
     WHERE post_id = liked_post_id) as num_likes,
    (SELECT count(*)
     FROM Comments
     WHERE post_id = comment_post_id) as num_comments
FROM
    Users,
    Posts,
    Topics
WHERE
    user_id = post_author_id and
    post_topic_id = topic_id and
    post_date like '11-11-2021';

-- Get all the replies to a comment
    -- Example comment_id: 5
SELECT 
    user_name,
    comment_reply_date,
    comment_reply_text
FROM
    CommentReplies,
    Comments,
    Users
WHERE
    comment_reply_parent_comment_id = comment_id and
    comment_reply_author_id = user_id and
    comment_id = 5;

-- Get all the followers of a user
    -- Example user_name: Stipo Fabian
SELECT 
    Follower.user_name
FROM
    Users Followed,
    Users Follower,
    Followers
WHERE
    follower_following_id = Followed.user_id and
    Followed.user_name = 'Stipo Fabian' and
    follower_user_id = Follower.user_id;
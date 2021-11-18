-- ===================
-- UPDATE TABLE ROWS
-- ===================

-- Update post content when the user modifies a post
    -- Example: update post_text of post_id 3 with new content
UPDATE 
    Posts
SET
    post_text = 'Hello world'
WHERE
    post_id = 3;

-- Update the user name if user changes it
    -- Example: update user_id 2's name as Jane Doe
UPDATE
    Users
SET
    user_name = 'Jane Doe'
WHERE
    user_id = 2;

-- Update a user biography
    -- Example: update user_id 2's user bio with 'Hi, my name is Jane Doe'
UPDATE
    Users
SET
    user_bio = 'Hi, my name is Jane Doe'
WHERE
    user_id = 2;


-- ===================
-- DELETE TABLE ROWS
-- ===================

-- Remove first post
DELETE FROM Posts WHERE Post_id=1;
DELETE FROM Comments WHERE comment_post_id=1;
DELETE FROM Liked WHERE liked_post_id=1;
DELETE FROM CommentReplies WHERE comment_reply_parent_comment_id=1;

-- Remove a follower, Cecylia Dumas unfollowed Jane Doe
DELETE FROM Followers WHERE follower_user_id=1 and follower_following_id=2;
-- Remove a like by Zef Němec from the 10th post 
DELETE FROM Liked WHERE liked_by_id=6 and liked_post_id=10;
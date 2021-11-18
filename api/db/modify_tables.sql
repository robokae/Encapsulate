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

-- Remove a post

-- Remove a follower

-- Remove a like
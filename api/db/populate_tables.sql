-- ================================
-- INSERT VALUES INTO TABLES
-- ================================

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

insert into Posts values (1, 6, '11-01-2021', 3, 'nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat');
insert into Posts values (2, 10, '11-03-2021', 1, 'dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer');
insert into Posts values (3, 9,	'11-04-2021', 5,	'risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere');
insert into Posts values (4, 7, '11-06-2021', 9, 'quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non');
insert into Posts values (5, 6, '11-07-2021', 10, 'sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at');
insert into Posts values (6, 3, '11-08-2021', 2, 'vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit');
insert into Posts values (7, 8, '11-10-2021', 3, 'elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa');
insert into Posts values (8, 6, '11-11-2021', 1, 'eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi');
insert into Posts values (9, 2, '11-11-2021', 2, 'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis');
insert into Posts values (10, 4, '11-13-2021', 8, 'rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis');

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

insert into Comments values (1, 7, 5, '11-01-2021', 'blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae');
insert into Comments values (2, 2, 10, '11-02-2021', 'facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere');
insert into Comments values (3, 9, 2, '11-03-2021', 'felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor');
insert into Comments values (4, 9, 3, '11-06-2021', 'eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus');
insert into Comments values (5, 8, 10, '11-07-2021', 'nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices');
insert into Comments values (6, 10, 9, '11-08-2021', 'vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at');
insert into Comments values (7, 5, 10, '11-09-2021', 'rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel');
insert into Comments values (8, 1, 10, '11-10-2021', 'duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit');
insert into Comments values (9, 5, 5, '11-14-2021', 'luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit');
insert into Comments values (10, 7, 10, '11-15-2021', 'sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra');

insert into CommentReplies values(1, 6, 1, '11-02-2021', 'ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor');
insert into CommentReplies values(2, 3, 9, '11-03-2021', 'sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in');
insert into CommentReplies values(3, 5, 7, '11-05-2021', 'at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae');
insert into CommentReplies values(4, 1, 10, '11-07-2021', 'id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus');
insert into CommentReplies values(5, 10, 6, '11-09-2021', 'tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis');
insert into CommentReplies values(6, 8, 4, '11-10-2021', 'vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu');
insert into CommentReplies values(7, 2, 2, '11-11-2021', 'et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis');
insert into CommentReplies values(8, 6, 10, '11-14-2021', 'consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit');
insert into CommentReplies values(9, 4, 4, '11-18-2021', 'diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo');
insert into CommentReplies values(10, 7, 1, '11-20-2021', 'tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo');

insert into Topics values(1, 'Science');
insert into Topics values(2, 'Art');
insert into Topics values(3, 'Enertainment');
insert into Topics values(4,'Technology');
insert into Topics values(5, 'Local News');
insert into Topics values(6, 'Global News');
insert into Topics values(7, 'Business');
insert into Topics values(8, 'Economics');
insert into Topics values(9, 'Fashion');
insert into Topics values(10, 'Sports');

insert into PostsWithTopics values (1, 3, 5); 
insert into PostsWithTopics values (2, 2, 6); 
insert into PostsWithTopics values (3, 3, 3); 
insert into PostsWithTopics values (4, 8, 9); 
insert into PostsWithTopics values (5, 4, 9); 
insert into PostsWithTopics values (6, 9, 9); 
insert into PostsWithTopics values (7, 6, 5); 
insert into PostsWithTopics values (8, 6, 10); 
insert into PostsWithTopics values (9, 8, 1); 
insert into PostsWithTopics values (10, 7, 6); 

insert into Followers values(1, 3, 9); 
insert into Followers values(2, 3, 5); 
insert into Followers values(3, 3, 2); 
insert into Followers values(4, 2, 3); 
insert into Followers values(5, 4, 5); 
insert into Followers values(6, 7, 3); 
insert into Followers values(7, 1, 2); 
insert into Followers values(8, 10, 3); 
insert into Followers values(9, 7, 3); 
insert into Followers values(10, 6, 5); 
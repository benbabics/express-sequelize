# This is just a cURL command.  This file can be run from the prompt by typing:
#  . new-comment.sh
curl --header "Content-Type: application/json"					\
  --request POST												\
  --data '{"name":"My Comment","text":"This is a comment"}'		\
  http://localhost:3000/api/tutorials/1/comments/

# This is just a cURL command.  This file can be run from the prompt by typing:
#  . new-tutorial.sh
curl --header "Content-Type: application/json"											\
  --request POST																		\
  --data '{"title":"My Tutorial","description":"This is a tutorial","published":1}'		\
  http://localhost:3000/api/tutorials

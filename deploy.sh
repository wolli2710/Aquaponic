dir="~/Desktop/"
app="Aquaponic"
server="10.0.0.8"
user="pi"

rsync -avz --del ./ $user@$server:$dir$app

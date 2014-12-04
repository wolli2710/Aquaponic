dir="~/Desktop/"
app="Aquaponic"
server="10.0.0.77"
user="pi"

rsync -avz --del ./ $user@$server:$dir$app

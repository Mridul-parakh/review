var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'lllll' }, function(err, tunnel) {
  console.log('LT running');  
});

{/* function localtunnel {
  lt -p 5000 -s lllll
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done */}
fetch("https://www.codechef.com/users/gopal_x2", {headers: {'User-Agent': 'Mozilla/5.0'}})
.then(r => r.text())
.then(t => {
  const m = t.match(/var userDailySubmissionsStats = (\[.*?\]);/s);
  console.log(m ? m[1].substring(0, 50) : "NO MATCH", t.length);
});

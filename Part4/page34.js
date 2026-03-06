import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(8080, () => console.log("Server Started"));

app.use(express.urlencoded({ extended: true }));

let users = [
  { name: "Poojitha", email: "poojitha@gmail.com", password: "1234" },
  { name: "Ajay", email: "ajay@gmail.com", password: "1234" },
  { name: "Komal", email: "komal@gmail.com", password: "1234" },
];

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  users = [...users, req.body];
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("dashboard", { users });
});
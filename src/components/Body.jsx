import classes from "./Body.module.css";
import cat from "../assets/favicon-32x32.png";

export default function Body() {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <img src={cat} />
        <div className={classes.userinfo}>
          <h1>{"the name"}</h1>
          <a><h3>@{"name"}</h3></a>
          <p>
            joined {"day"} {"month"} {"year"}
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className={classes.stats}>
        <div className={classes.repos}>
          <h5>Repos</h5>
          {"8"}
        </div>
        <div className={classes.followers}>
          <h5>Followers</h5>
          {"8333"}
        </div>
        <div className={classes.following}>
          <h5>Following</h5>
          {"8"}
        </div>
      </div>
      <div>
        <div className={classes.location}>
          <img />
          {"location"}
        </div>
        <div className={classes.github}>
          <img />
          {"github web"}
        </div>
        <div className={classes.twitter}>
          <img />
          {"twitter"}
        </div>
        <div className={classes.git}>
          <img />
          {"@github"}
        </div>
      </div>
    </div>
  );
}

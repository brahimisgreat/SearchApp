import classes from "./Body.module.css";
import location from "../assets/icon-location.svg";
import company from "../assets/icon-company.svg";
import twitter from "../assets/icon-twitter.svg";
import website from "../assets/icon-website.svg";
import PropTypes from "prop-types";

export default function Body({ data }) {
  //gets users date of account creation
  const eta = data.created_at;
  const date = new Date(eta);
  const newdate = date.toDateString();

  Body.propTypes = {
    data: PropTypes.object.isRequired,
  };

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <img src={data.avatar_url} />
        <div className={classes.userinfo}>
          <h1>{data.login}</h1>
          <a>
            <h3>@{data.login}</h3>
          </a>
          <p>{newdate}</p>
        </div>
      </div>
      <p className={classes.para}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className={classes.stats}>
        <div className={classes.sta}>
          <h5>Repos</h5>
          <span>{data.public_repos}</span>
        </div>
        <div className={classes.sta}>
          <h5>Followers</h5>
          <span>{data.followers}</span>
        </div>
        <div className={classes.sta}>
          <h5>Following</h5>
          <span>{data.following}</span>
        </div>
      </div>
      <div className={classes.sociallinks}>
        <div className={classes.sl}>
          <img src={location} />
          <span> {data.location ? data.location : "not available"}</span>
        </div>
        <div className={classes.sl}>
          <img src={website} />
          <span> {data.html_url ? data.html_url : "not available"}</span>
        </div>
        <div className={classes.sl}>
          <img src={twitter} />
          <span>
            {data.twitter_username ? data.twiitter_username : "not available"}
          </span>
        </div>
        <div className={classes.sl}>
          <img src={company} />
          <span className={classes.twit}>
            @{data.company ? data.company : "not available"}
          </span>
        </div>
      </div>
    </div>
  );
}


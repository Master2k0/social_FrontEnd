import EastIcon from "@mui/icons-material/East";
import PagesIcon from "@mui/icons-material/Pages";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WestIcon from "@mui/icons-material/West";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Box, type Theme, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { createStyles, makeStyles } from "@mui/styles";

import CardWrapper from "@/containers/Profile/Card";

const information = {
  aboutMe: {
    introduce:
      "Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.",
    joined: "March 26th, 2017",
    city: "Los Angeles, CA",
    age: "25",
  },
  personalInfo: {
    email: "ghuntress@yourmail.com",
    birthday: "May 25th, 1996",
    occupation: "Streamer",
    status: "Single",
  },
  interests: `
    <h4>Favourite TV Shows</h4>
    <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy, The Last Windbender, Game of Wars.</p>
  `,
  jobAndEducation: [
    {
      title: "Lead Game Developer",
      time: "2015 - 2016",
      description:
        'Lead the development of the multi-award winning game "Pineapple in the Pizza"',
    },
    {
      title: "Lead Game Developer",
      time: "2019 - 2020",
      description:
        'Lead the development of the multi-award winning game "Pineapple in the Pizza"',
    },
    {
      title: "Lead Game Developer",
      time: "2020 - now",
      description:
        'Lead the development of the multi-award winning game "Pineapple in the Pizza"',
    },
  ],
  moreStats: {
    followers: "1.337",
    following: "666",
    friends: "420",
    mostLikedPost: "1.337",
    lastPostUpdate: "1 day ago",
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textGray: {
      color: "#adafca",
      fontWeight: 700,
      lineHeight: "16px",
      fontSize: "12px",
    },
    textGrayLight: {
      color: "#8f91ac",
      fontWeight: 500,
      fontSize: "14px",
    },
    textCommon: {
      color: "#3e3f5e",
      fontWeight: 400,
      fontSize: "14px",
    },
    textTitle: {
      color: "#3e3f5e",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "16px",
    },
    iconWrapper: {
      width: "48px",
      height: "48px",
      background: "linear-gradient(135deg, #fddb92 0%,#d1fdff 100%)",
      color: "#fff",
      borderRadius: "999px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

function About() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid xs={12} lg={3}>
        <Box className="flex gap-3 flex-col">
          {/* About Me */}

          <CardWrapper title="About Me">
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Typography className={classes.textCommon}>
                  {information.aboutMe.introduce}
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography className={classes.textGrayLight}>
                  Joined
                </Typography>
                <Typography className={classes.textGrayLight}>City</Typography>
                <Typography className={classes.textGrayLight}>Age</Typography>
              </Grid>
              <Grid xs={8}>
                <Typography className={classes.textCommon}>
                  {information.aboutMe.joined}
                </Typography>
                <Typography className={classes.textCommon}>
                  {information.aboutMe.city}
                </Typography>
                <Typography className={classes.textCommon}>
                  {information.aboutMe.age}
                </Typography>
              </Grid>
            </Grid>
          </CardWrapper>
          {/* Personal Info */}
          <CardWrapper title="Personal Info">
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Typography>Email</Typography>
                <Typography>Birthday</Typography>
                <Typography>Occupation</Typography>
                <Typography>Status</Typography>
              </Grid>
              <Grid xs={8}>
                <Typography>{information.personalInfo.email}</Typography>
                <Typography>{information.personalInfo.birthday}</Typography>
                <Typography>{information.personalInfo.occupation}</Typography>
                <Typography>{information.personalInfo.status}</Typography>
              </Grid>
            </Grid>
          </CardWrapper>
        </Box>
      </Grid>
      <Grid xs={12} lg={6}>
        <Box className="flex flex-col gap-3">
          <CardWrapper title="Personal Info">
            <Grid container spacing={2}>
              <Box
                dangerouslySetInnerHTML={{ __html: information.interests }}
              />
            </Grid>
          </CardWrapper>
          <CardWrapper title="Job and Education">
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: "0",
                  padding: "0",
                },
              }}
            >
              {information.jobAndEducation.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="flex flex-col gap-1">
                    <Typography variant="h6" component="span">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      className="text-[#adafca]"
                    >
                      {item.time}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </CardWrapper>
        </Box>
      </Grid>
      <Grid xs={12} lg={3}>
        <CardWrapper title="More Stats">
          <Grid container spacing={2}>
            <Grid xs={4} className="flex flex-col gap-2 items-center">
              <Box className={classes.iconWrapper}>
                <EastIcon />
              </Box>
              <Box className={classes.iconWrapper}>
                <WestIcon />
              </Box>
              <Box className={classes.iconWrapper}>
                <SentimentSatisfiedAltIcon />
              </Box>
              <Box className={classes.iconWrapper}>
                <ThumbUpAltIcon />
              </Box>
              <Box className={classes.iconWrapper}>
                <PagesIcon />
              </Box>
            </Grid>
            <Grid xs={8} className="flex flex-col gap-2">
              <Box className="h-12">
                <Typography className={classes.textGrayLight}>
                  Followes
                </Typography>
                <Typography className={classes.textTitle}>
                  {information.moreStats.followers}
                </Typography>
              </Box>
              <Box className="h-12">
                <Typography className={classes.textGrayLight}>
                  Following
                </Typography>
                <Typography className={classes.textTitle}>
                  {information.moreStats.following}
                </Typography>
              </Box>
              <Box className="h-12">
                <Typography className={classes.textGrayLight}>
                  Friends
                </Typography>
                <Typography className={classes.textTitle}>
                  {information.moreStats.friends}
                </Typography>
              </Box>
              <Box className="h-12">
                <Typography className={classes.textGrayLight}>
                  Most Liked Post
                </Typography>
                <Typography className={classes.textTitle}>
                  {information.moreStats.mostLikedPost}
                </Typography>
              </Box>
              <Box className="h-12">
                <Typography className={classes.textGrayLight}>
                  Last Post Update
                </Typography>
                <Typography className={classes.textTitle}>
                  {information.moreStats.lastPostUpdate}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default About;

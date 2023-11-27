import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...!";
  return (
    <Box
      sx={{
        marginTop: { lg: "40px", xs: "20px" },
      }}
      p={"20px"}
      borderBottom={"2px solid  #FFCCCB"}
    >
      <Typography variant="h4" mb={"40px"}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "40px" } }}
      >
        {exerciseVideos?.slice(0, 2).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              srcset=""
              style={{ border: "2px solid black" }}
            />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <p style={{ color: "#000", fontSize: "15px" }}>
                {item.video.channelName}
              </p>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos;

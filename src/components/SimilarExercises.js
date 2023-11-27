import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "30px", xs: "15" } }} p={"20px"}>
      <Typography variant="h4" mb={"50px"}>
        Exercises that{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          target
        </span>{" "}
        same muscle group
      </Typography>
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
export default SimilarExercises;

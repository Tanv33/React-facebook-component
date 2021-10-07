import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function FacebookPost({ title, subHeader, smallImg, mainImg ,content}) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          <Avatar
            alt=""
            src={
              smallImg
                ? smallImg
                : "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            }
          />
        }
        title={title ? title : "Ted"}
        subheader={subHeader ? subHeader : "4 hours ago"}
      />
      {
        <CardMedia
          component="img"
          height="140"
          image={
            mainImg
              ? mainImg
              : "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          }
          alt="Nicola Sturgeon on a TED talk stage"
        />
      }

      <CardContent>
        {
          <Typography variant="body2" color="text.secondary" component="p">
            {
              content?content:"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        }
      </CardContent>
    </Card>
  );
}
export default FacebookPost;

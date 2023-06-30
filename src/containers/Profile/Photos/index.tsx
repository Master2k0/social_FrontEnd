import ImageList from "@mui/material/ImageList";

import PhotoComponent from "@/containers/Profile/Photos/PhotoComponent";

const images = Array(10).fill({
  src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  title: "Breakfast",
});

function Photos() {
  return (
    <ImageList cols={6}>
      {images.map((item, index) => (
        <PhotoComponent key={item.src} src={item.src} title={item.title} />
      ))}
    </ImageList>
  );
}

export default Photos;

import ImageListItem from "@mui/material/ImageListItem";

interface IPhotoComponentProps {
  src: string;
  title: string;
  key: string | number;
}

function PhotoComponent({ src, title, key }: IPhotoComponentProps) {
  return (
    <ImageListItem key={key}>
      <img
        className="rounded-md"
        src={`${src}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
    </ImageListItem>
  );
}

export default PhotoComponent;

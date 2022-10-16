import { StyledBoxVideo, StyledImg } from "./StyledCardVideo"

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <StyledBoxVideo onClick={reproduzVideo}>
      <StyledImg src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </StyledBoxVideo>
  );
}

export default CardVideo;

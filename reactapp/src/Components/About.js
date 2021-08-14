import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../pages/watch/watch.css";
export default function Watch() {
  let movie = {
    name: "the suicide squad",
    poster:
      "https://img.yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg",
    rating: 2.6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    date: 2021,
    images: [
      "https://wallpaperaccess.com/full/246809.jpg",
      "https://cdn.wallpapersafari.com/12/90/LSVhuk.jpg",
      "https://wallpaperaccess.com/full/682648.jpg",
    ],
  };

  return (
    <div className="vid-desc">
      <div className="video-box" style={{padding:40}}>
      <img style={{width:300, float:"left"}}  src="https://cdn.discordapp.com/attachments/836357990432636929/875775970886418452/blue.png" />
          <h2>About us</h2>
  
      <p style={{textAlign:"justify"}} >   Welcome to SNACKS-MV, your number one source for all your favorite movies. We're dedicated to giving you the very best of movies, with a focus on top rated, different genres, and featured.


Founded in 2021 by Ameena Allan, Fatima Harahsheh and Omar Hawwash,  SNACKS-MV is a new startup in Ramallahe. When Ameena Allan, Fatima Harahsheh and Omar Hawwash first started out, their passion for  "all in one free movies" drove them to work all day, do tons of research, and not sleep. so that SNACKS-MV can offer you "free amazing movies". We hope to serve people all over the world, and are thrilled that we're able to turn our passion into our own website.


we hope you enjoy our website as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.

</p>
<p>Sincerely,</p>

<p>Ameena Allan, Fatima Harahsheh and Omar Hawwash.</p>
        
      </div>
      </div>
    
  );
}

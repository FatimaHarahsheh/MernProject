import "./watch.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

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
      <div className="video-box">
        <Splide
          options={{
            rewind: true,
            perPage: 1,
            perMove: 1,
            gap: "0.5rem",
            autoplay: false,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
            speed: 400,
            interval: 2000,
          }}
        >
          <SplideSlide>
            <iframe
              id="player"
              src="https://www.youtube.com/embed/tnLfbN8mKbs?enablejsapi=1&mute=1"
              title="DCT introduction video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </SplideSlide>
          {movie.images.map((m, i) => {
            return (
              <SplideSlide>
                <img src={m} alt="Image_2" width="100%" height="100%" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="desc">
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

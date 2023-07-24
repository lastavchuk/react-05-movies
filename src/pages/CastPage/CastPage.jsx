import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { IMG_BASE_URL, IMG_W300, notifyParams } from 'services/variables';
import { Notify } from 'notiflix';
import noImg from '../../images/no-image.png';
import StyledCastPage from './CastPage.styled';

function CastPage() {
    const [actors, setActors] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const getMovieActors = async () => {
            try {
                const { cast } = await fetchMovieCredits(movieId);
                setActors(cast);
            } catch (error) {
                Notify.failure(
                    `Someting wrong!</br><b>${error.message}</b>`,
                    notifyParams
                );
            }
        };
        getMovieActors();
    }, [movieId]);

    return (
        <>
            {!!actors.length ? (
                <StyledCastPage>
                    {actors.map(actor => (
                        <li key={actor.cast_id}>
                            <img
                                src={
                                    actor.profile_path
                                        ? IMG_BASE_URL +
                                          IMG_W300 +
                                          actor.profile_path
                                        : noImg
                                }
                                alt={actor.name}
                                loading="lazy"
                            />
                            <h4>{actor.name}</h4>
                            <p>
                                <b>Character: </b>
                                {actor.character}
                            </p>
                        </li>
                    ))}
                </StyledCastPage>
            ) : (
                <p>No cast</p>
            )}
        </>
    );
}
export default CastPage;

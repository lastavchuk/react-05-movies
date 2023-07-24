import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/api';
import { IMG_BASE_URL, IMG_W185, notifyParams } from 'services/variables';
import { Notify } from 'notiflix';
import noImg from '../../images/no-image.png';
import StyledReviewsPage from './ReviewsPage.styled';

function ReviewsPage() {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                const { results } = await fetchMovieReviews(movieId);
                setReviews(results);
            } catch (error) {
                Notify.failure(
                    `Someting wrong!</br><b>${error.message}</b>`,
                    notifyParams
                );
            }
        };
        getMovieReviews();
    }, [movieId]);

    function getAvatar(url) {
        if (!url) return noImg;

        if (url.includes('http')) {
            return url.substr(1);
        }
        return IMG_BASE_URL + IMG_W185 + url;
    }
    return (
        <>
            {!!reviews.length ? (
                <StyledReviewsPage>
                    {reviews.map(el => (
                        <li key={el.id} className="wrapper">
                            <div>
                                <img
                                    width="80px"
                                    src={getAvatar(
                                        el.author_details.avatar_path
                                    )}
                                    alt={el.author}
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h4>{el.author}</h4>
                                <p>{el.content}</p>
                            </div>
                        </li>
                    ))}
                </StyledReviewsPage>
            ) : (
                <p>No reviews</p>
            )}
        </>
    );
}
export default ReviewsPage;

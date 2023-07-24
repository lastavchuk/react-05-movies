import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

export function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="movies" element={<MoviesPage />} />
                <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<CastPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

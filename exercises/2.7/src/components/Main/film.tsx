import {film} from '../../types';

interface FilmsProps {
    films: film[];
}

const Films = ({films} : FilmsProps) => {
    return <table>
    <thead>
        <tr>
            <th>Titre</th>
            <th>Director</th>
            <th>Durée</th>
            <th>Image</th>
            <th>Description</th>
            <th>Budget</th>
        </tr>
    </thead>
    <tbody>
        {films.map((film) => (
            <tr key={film.id}>
                <td>{film.titre}</td>
                <td>{film.director}</td>
                <td>{film.duree}</td>
                <td>{film.image}</td>
                <td>{film.description}</td>
                <td>{film.budget}</td>
            </tr>
        ))}
    </tbody>
    </table>
}

export default Films;
import { heroDelete } from '../../components/heroesList/heroesSlice';
import { useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';

const HeroesListItem = ({ id, name, description, element }) => {
  let elementClassName;

  const dispatch = useDispatch();
  const { request } = useHttp();

  const deleteHero = (id) => {
    dispatch(heroDelete(id));
    request(`http://localhost:3001/heroes/${id}`, 'DELETE');
  };

  switch (element) {
    case 'fire':
      elementClassName = 'bg-danger bg-gradient';
      break;
    case 'water':
      elementClassName = 'bg-primary bg-gradient';
      break;
    case 'wind':
      elementClassName = 'bg-success bg-gradient';
      break;
    case 'earth':
      elementClassName = 'bg-secondary bg-gradient';
      break;
    default:
      elementClassName = 'bg-warning bg-gradient';
  }

  return (
    <li className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
      <img
        src="https://media.istockphoto.com/id/532237983/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D0%B0%D1%8F-%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C.jpg?s=1024x1024&w=is&k=20&c=usl2ql7dy69FF2vPD-Rk9eCb2F15pE7AOrAxMxcK1PE="
        className="img-fluid w-25 d-inline"
        alt="unknown hero"
        style={{ objectFit: 'cover' }}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
          onClick={() => deleteHero(id)}
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
